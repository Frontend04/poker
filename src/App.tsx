import React, { useState, useRef } from 'react';
import CardView from './CardView';
import CardDeck from './lib/CardDeck';
import PokerHand from './lib/PokerHand';
import './App.css'
interface Card {
  rank: string;
  suit: string;
  isSelected: boolean;
}

const App: React.FC = () => {
  const deckRef = useRef<CardDeck>(new CardDeck());
  const [cards, setCards] = useState<Card[]>([]);

  const dealCards = () => {
    const deck = deckRef.current;
    const newCards = deck.getCards(5).map((card) => ({ ...card, isSelected: false }));
    setCards(newCards);
  };

  const replaceCards = () => {
    const deck = deckRef.current;
    const selectedCards = cards.filter((card) => card.isSelected);
    const replacedCards = deck.getCards(selectedCards.length).map((card) => ({ ...card, isSelected: false }));
 
    
    const newCards = cards.map((card, index) =>
      card.isSelected ? { ...replacedCards.shift()!, isSelected: false } : card
    );
    
    setCards(newCards);
  };

  const selectCard = (index: number) => {
    const updatedCards = [...cards];
    updatedCards[index].isSelected = !updatedCards[index].isSelected;
    setCards(updatedCards);
  };

  const getCardClassName = (index: number) => {
    return cards[index].isSelected ? 'card selected' : 'card';
  };

  const renderCards = () => {
    if (cards.length === 0) {
      return null;
    }
  
    return cards.map((card, index) => (
      <CardView
        key={index}
        rank={card.rank}
        suit={card.suit}
        isSelected={card.isSelected}
        onClick={() => selectCard(index)}
        className={getCardClassName(index)}
      />
    ));
  };

  const getOutcome = () => {
    const pokerHand = new PokerHand(cards);
    return pokerHand.getOutcome();
  };

  return (
    <div className="App">
      <div className="playingCards faceImages">{renderCards()}</div>
      <button onClick={dealCards}>Раздать карты</button>
      <button onClick={replaceCards}>Заменить карты</button>
      <div className="outcome">{getOutcome()}</div>
    </div>
  );
};

export default App;
