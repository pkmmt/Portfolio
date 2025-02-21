"use client";

import React, { useState } from 'react';
import styles from "@/app/ui/dashboard/communications/communications.module.css";

const RECIPIENT_OPTIONS = [
  { value: 'All', label: 'All Users' },
  { value: 'Admins', label: 'Administrators' },
  { value: 'Donors', label: 'Donors' },
  { value: 'Reps', label: 'Representatives' }
];

const MESSAGE_TYPES = [
  { value: 'Email', label: 'Email Message' },
  { value: 'In-App', label: 'In-App Notification' },
  { value: 'SMS', label: 'SMS Message' },
  { value: 'Push', label: 'Push Notification' }
];

const CommunicationsPage = () => {
  const [formData, setFormData] = useState({
    message: '',
    recipient: 'All',
    subject: '',
    messageType: 'Email'
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (formData.messageType === 'Email' && !formData.subject.trim()) {
      newErrors.subject = 'Subject is required for emails';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const handleSend = async () => {
    if (!validateForm()) return;

    setIsSending(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Sending message:', {
        type: formData.messageType,
        recipient: formData.recipient,
        subject: formData.subject,
        message: formData.message
      });

      // Reset form
      setFormData({
        message: '',
        recipient: 'All',
        subject: '',
        messageType: 'Email'
      });
      
      alert(`${formData.messageType} sent successfully!`);
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Communications Center</h1>
      
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label htmlFor="recipient">Recipient Group</label>
            <select
              id="recipient"
              value={formData.recipient}
              onChange={handleInputChange}
              className={styles.select}
            >
              {RECIPIENT_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formField}>
            <label htmlFor="messageType">Message Type</label>
            <select
              id="messageType"
              value={formData.messageType}
              onChange={handleInputChange}
              className={styles.select}
            >
              {MESSAGE_TYPES.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {formData.messageType === 'Email' && (
          <div className={styles.formField}>
            <label htmlFor="subject">Subject Line</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.subject ? styles.error : ''}`}
              placeholder="Enter email subject"
            />
            {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
          </div>
        )}

        <div className={styles.formField}>
          <label htmlFor="message">Message Content</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
            placeholder="Type your message here..."
            rows={6}
          />
          {errors.message && <span className={styles.errorText}>{errors.message}</span>}
        </div>

        <button
          className={`${styles.button} ${isSending ? styles.sending : ''}`}
          onClick={handleSend}
          disabled={isSending}
        >
          {isSending ? 'Sending...' : `Send ${formData.messageType}`}
        </button>
      </form>
    </div>
  );
};

export default CommunicationsPage;