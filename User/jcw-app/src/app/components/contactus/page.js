// page.js
"use client"
import Link from "next/link";
import NavBar from "../navbar/page";
import Footer from "../footer/page";
import { useState } from "react";
import "@/app/ui/contactus/contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const onUpdateField = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmitForm = e => {
    e.preventDefault();
    // Add validation here if needed
    setSubmitted(true);
    console.log("Form submitted:", form);
    
    // Reset form after submission with a slight delay for better UX
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    { icon: "location", text: "123 Business Street, Suite 100, City, Country" },
    { icon: "email", text: "contact@yourcompany.com" },
    { icon: "phone", text: "+1 (555) 123-4567" },
  ];

  const socialLinks = [
    { platform: "instagram", url: "#" },
    { platform: "linkedin", url: "#" },
    { platform: "facebook", url: "#" },
  ];

  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="container">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's Connect</h3>
            <p className="text">
              Get in touch with us today. We're here to help and answer any questions you might have.
              We look forward to hearing from you.
            </p>

            <div className="info">
              {contactInfo.map((item, index) => (
                <div key={index} className="information">
                  <Icon name={item.icon} />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="social-media">
              <p>Connect with us on social media:</p>
              <div className="social-icons">
                {socialLinks.map((platform, index) => (
                  <Link key={index} href={platform.url} className="social-icon">
                    <Icon name={platform.platform} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={onSubmitForm} className={submitted ? 'submitted' : ''}>
              <h3 className="title">Send us a message</h3>
              {submitted && <div className="success-message">Message sent successfully!</div>}
              
              {["name", "email", "phone"].map((field) => (
                <div key={field} className="input-container">
                  <input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={onUpdateField}
                    className="input"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    required
                  />
                </div>
              ))}
              
              <div className="input-container textarea">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onUpdateField}
                  className="input"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn" disabled={submitted}>
                {submitted ? 'Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

//  component for icons
function Icon({ name }) {
  const icons = {
    location: (
      <svg viewBox="0 0 500 1000" fill="currentColor" height="1.5em" width="2em">
        <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1.5em" width="2em">
        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1.5em" width="2em">
        <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="5em">
        <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 960 1000" fill="currentColor" height="2em" width="5em">
        <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
      </svg>
    ),
    facebook: (
      <svg fill="currentColor" viewBox="0 0 16 16" height="2em" width="5em">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
      </svg>
    ),
  };

  return icons[name] || null;
}

export default Contact;
