"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './login.css';


const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
    
      console.log('Form submitted:', form);
      
      // Navigate to homepage on success
      router.push('./Homepage');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="form-section">
          <div className="login-header">
            <h1 className="login-title">Welcome back</h1>
            <p className="login-subtitle">Please enter your details to sign in</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                id="email"
                className="form-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                className="form-input"
                type="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button className="submit-button" type="submit">
              Sign in
            </button>
          </form>

          <div className="forgot-password">
            <Link href="/forgot-password">Forgot password?</Link>
          </div>
        </div>

        <div className="image-section">
          <img
            className="hero-image"
            src="https://media.istockphoto.com/id/671260158/photo/group-of-kindergarten-kids-lying-on-the-grass-at-park-and-relax-with-smiling.jpg?s=612x612&w=0&k=20&c=wppKhB7QLL1i5ArUQ8Wgg0RX4BaRL69zcTB6XdCMsa4="
            alt="Kids enjoying in park"
          />
          <div className="logo-overlay">
            <Image 
              src="/jcw-logo.png" 
              width={290} 
              height={100} 
              alt="JCW Logo"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;