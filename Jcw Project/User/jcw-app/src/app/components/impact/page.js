'use client'
import NavBar from '../navbar/page';
import '@/app/ui/impact/impact.css'

function Impact() {
  const donorData = [
    { donor: "Alfreds Futterkiste", volunteer: "Maria Anders" },
    { donor: "Berglunds snabbköp", volunteer: "Christina Berglund" },
    { donor: "Centro comercial Moctezuma", volunteer: "Francisco Chang" },
    { donor: "Ernst Handel", volunteer: "Roland Mendel" },
    { donor: "Island Trading", volunteer: "Helen Bennett" },
    { donor: "Königlich Essen", volunteer: "Philip Cramer" },
    { donor: "Laughing Bacchus Winecellars", volunteer: "Yoshi Tannamuri" },
    { donor: "Magazzini Alimentari Riuniti", volunteer: "Giovanni Rovelli" },
    { donor: "North/South", volunteer: "Simon Crowther" },
    { donor: "Paris spécialités", volunteer: "Marie Bertrand" }
  ];

  return (
    <div className="impact-container">
      <NavBar />
      <div className="content-wrapper">
        <h1 className="page-title">Our Generous Donors & Dedicated Volunteers</h1>
        <div className="table-container">
          <table className="donors-table">
            <thead>
              <tr>
                <th>Donors</th>
                <th>Volunteers</th>
              </tr>
            </thead>
            <tbody>
              {donorData.map((row, index) => (
                <tr key={index}>
                  <td>{row.donor}</td>
                  <td>{row.volunteer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Impact;