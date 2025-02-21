'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { QrCode } from 'lucide-react';
import './DonorProfile.css'
const DonorProfile = () => {
  const [activeTab, setActiveTab] = useState('payments');

  return (
    <div className="container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="image-wrapper">
            <Image
              src="/api/placeholder/200/200"
              alt="Profile"
              width={200}
              height={200}
              className="profile-image"
            />
            <div className="edit-overlay">
              <span>Edit</span>
            </div>
          </div>
          
          <div className="profile-info">
            <h1 className="name">John Doe</h1>
            <p className="organization">Tech For Good Foundation</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span>📱</span>
                <span>+27 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span>📧</span>
                <span>john.doe@techforgood.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="tabs">
          {['Payment Details', 'Donation', 'Add New Donor'].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab.toLowerCase().replace(/\s+/g, '') ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.toLowerCase().replace(/\s+/g, ''))}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'paymentdetails' && (
            <div>
              <div className="section-header">
                <h2 className="title">Bank Details</h2>
              </div>
              
              <div className="bank-details">
                <div className="bank-info">
                  <div className="info-group">
                    <label className="info-label">Bank Name</label>
                    <span className="info-value">Standard Bank</span>
                  </div>
                  <div className="info-group">
                    <label className="info-label">Account Name</label>
                    <span className="info-value">Tech For Good Foundation</span>
                  </div>
                  <div className="info-group">
                    <label className="info-label">Account Number</label>
                    <span className="info-value">1234 5678 9012</span>
                  </div>
                  <div className="info-group">
                    <label className="info-label">Branch Code</label>
                    <span className="info-value">051001</span>
                  </div>
                  <div className="info-group">
                    <label className="info-label">Reference</label>
                    <span className="info-value">Your Name & Surname</span>
                  </div>
                </div>
                
                <div className="qr-section">
                  <h3 className="qr-title">Scan to Donate</h3>
                  <div className="qr-wrapper">
                    <QrCode size={200} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'donation' && (
            <div>
              <h2 className="title">Make a Donation</h2>
              <form className="form">
                <div className="form-group">
                  <label className="label">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label className="label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label className="label">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label className="label">Type of Goods</label>
                  <select className="select-input">
                    <option value="">Select type of goods</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food</option>
                    <option value="furniture">Furniture</option>
                    <option value="electronics">Electronics</option>
                    <option value="books">Books</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label className="label">Description of Goods</label>
                  <textarea
                    placeholder="Please provide details about the goods you wish to donate"
                    className="textarea"
                  />
                </div>
                <div className="form-actions">
                  <button type="button" className="button cancel-button">
                    Cancel
                  </button>
                  <button type="submit" className="button submit-button">
                    Submit Donation
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'addnewdonor' && (
            <div>
              <h2 className="title">Add New Donor</h2>
              <form>
                <div className="form">
                  <div className="form-group">
                    <label className="label">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">Phone</label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="input"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label className="label">Organization</label>
                    <input
                      type="text"
                      placeholder="Enter organization name"
                      className="input"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label className="label">Notes</label>
                    <textarea
                      placeholder="Add any additional notes"
                      className="textarea"
                    />
                  </div>
                </div>
                <div className="form-actions">
                  <button type="button" className="button cancel-button">
                    Cancel
                  </button>
                  <button type="submit" className="button submit-button">
                    Add Donor
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;