// page.js
'use client'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/ui/news&updates/newsupdates.css'

const NewsCard = ({ image, title, description, link, date, filter }) => (
  <article className="article">
    <div className="article-wrapper">
      <figure className="article-figure">
        <Image 
          src={image} 
          alt={title} 
          width={320} 
          height={180} 
          className="article-image"
        />
        {filter && <span className="filter-tag">{filter}</span>}
      </figure>
      <div className="article-body">
        <time className="article-date">{date}</time>
        <h2 className="article-title">{title}</h2>
        <p className="article-description">{description}</p>
        <Link href={link} className="read-more">
          Read more <span className="sr-only">about {title}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="read-more-icon" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      </div>
    </div>
  </article>
)

const newsAndUpdateCards = [
  {
    id: 1,
    image: "https://jhbchildwelfare.org.za/wp-content/uploads/2024/06/Tomorrow-4-Ways-JCWs-Strategic-Vision-for-Child-Welfare-Comes-Alive-June-2024-1024x576.jpg",
    title: "Embracing Tomorrow: 4 Ways JCW's Strategic Vision for Child Welfare Comes Alive",
    date: "June 6, 2024",
    filter: "Updates",
    description: "At Joburg Child Welfare (JCW), we have reached a pivotal milestone as we celebrate over a century of unwavering dedication to child welfare. As we unveil our new brand identity,",
    link: "https://jhbchildwelfare.org.za/embracing-tomorrow-4-ways-jcws-strategic-vision-for-child-welfare-comes-alive/",
  },
  {
    id: 2,
    image: "https://jhbchildwelfare.org.za/wp-content/uploads/2024/05/2-1024x576.jpg",
    title: "Get Ready for the New Look JCW",
    date: "May 3, 2024",
    filter: "Updates",
    description: "Joburg Child Welfare (JCW) is gearing up for its 115th anniversary and is excited to unveil a fresh new look that embodies a steadfast commitment to child protection and welfare. Since 1909,",
    link: "https://jhbchildwelfare.org.za/get-ready-for-the-new-look-jcw/"
  },
  {
    id: 3,
    image: "https://jhbchildwelfare.org.za/wp-content/uploads/2024/05/1-1024x576.jpg",
    title: "Celebrating Success: Masi's Empowering Journey with Eldorado Park's Children",
    date: "May 3, 2024",
    filter: "Good News",
    description: "The Masibambsane Community Based Centre, (fondly known as 'Masi') recently hosted its Achievers Award Ceremony in Eldorado Park. The awards shine a spotlight on children who have performed well in their",
    link: "https://jhbchildwelfare.org.za/celebrating-success-masis-empowering-journey-with-eldorado-parks-children/"
  }
];

function NewsAndUpdates() {
  return (
    <main className="news-updates">
      <h1 className="page-title">News And Updates</h1>
      <section className="articles">
        {newsAndUpdateCards.map((card) => (
          <NewsCard key={card.id} {...card} />
        ))}
      </section>
    </main>
  )
}

export default NewsAndUpdates
