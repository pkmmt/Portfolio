"use client"
import { useState } from 'react';
import styles from "@/app/ui/dashboard/repmanagement/rep.module.css";

const initialEmployees = [
  { id: 1, name: 'John Doe', moneyRaised: 50000, location: 'Soweto' },
  { id: 2, name: 'Jane Smith', moneyRaised: 75000, location: 'Soweto' },
  { id: 3, name: 'Bob Johnson', moneyRaised: 60000, location: 'Soweto' },
];

const StatCard = ({ label, value }) => (
  <div className={styles.statCard}>
    <div className={styles.statLabel}>{label}</div>
    <div className={styles.statValue}>{value}</div>
  </div>
);

const EmployeeTable = ({ employees, selectedEmployee, onSelectEmployee }) => (
  <div className={styles.tableWrapper}>
    <table className={styles.employeeTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Money Raised</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr 
            key={employee.id} 
            onClick={() => onSelectEmployee(employee)}
            className={selectedEmployee?.id === employee.id ? styles.selected : ''}
          >
            <td>{employee.name}</td>
            <td>R{employee.moneyRaised.toLocaleString()}</td>
            <td>{employee.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const EmployeeDetails = ({ employee }) => (
  <div className={styles.employeeDetails}>
    <h2>Rep Details</h2>
    <div className={styles.detailsGrid}>
      <div className={styles.detailItem}>
        <span className={styles.detailLabel}>Name:</span>
        <span className={styles.detailValue}>{employee.name}</span>
      </div>
      <div className={styles.detailItem}>
        <span className={styles.detailLabel}>Money Raised:</span>
        <span className={styles.detailValue}>R{employee.moneyRaised.toLocaleString()}</span>
      </div>
      <div className={styles.detailItem}>
        <span className={styles.detailLabel}>Location:</span>
        <span className={styles.detailValue}>{employee.location}</span>
      </div>
    </div>
  </div>
);

export default function Rep() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees] = useState(initialEmployees);

  const totalEmployees = employees.length;
  const totalMoneyRaised = employees.reduce((sum, emp) => sum + emp.moneyRaised, 0);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Rep Management</h1>
      </header>
      
      <div className={styles.statsContainer}>
        <StatCard 
          label="Total Rep" 
          value={totalEmployees} 
        />
        <StatCard 
          label="Total Money Raised" 
          value={`R${totalMoneyRaised.toLocaleString()}`} 
        />
      </div>

      <section className={styles.mainContent}>
        <div className={styles.listSection}>
          <h2>Rep List</h2>
          <EmployeeTable 
            employees={employees}
            selectedEmployee={selectedEmployee}
            onSelectEmployee={setSelectedEmployee}
          />
        </div>

        {selectedEmployee && (
          <EmployeeDetails employee={selectedEmployee} />
        )}
      </section>
    </div>
  );
}