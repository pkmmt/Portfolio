import React from 'react';
import NavBar from "../navbar/page";
import Footer from "../footer/page";
import goodsData from '@/app/data/goodsData.json';
import "@/app/ui/prioritylist/priority.css";

function PriorityList() {
  return (
    <div className="priority-page">
      <NavBar />
      <main className="wrapper">
        {goodsData.map((center, index) => (
          <section key={center.id} className="center-container">
            <h2 className="center-title">{center.Center}</h2>
            <ol className="priority-list">
              {Object.entries(center.Goods).map(([key, value]) => (
                <li key={key}>
                  <div className="priority-item">{value}</div>
                </li>
              ))}
            </ol>
            {index < goodsData.length - 1 && <div className="divider" />}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default PriorityList;