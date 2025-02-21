'use client'
// FooterComponent.jsx
import Link from 'next/link'
import { useState } from 'react'
import '@/app/ui/footer/footer.css'

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter submission
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link href="https://jhbchildwelfare.org.za/">
                                <span className="link-icon">ℹ️</span>
                                <span>About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/contactus">
                                <span className="link-icon">✉️</span>
                                <span>Contact</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy">
                                <span className="link-icon">🛡️</span>
                                <span>Privacy Policy</span>
                            </Link>
                        </li>
                        <li>
                            <div className="registration-info">
                                <span className="link-icon">📋</span>
                                <span>NPO. OOO566 | PBO. 130001110</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Annual Reports</h3>
                    <ul className="reports-list">
                        {[2023, 2022, 2021, 2020].map(year => (
                            <li key={year}>
                                <Link href={`https://jhbchildwelfare.org.za/wp-content/uploads/2024/03/JCW-Annual-Report-${year}.pdf`}>
                                    <span className="link-icon">📄</span>
                                    <span>{year} Report</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <Link href="https://www.facebook.com/jhbchildwelfare.org.za/" 
                              className="social-link facebook">
                            <span className="sr-only">Facebook</span>
                            <svg viewBox="0 0 16 16" className="social-icon">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </Link>
                        <Link href="https://x.com/jhbchildwelfare" 
                              className="social-link twitter">
                            <span className="sr-only">Twitter</span>
                            <svg viewBox="0 0 24 24" className="social-icon">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </Link>
                        <Link href="https://za.linkedin.com/company/joburg-child-welfare" 
                              className="social-link linkedin">
                            <span className="sr-only">LinkedIn</span>
                            <svg viewBox="0 0 24 24" className="social-icon">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </Link>
                    </div>

                    <div className="newsletter">
                        <h4>Subscribe to Our Newsletter</h4>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email" 
                                aria-label="Email for newsletter"
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} JCW. All rights reserved.</p>
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="back-to-top"
                    aria-label="Back to top"
                >
                    ↑
                </button>
            </div>
        </footer>
    );
}

export default Footer;