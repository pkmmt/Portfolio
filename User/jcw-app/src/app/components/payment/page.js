'use client'
import React, { useState } from 'react';
import NavBar from '../navbar/page';
import "@/app/ui/payment/payment.css";  


// Icons as simple SVG components
const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const BankIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 12 1 21 6"></polyline>
    <rect x="3" y="6" width="18" height="12"></rect>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const QrCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <rect x="7" y="7" width="3" height="3"></rect>
    <rect x="14" y="7" width="3" height="3"></rect>
    <rect x="7" y="14" width="3" height="3"></rect>
    <rect x="14" y="14" width="3" height="3"></rect>
  </svg>
);

const Payment = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    amount: '',
    paymentType: '',
    cardholderName: '',
    cardNumber: '',
    cardType: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.amount) newErrors.amount = 'Amount is required';
    if (!formData.cardholderName) newErrors.cardholderName = 'Cardholder name is required';
    if (!formData.cardNumber || !/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Valid card number is required';
    }
    if (!formData.cvv || !/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'Valid CVV is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    
    if (name === 'cardNumber') {
      formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim();
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '24px',
      marginTop:'50px'
    },
    wrapper: {
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      padding: '24px',
    },
    tabNav: {
      display: 'flex',
      gap: '16px',
      borderBottom: '1px solid #e2e8f0',
      marginBottom: '24px',
    },
    tabButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: '#64748b',
      position: 'relative',
    },
    activeTab: {
      color: '#3b82f6',
      borderBottom: '2px solid #3b82f6',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#334155',
    },
    input: {
      padding: '8px 12px',
      border: '1px solid #e2e8f0',
      borderRadius: '4px',
      fontSize: '16px',
      width: '100%',
    },
    cardDetails: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
    },
    alert: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      color: '#ef4444',
      fontSize: '14px',
      marginTop: '4px',
    },
    submitButton: {
      background: '#3b82f6',
      color: 'white',
      padding: '12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
    },
    methodCard: {
      padding: '24px',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      textAlign: 'center',
      marginBottom: '16px',
    },
    methodCardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '16px',
    },
    methodCardText: {
      color: '#64748b',
      margin: '8px 0',
    },
  };

  return (
    <>
    <NavBar/>
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <nav style={styles.tabNav}>
          <button
            style={{...styles.tabButton, ...(activeTab === 1 ? styles.activeTab : {})}}
            onClick={() => setActiveTab(1)}
          >
            <CreditCardIcon />
            Card Payment
          </button>
          <button
            style={{...styles.tabButton, ...(activeTab === 2 ? styles.activeTab : {})}}
            onClick={() => setActiveTab(2)}
          >
            <BankIcon />
            Other Methods
          </button>
        </nav>

        {activeTab === 1 ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Amount</label>
              <input
                type="number"
                name="amount"
                style={styles.input}
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Enter amount"
              />
              {errors.amount && (
                <div style={styles.alert}>
                  <AlertIcon />
                  {errors.amount}
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Payment Type</label>
              <select
                name="paymentType"
                style={styles.input}
                value={formData.paymentType}
                onChange={handleInputChange}
              >
                <option value="">Select payment type</option>
                <option value="once">Once Off</option>
                <option value="recurring">Recurring</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Cardholder Name</label>
              <input
                type="text"
                name="cardholderName"
                style={styles.input}
                value={formData.cardholderName}
                onChange={handleInputChange}
                placeholder="Name on card"
              />
              {errors.cardholderName && (
                <div style={styles.alert}>
                  <AlertIcon />
                  {errors.cardholderName}
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                style={styles.input}
                value={formData.cardNumber}
                onChange={handleInputChange}
                maxLength="19"
                placeholder="1234 5678 9012 3456"
              />
              {errors.cardNumber && (
                <div style={styles.alert}>
                  <AlertIcon />
                  {errors.cardNumber}
                </div>
              )}
            </div>

            <div style={styles.cardDetails}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Expiry Date</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select
                    name="expMonth"
                    style={{ ...styles.input, flex: 1 }}
                    value={formData.expMonth}
                    onChange={handleInputChange}
                  >
                    <option value="">MM</option>
                    {Array.from({ length: 12 }, (_, i) => {
                      const month = i + 1;
                      return (
                        <option key={month} value={month.toString().padStart(2, '0')}>
                          {month.toString().padStart(2, '0')}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name="expYear"
                    style={{ ...styles.input, flex: 1 }}
                    value={formData.expYear}
                    onChange={handleInputChange}
                  >
                    <option value="">YYYY</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() + i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  style={styles.input}
                  value={formData.cvv}
                  onChange={handleInputChange}
                  maxLength="4"
                  placeholder="123"
                />
                {errors.cvv && (
                  <div style={styles.alert}>
                    <AlertIcon />
                    {errors.cvv}
                  </div>
                )}
              </div>
            </div>

            <button type="submit" style={styles.submitButton}>
              Process Payment
            </button>
          </form>
        ) : (
          <div>
            <div style={styles.methodCard}>
              <h3 style={styles.methodCardTitle}>QR Code Payment</h3>
              <QrCodeIcon />
              <p style={styles.methodCardText}>Scan to pay instantly with your banking app</p>
            </div>
            
            <div style={styles.methodCard}>
              <h3 style={styles.methodCardTitle}>Bank Transfer</h3>
              <p style={styles.methodCardText}><strong>Bank:</strong> Standard Bank</p>
              <p style={styles.methodCardText}><strong>Account Name:</strong> The Johannesburg Child Welfare Society</p>
              <p style={styles.methodCardText}><strong>Account Number:</strong> 000 790 060</p>
              <p style={styles.methodCardText}><strong>Swift Code:</strong> SBZAZAJJ</p>
              <p style={styles.methodCardText}><strong>Sort Code:</strong> 00 10 05</p>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Payment;