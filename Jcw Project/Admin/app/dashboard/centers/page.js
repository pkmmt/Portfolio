"use client";

import styles from '@/app/ui/dashboard/centers/centers.module.css'
import CenterMan from '@/app/ui/dashboard/centers/centers'

const CenterManagement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <CenterMan
          title="Total Donations"
          image="noavatar.png"
          button="/"
          info="These updates will ensure that each CenterMan component has its own button, positioned at the bottom right of its respective card. The CSS properties ensure the layout looks clean and visually appealing."
        />
      </div>
        <div className={styles.center}>
          <CenterMan
            title="Monetary Donations"
            image="noavatar.png"
            button="/"
            info="These updates will ensure that each CenterMan component has its own button, positioned at the bottom right of its respective card. The CSS properties ensure the layout looks clean and visually appealing."
          />
        </div>
      <div className={styles.center}>
        <CenterMan
          title="Service Donations"
          image="noavatar.png"
          button="/"
          info="Some These updates will ensure that each CenterMan component has its own button, positioned at the bottom right of its respective card. The CSS properties ensure the layout looks clean and visually appealing."
        />
      </div>
      <div className={styles.center}>
        <CenterMan
          title="Service Donations"
          image="noavatar.png"
          button="/"
          info="These updates will ensure that each CenterMan component has its own button, positioned at the bottom right of its respective card. The CSS properties ensure the layout looks clean and visually appealing."
        />
      </div>
      <div className={styles.center}>
        <CenterMan
          title="Service Donations"
          image="noavatar.png"
          button="/"
          info="These updates will ensure that each CenterMan component has its own button, positioned at the bottom right of its respective card. The CSS properties ensure the layout looks clean and visually appealing."
        />
      </div>
    </div>
  )
}

export default CenterManagement;
