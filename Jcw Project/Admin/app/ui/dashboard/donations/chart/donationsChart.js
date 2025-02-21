import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import styles from './donationsChart.module.css';

const data01 = [
    { name: 'Service', value: '' },
    { name: 'Monetary', value: '' },

  ];
  const data02 = [
    { name: '12-17',value: {Service: 10, Monetary: 40}  },
    { name: '18-25', Service: 20, Monetary: 30 },
    { name: '26-35', Service: 30, Monetary: 20 },
    { name: '36-50', Service: 40, Monetary: 10 },
    { name: '50-65', Service: 50, Monetary: 5 },
    { name: '65+', Service: 60, Monetary: 0 },
  ];

      const DonationsChart = () => {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Donations</h1>
                <ResponsiveContainer width="100%" height="90%">
                <PieChart width={400} height={400}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
                </ResponsiveContainer>
            </div>
        );
      };
    export default DonationsChart;
