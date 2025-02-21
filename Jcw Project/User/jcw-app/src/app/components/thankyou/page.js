import Link from 'next/link'
import '@/app/ui/thankyou/thankyou.css'

function ThankYou(){
    return (
    <>
      <div>
      <header className="showcase">
  <div className="showcase-top">
    <div className="logo-text"></div>
  </div>
  <div className="showcase-content">
    <h1 className="Hero-title">Thank You</h1>
    <p className="text">For The Donation</p>
    <Link href="/components/donationoptions" className="Hero-btn">
      Go Back
      <i className="fas fa-chevron-right btn-icon"></i>
    </Link>
  </div>
</header>
      </div>
      </>
    )
}
export default ThankYou