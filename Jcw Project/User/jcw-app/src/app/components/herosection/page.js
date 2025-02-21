// Hero.jsx
"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import '@/app/ui/herosection/hero.css'

function Hero() {
  const router = useRouter()
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = "https://jhbchildwelfare.org.za/wp-content/uploads/2024/02/JCW-Home-Page-Hero-Image-Background.jpg"
    img.onload = () => setIsImageLoaded(true)
  }, [])

  const handleDonateClick = (e) => {
    e.preventDefault()
    router.push('/components/donationoptions')
  }

  return (
    <header 
      className={`hero ${isImageLoaded ? 'hero--loaded' : ''}`}
      role="banner"
      aria-label="Welcome banner"
    >
      <div className="hero__content">
        <h1 className="hero__title">
          Welcome To The JCW Family
        </h1>
        <p className="hero__subtitle">
          Help us make a difference in children's lives
        </p>
        <button 
          onClick={handleDonateClick}
          className="hero__button"
          aria-label="Donate now"
        >
          Donate Now
          <svg 
            className="hero__button-icon" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M9 18L15 12L9 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Hero