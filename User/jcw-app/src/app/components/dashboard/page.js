"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import "@/app/ui/dashboard/dashboard.css";

function Dashboard() {
  const router = useRouter();
  const [donorData, setDonorData] = useState({
    name: 'Matthew',
    surname: 'Johnson',
    dob: '1985-03-15',
    idNumber: 'ID123456789',
    address: '123 Main Street, City',
    email: 'matthew.j@email.com',
    donorType: 'Individual',
    driverInfo: {
      licenseNumber: 'DL987654321',
      licenseExpiryDate: '2025-12-31',
      vehicleRegistration: 'VR456789'
    },
    companyInfo: {
      companyName: '',
      companyRegNumber: '',
      vatNumber: '',
      authorizedRepName: '',
      authorizedRepEmail: '',
      authorizedRepIdNumber: ''
    },
    taxInfo: {
      taxNumber: 'TX123456',
      taxClearanceCertificate: 'TCC987654',
      lastFilingDate: '2024-01-15'
    }
  });

  const [donorHistory, setDonorHistory] = useState([
    {
      cardNumber: '0678',
      date: '2023-09-15',
      donation: {
        goods: 'Clothing',
        monetary: 'R500'
      }
    },
    {
      cardNumber: '0679',
      date: '2023-10-01',
      donation: {
        goods: 'Food',
        monetary: 'R300'
      }
    }
  ]);

  useEffect(() => {
    const setupFileUpload = () => {
      const dropZoon = document.querySelector('#dropZoon');
      const fileInput = document.querySelector('#fileInput');
      const previewImage = document.querySelector('#previewImage');

      if (!dropZoon || !fileInput || !previewImage) return;

      const handleDragOver = (e) => {
        e.preventDefault();
        dropZoon.classList.add('drop-zoon--over');
      };

      const handleDragLeave = (e) => {
        e.preventDefault();
        dropZoon.classList.remove('drop-zoon--over');
      };

      const handleDrop = (e) => {
        e.preventDefault();
        dropZoon.classList.remove('drop-zoon--over');
        const file = e.dataTransfer.files[0];
        uploadFile(file);
      };

      const handleClick = () => {
        fileInput.click();
      };

      const handleFileChange = (e) => {
        const file = e.target.files[0];
        uploadFile(file);
      };

      const uploadFile = (file) => {
        if (!file || !file.type.startsWith('image/')) {
          alert('Please upload an image file');
          return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
          previewImage.src = fileReader.result;
          previewImage.style.display = 'block';
        };
        fileReader.readAsDataURL(file);
      };

      dropZoon.addEventListener('dragover', handleDragOver);
      dropZoon.addEventListener('dragleave', handleDragLeave);
      dropZoon.addEventListener('drop', handleDrop);
      dropZoon.addEventListener('click', handleClick);
      fileInput.addEventListener('change', handleFileChange);

      return () => {
        dropZoon.removeEventListener('dragover', handleDragOver);
        dropZoon.removeEventListener('dragleave', handleDragLeave);
        dropZoon.removeEventListener('drop', handleDrop);
        dropZoon.removeEventListener('click', handleClick);
        fileInput.removeEventListener('change', handleFileChange);
      };
    };

    setupFileUpload();
  }, []);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    router.push(path);
  };

  const menuItems = [
    { path: '/', icon: 'tachometer-alt', text: 'Profile', active: true },
    { path: '/components/Homepage', icon: 'users', text: 'Home' },
    { path: '/components/contactus', icon: 'stream', text: 'Contact' },
    { path: '/components/prioritylist', icon: 'shopping-cart', text: 'Wishlist' },
    { path: '/donors', icon: 'boxes', text: 'Donors' },
    { path: '/components/donationoptions', icon: 'boxes', text: 'Donate' },
    { path: '/components/login', icon: 'user-circle', text: 'Logout' }
  ];

  return (
    <div className="dashboard-container">
      <input type="checkbox" id="nav-toggle" />
      
      <nav className="sidebar">
        <div className="sidebar-brand">
          <h1><span className="fab fa-asymmetrik"></span> <span>Donor</span></h1>
        </div>
        
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.path}
                className={item.active ? 'active' : ''}
                onClick={(e) => handleNavigation(e, item.path)}
              >
                <span className={`fas fa-${item.icon}`}></span>
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="main-content">
        <header className="dashboard-header">
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Profile
          </h2>

          <div className="search-wrapper">
            <span className="fas fa-search"></span>
            <input type="search" placeholder="Search..." />
          </div>

          <div className="user-wrapper">
            <img src="/api/placeholder/40/40" alt="Profile" className="profile-image" />
            <div className="user-info">
              <h4>{donorData.name}</h4>
              <small>Donor</small>
            </div>
          </div>
        </header>

        <main className="dashboard-main">
          <div className="statistics-cards">
            <div className="stat-card">
              <div className="stat-content">
                <h1>10</h1>
                <span>Items Donated</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-content">
                <h1>R500</h1>
                <span>Money Donated</span>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            <section className="donation-history">
              <div className="card">
                <div className="card-header">
                  <h2>Recent Donations</h2>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Card Number</th>
                          <th>Date</th>
                          <th>Donation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {donorHistory.map((donation, index) => (
                          <tr key={index}>
                            <td>{donation.cardNumber}</td>
                            <td>{donation.date}</td>
                            <td>
                              <span className="status purple"></span>
                              {`${donation.donation.goods} - ${donation.donation.monetary}`}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="personal-info">
              <div className="card">
                <div className="card-header">
                  <h2>Personal Information</h2>
                  <button className="edit-button">
                    Edit <span className="fas fa-arrow-right"></span>
                  </button>
                </div>
                <div className="card-body">
                  <div className="info-grid">
                    {Object.entries(donorData)
                      .filter(([key]) => !['companyInfo', 'taxInfo', 'driverInfo'].includes(key))
                      .map(([key, value]) => (
                        <div key={key} className="info-item">
                          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                          <span>{value}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="document-upload">
            <h2>Upload Documents</h2>
            <div className="upload-area">
              <div className="upload-header">
                <h3>Upload your file</h3>
                <p>File should be an image</p>
              </div>
              
              <div id="dropZoon" className="drop-zone">
                <span className="drop-zone-icon">
                  <i className="bx bxs-file-image"></i>
                </span>
                <p>Drop your file here or Click to browse</p>
                <img 
                  src="" 
                  alt="Preview" 
                  id="previewImage" 
                  className="preview-image" 
                />
                <input 
                  type="file" 
                  id="fileInput" 
                  className="file-input" 
                  accept="image/*" 
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;