import Card from './Card';

class CardDeck {
  deck: Card[];

  constructor() {
    this.deck = this.createDeck();
  }

  createDeck(): Card[] {
    const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];

    const deck: Card[] = [];

    for (const suit of suits) {
      for (const rank of ranks) {
        const card: Card = new Card(rank, suit);
        deck.push(card);
      }
    }

    return deck;
  }

  getCard(): Card | null {
    if (this.deck.length === 0) {
      return null;
    }

    return this.deck.pop() || null;
  }

  getCards(howMany: number): Card[] {
    const cards: Card[] = [];

    for (let i = 0; i < howMany; i++) {
      const card: Card | null = this.getCard();
      if (card) {
        cards.push(card);
      }
    }

    return cards;
  }
}

export default CardDeck;
