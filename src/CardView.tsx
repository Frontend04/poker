import React from 'react';
import ReactDOM from 'react-dom';

interface CardViewProps {
  rank: string;
  suit: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

const CardView: React.FC<CardViewProps> = ({ rank, suit, isSelected, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <span
      className={`card rank-${rank.toLowerCase()} ${suit} ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <span className="rank">{rank}</span>
      <span className="suit">{getSuitSymbol(suit)}</span>
    </span>
  );
};

const getSuitSymbol = (suit: string): string => {
  switch (suit) {
    case 'diams':
      return '♦';
    case 'hearts':
      return '♥';
    case 'clubs':
      return '♣';
    case 'spades':
      return '♠';
    default:
      return '';
  }
};

ReactDOM.render(
  <CardView rank="K" suit="diams" isSelected={false} onClick={() => console.log('Card clicked')} />,
  document.getElementById('root')
);

export default CardView;
