"use client";
import { useState } from "react";
import styles from "@/app/ui/registration/register.module.css"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    donorType: '',
    name: '',
    surname: '',
    dob: '',
    idNumber: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    driverInfo: {
      licenseNumber: '',
      licenseExpiryDate: '',
      vehicleRegistration: ''
    },
    companyInfo: {
      companyName: '',
      companyRegNumber: '',
      vatNumber: '',
      authorizedRepName: '',
      authorizedRepEmail: '',
      authorizedRepIdNumber: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNestedChange = (section, name, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const FormField = ({ label, name, type = "text", value, onChange, section = null }) => (
    <div className={styles.formField}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => section ? handleNestedChange(section, name, e.target.value) : handleChange(e)}
        className={styles.input}
      />
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Registration</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="donorType" className={styles.label}>Donor Type</label>
            <select
              id="donorType"
              name="donorType"
              value={formData.donorType}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">Select Donor Type</option>
              <option value="individual">Individual</option>
              <option value="company">Company</option>
            </select>
          </div>

          {formData.donorType === 'individual' && (
            <>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Personal Information</h3>
                <div className={styles.grid}>
                  <FormField label="Name" name="name" value={formData.name} />
                  <FormField label="Surname" name="surname" value={formData.surname} />
                </div>
                <div className={styles.grid}>
                  <FormField label="Date of Birth" name="dob" type="date" value={formData.dob} />
                  <FormField label="ID Number" name="idNumber" value={formData.idNumber} />
                </div>
                <div className={styles.grid}>
                  <FormField label="Address" name="address" value={formData.address} />
                  <FormField label="Email" name="email" type="email" value={formData.email} />
                </div>
                <div className={styles.grid}>
                  <FormField label="Password" name="password" type="password" value={formData.password} />
                  <FormField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} />
                </div>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Driver & Vehicle Information</h3>
                <div className={styles.grid}>
                  <FormField
                    label="Driver's License Number"
                    name="licenseNumber"
                    value={formData.driverInfo.licenseNumber}
                    section="driverInfo"
                  />
                  <FormField
                    label="License Expiry Date"
                    name="licenseExpiryDate"
                    type="date"
                    value={formData.driverInfo.licenseExpiryDate}
                    section="driverInfo"
                  />
                </div>
                <FormField
                  label="Vehicle Registration"
                  name="vehicleRegistration"
                  value={formData.driverInfo.vehicleRegistration}
                  section="driverInfo"
                />
              </div>
            </>
          )}

          {formData.donorType === 'company' && (
            <>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Company Information</h3>
                <div className={styles.grid}>
                  <FormField
                    label="Company Name"
                    name="companyName"
                    value={formData.companyInfo.companyName}
                    section="companyInfo"
                  />
                  <FormField
                    label="Company Registration Number"
                    name="companyRegNumber"
                    value={formData.companyInfo.companyRegNumber}
                    section="companyInfo"
                  />
                </div>
                <FormField
                  label="VAT Number"
                  name="vatNumber"
                  value={formData.companyInfo.vatNumber}
                  section="companyInfo"
                />
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Authorized Representative Information</h3>
                <div className={styles.grid}>
                  <FormField
                    label="Name"
                    name="authorizedRepName"
                    value={formData.companyInfo.authorizedRepName}
                    section="companyInfo"
                  />
                  <FormField
                    label="Email"
                    name="authorizedRepEmail"
                    type="email"
                    value={formData.companyInfo.authorizedRepEmail}
                    section="companyInfo"
                  />
                </div>
                <FormField
                  label="ID Number"
                  name="authorizedRepIdNumber"
                  value={formData.companyInfo.authorizedRepIdNumber}
                  section="companyInfo"
                />
              </div>
            </>
          )}

          {formData.donorType && (
            <button type="submit" className={styles.button}>
              Register
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;