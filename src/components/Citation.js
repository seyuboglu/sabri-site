import React from 'react';

// Citation counter to auto-number citations
let citationCounter = 0;
const citationNumbers = new Map();

// Reset counter function
export const resetCitationCounter = () => {
  citationCounter = 0;
  citationNumbers.clear();
};

const Citation = ({ cardId, onHover, onLeave, showAllPapers, togglePapersView, researchData }) => {
  // Auto-assign citation number
  if (!citationNumbers.has(cardId)) {
    citationCounter++;
    citationNumbers.set(cardId, citationCounter);
  }
  const number = citationNumbers.get(cardId);
  
  const paper = researchData?.find(p => p.id === cardId);
  const isHidden = paper && !paper.pinned && !showAllPapers;
  
  const handleClick = (e) => {
    // If paper exists, is not pinned, and we're not showing all papers, show all papers
    if (isHidden) {
      e.preventDefault();
      togglePapersView();
      // After showing all papers, scroll to the card
      setTimeout(() => {
        const cardElement = document.getElementById(`card-${cardId}`);
        if (cardElement) {
          cardElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }
      }, 200);
    }
  };

  return (
    <a 
      href={`#card-${cardId}`}
      className={`citation-link ${isHidden ? 'citation-hidden' : ''}`}
      onMouseEnter={() => onHover(cardId)}
      onMouseLeave={onLeave}
      onClick={handleClick}
      title={isHidden ? 'Click to show all papers' : ''}
    >
      {number}
    </a>
  );
};

export default Citation;