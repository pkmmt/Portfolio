"use client"

import styles from './graph.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', monetary: 4000, services: 2400 },
  { name: 'Feb', monetary: 3000, services: 1398 },
  { name: 'Mar', monetary: 2000, services: 9800 },
  { name: 'Apr', monetary: 2780, services: 3908 },
  { name: 'May', monetary: 1890, services: 4800 },
  { name: 'Jun', monetary: 2390, services: 3800 },
  { name: 'Jul', monetary: 4490, services: 4300 },
  { name: 'Aug', monetary: 3490, services: 4600 },
  { name: 'Sep', monetary: 2490, services: 4300 },
  { name: 'Oct', monetary: 3790, services: 4300 },
  { name: 'Nov', monetary: 5490, services: 4300 },
  { name: 'Dec', monetary: 6490, services: 4300 }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.tooltipLabel}>{label}</p>
        <p className={styles.tooltipData}>
          <span className={styles.monetary}>
            Monetary: R{payload[0].value.toLocaleString()}
          </span>
        </p>
        <p className={styles.tooltipData}>
          <span className={styles.services}>
            Services: R{payload[1].value.toLocaleString()}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

const Graph = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Monthly Donations Overview</h2>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ backgroundColor: '#004496' }}></span>
            <span>Services</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ backgroundColor: '#82ca9d' }}></span>
            <span>Monetary</span>
          </div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey="name" 
              stroke="#666"
              tick={{ fill: '#666' }}
            />
            <YAxis 
              stroke="#666"
              tick={{ fill: '#666' }}
              tickFormatter={(value) => `R${value.toLocaleString()}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="services" 
              stroke="#004496" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="monetary" 
              stroke="#82ca9d" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graph;