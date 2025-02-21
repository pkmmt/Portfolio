import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer"
import DashboardLayout from "./dashboardLayout";

const Layout = ({children}) => {
    return (
      <DashboardLayout>
       <div className={styles.dashboard}>
        <div className={styles.container}>
        <div className={styles.list}>
        </div>
        
        <div className={styles.content}>
            <Navbar />
            {children}
            <Footer />
      </div>
    </div>
    </div>
  </DashboardLayout>
    )
  }
  
  export default Layout