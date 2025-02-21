// pages/donation-report.js

import React from 'react';
import "@/app/ui/dashboard/reports/reports.css";

const DonationReport = () => {
  const reportData = {
    totalDonors: 1250,
    recurringDonors: 450,
    oneTimeDonors: 800,
    hoursDonated: 5000,
    itemsDonated: 3750,
    companyRepresentatives: 75,
    representativeFundraising: 150000,
    topDonors: [
      { name: "John Doe", amount: 10000, type: "Recurring" },
      { name: "Jane Smith", amount: 8500, type: "One-time" },
      { name: "Acme Corp", amount: 15000, type: "Corporate" },
      { name: "Bob Johnson", amount: 7500, type: "Recurring" },
      { name: "Alice Brown", amount: 6000, type: "One-time" }
    ],
    representatives: [
      { name: "Sarah Connor", amountRaised: 45000, donorsRecruited: 20 },
      { name: "John McClane", amountRaised: 38000, donorsRecruited: 15 },
      { name: "Ellen Ripley", amountRaised: 52000, donorsRecruited: 25 },
      { name: "James Bond", amountRaised: 30000, donorsRecruited: 12 },
      { name: "Lara Croft", amountRaised: 35000, donorsRecruited: 18 }
    ]
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="main-title">Donation Dashboard</h1>
        
        <div className="stats-grid">
          <StatsCard title="Total Donors" value={reportData.totalDonors} />
          <StatsCard title="Recurring Donors" value={reportData.recurringDonors} />
          <StatsCard title="One-time Donors" value={reportData.oneTimeDonors} />
          <StatsCard title="Hours Donated" value={reportData.hoursDonated} />
          <StatsCard title="Items Donated" value={reportData.itemsDonated} />
          <StatsCard 
            title="Company Representatives" 
            value={reportData.companyRepresentatives} 
          />
          <StatsCard 
            title="Funds Raised" 
            value={`R${reportData.representativeFundraising.toLocaleString()}`} 
          />
        </div>

        <div className="tables-section">
          <DataTable 
            title="Top Donors"
            headers={['Name', 'Amount', 'Type']}
            data={reportData.topDonors.map(donor => [
              donor.name,
              `R${donor.amount.toLocaleString()}`,
              donor.type
            ])}
          />

          <DataTable 
            title="Company Representatives"
            headers={['Name', 'Amount Raised', 'Donors Recruited']}
            data={reportData.representatives.map(rep => [
              rep.name,
              `R${rep.amountRaised.toLocaleString()}`,
              rep.donorsRecruited
            ])}
          />
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ title, value }) => (
  <div className="stats-card">
    <h3 className="stats-title">{title}</h3>
    <p className="stats-value">{value}</p>
  </div>
);

const DataTable = ({ title, headers, data }) => (
  <div className="table-wrapper">
    <h2 className="table-title">{title}</h2>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DonationReport;