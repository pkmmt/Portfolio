"use client";
import '@/app/ui/faq/faq.css';
import { useState, useRef, useEffect } from "react";

const faqData = [
  {
    question: "What is the purpose of JCW?",
    answer: "Joburg Child Welfare (JCW) is a beacon of hope for vulnerable children in need of protective care. Since 1909, JCW, a non-profit organisation (NPO), has been dedicated to providing abused, abandoned, neglected, orphaned, and vulnerable children with the love and support they deserve."
  },
  {
    question: "Does JCW get funding from the government?",
    answer: "An answer to the question"
  },
  {
    question: "Where is the JCW head office located?",
    answer: "It is located at"
  },
  {
    question: "Can I volunteer at one of the centers?",
    answer: "Yes."
  },
  {
    question: "Can I use my donation for tax rebate?",
    answer: "Absolutely!"
  }
];

function AccordionItem({ question, answer, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button 
        className={`accordion-header ${isOpen ? 'active' : ''}`} 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h2 className="accordion-question">{question}</h2>
        <span className="accordion-icon"></span>
      </button>
      <div 
        className="accordion-content" 
        style={{ height: `${height}px` }}
        ref={contentRef}
      >
        <div className="accordion-answer">{answer}</div>
      </div>
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-wrapper">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="accordion">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;