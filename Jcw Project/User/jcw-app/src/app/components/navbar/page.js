"use client";
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from "react";
import "@/app/ui/navbar/nav.css";

function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();
    router.push(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <div className="nav-container">
      <div className="row">
        <nav className="navbar">
          <div className="logo">
            <a href="/components/Homepage" onClick={(e) => handleNavigation(e, '/components/Homepage')}>
              <Image 
                src="/jcw-logo.png" 
                width={180} 
                height={50} 
                alt="JCW Logo"
                priority
              />
            </a>
          </div>
          
          <button 
            className="menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="24"
              height="24"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          <ul className={`main-menu ${isMenuOpen ? 'show' : ''}`}>
            <li>
              <a 
                href="/components/Homepage" 
                onClick={(e) => handleNavigation(e, '/components/Homepage')}
                className={`nav-link ${isActive('/components/Homepage') ? 'active' : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/components/contactus" 
                onClick={(e) => handleNavigation(e, '/components/contactus')}
                className={`nav-link ${isActive('/components/contactus') ? 'active' : ''}`}
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="/components/impact" 
                onClick={(e) => handleNavigation(e, '/components/impact')}
                className={`nav-link ${isActive('/components/impact') ? 'active' : ''}`}
              >
                Donors
              </a>
            </li>
            <li>
              <a 
                href="/components/prioritylist" 
                onClick={(e) => handleNavigation(e, '/components/prioritylist')}
                className={`nav-link ${isActive('/components/prioritylist') ? 'active' : ''}`}
              >
                Wishlist
              </a>
            </li>
            <li>
              <a 
                href="/components/dashboard" 
                onClick={(e) => handleNavigation(e, '/components/dashboard')}
                className={`nav-link ${isActive('/components/dashboard') ? 'active' : ''}`}
              >
                Profile
              </a>
            </li>
            <li>
              <a 
                href="/components/donationoptions" 
                onClick={(e) => handleNavigation(e, '/components/donationoptions')}
                className="nav-link action-button"
              >
                Donate
              </a>
            </li>
            <li>
              <a 
                href="/" 
                onClick={(e) => handleNavigation(e, '/')}
                className="nav-link"
              >
                Logout
              </a>
            </li>
            <li>
              <a 
                href="/components/notifications" 
                onClick={(e) => handleNavigation(e, '/components/notifications')}
                className="nav-link notification-button"
                aria-label="Notifications"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                >
                  <path d="M12.02 2.90997C8.70997 2.90997 6.01997 5.59997 6.01997 8.90997V11.8C6.01997 12.41 5.75997 13.34 5.44997 13.86L4.29997 15.77C3.58997 16.95 4.07997 18.26 5.37997 18.7C9.68997 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.90997C18.02 5.59997 15.32 2.90997 12.02 2.90997Z" />
                  <path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" />
                  <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.89997 21.18C9.35997 20.64 9.01997 19.88 9.01997 19.06" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;