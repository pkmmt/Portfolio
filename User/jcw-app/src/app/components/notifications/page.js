"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import '@/app/ui/notifications/notification.css';

function Inbox() {
  const listRef = useRef(null);
  const detailsViewRef = useRef(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    const list = listRef.current;
    const detailsView = detailsViewRef.current;

    let bounds = {};
    let selectedCard;

    const handleListClick = (event) => {
      selectedCard = event.target.closest(".list-item");
      if (!selectedCard) return;

      bounds = selectedCard.getBoundingClientRect();
      setIsDetailsOpen(true);
      setSelectedNotification({
        title: selectedCard.querySelector('.notification-title').textContent,
        content: selectedCard.querySelector('.notification-preview').textContent,
        image: selectedCard.querySelector('img').src
      });

      detailsView.animate(
        [
          {
            transform: `translate(${bounds.left}px, ${bounds.top}px) scale(${bounds.width / window.innerWidth}, ${bounds.height / window.innerHeight})`,
            opacity: 0
          },
          {
            transform: "translate(0, 0) scale(1, 1)",
            opacity: 1
          }
        ],
        {
          duration: 300,
          fill: "forwards",
          easing: "ease-out"
        }
      );
    };

    const handleBack = () => {
      if (isDetailsOpen) {
        setIsDetailsOpen(false);
        detailsView.animate(
          [
            {
              transform: "translate(0, 0) scale(1, 1)",
              opacity: 1
            },
            {
              transform: `translate(${bounds.left}px, ${bounds.top}px) scale(${bounds.width / window.innerWidth}, ${bounds.height / window.innerHeight})`,
              opacity: 0
            }
          ],
          {
            duration: 300,
            fill: "backwards",
            easing: "ease-in"
          }
        );
      }
    };

    list.addEventListener("click", handleListClick);
    return () => list.removeEventListener("click", handleListClick);
  }, [isDetailsOpen]);

  const handleBackClick = () => {
    setIsDetailsOpen(false);
  };

  const notifications = [
    {
      id: 1,
      title: "Important JCW Announcement",
      preview: "Lorem ipsum dolor sit amet...",
      image: "https://jhbchildwelfare.org.za/wp-content/uploads/2024/03/Website-JCW-Main-Logo-2024-300x120.jpg",
      date: "Today"
    },
    {
      id: 2,
      title: "System Update",
      preview: "New features have been added...",
      image: "/api/placeholder/100/100",
      date: "Today"
    }
  ];

  return (
    <div className="inbox-container">
      <header className="inbox-header">
        <div className="header-content">
          {!isDetailsOpen ? (
            <>
              <h1>Inbox</h1>
              <Link href="/components/Homepage" className="home-link">
                Home
              </Link>
            </>
          ) : (
            <div className="details-header-content">
              <button className="back-button" onClick={handleBackClick}>
                <span className="back-arrow">←</span>
                <span>Back to Inbox</span>
              </button>
              <Link href="/components/Homepage" className="home-link">
                Home
              </Link>
            </div>
          )}
        </div>
      </header>

      <div className="notification-list" ref={listRef}>
        {notifications.map((notification, index) => (
          <div key={notification.id} className="list-item">
            <img src={notification.image} alt={`${notification.title} icon`} className="notification-image" />
            <div className="list-item-content">
              <h3 className="notification-title">{notification.title}</h3>
              <p className="notification-preview">{notification.preview}</p>
              {index === 0 && <p className="notification-date">{notification.date}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className={`details-view ${isDetailsOpen ? 'opened' : ''}`} ref={detailsViewRef}>
        {selectedNotification && (
          <>
            <div className="details-header">
              <img 
                src={selectedNotification.image} 
                alt="Notification sender" 
                className="details-image"
              />
              <div className="details-title">
                <h2>{selectedNotification.title}</h2>
              </div>
            </div>
            <div className="details-content">
              <p>{selectedNotification.content}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Inbox;