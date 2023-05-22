import Card from './Card';

class PokerHand {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getOutcome(): string {
    if (this.isRoyalFlush()) {
      return 'Роял-флэш (Royal flush)';
    } else if (this.isStraightFlush()) {
      return 'Стрит-флэш (Straight flush)';
    } else if (this.isFourOfAKind()) {
      return 'Каре/Четвёрка/Покер (Four of a kind)';
    } else if (this.isFullHouse()) {
      return 'Фулл-хаус (Full house)';
    } else if (this.isFlush()) {
      return 'Флэш (Flush)';
    } else if (this.isStraight()) {
      return 'Стрит (Straight)';
    } else if (this.isThreeOfAKind()) {
      return 'Тройка (Three of a kind)';
    } else if (this.isTwoPairs()) {
      return 'Две пары (Two pairs)';
    } else if (this.isOnePair()) {
      return 'Одна пара (One pair)';
    } else {
      return 'Ничего (No combination)';
    }
  }

  isRoyalFlush(): boolean {
    const ranks: string[] = ['10', 'J', 'Q', 'K', 'A'];
    const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];

    for (const suit of suits) {
      let count: number = 0;

      for (const rank of ranks) {
        if (this.hasCard(rank, suit)) {
          count++;
        }
      }

      if (count === 5) {
        return true;
      }
    }

    return false;
  }

  isStraightFlush(): boolean {
    const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];

    for (const suit of suits) {
      let straightCount: number = 0;
      let currentRank: string | null = null;

      for (const card of this.cards) {
        if (card.suit === suit) {
          if (currentRank === null) {
            currentRank = card.rank;
            straightCount++;
          } else if (card.rank === currentRank + 1) {
            currentRank = card.rank;
            straightCount++;
          }
        }
      }

      if (straightCount === 5) {
        return true;
      }
    }

    return false;
  }

  isFourOfAKind(): boolean {
    const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (const rank of ranks) {
      let count: number = 0;

      for (const card of this.cards) {
        if (card.rank === rank) {
          count++;
        }
      }

      if (count === 4) {
        return true;
      }
    }

    return false;
  }

  isFullHouse(): boolean {
    const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let threeOfAKindRank: string | null = null;
    let pairRank: string | null = null;

    for (const rank of ranks) {
      let count: number = 0;

      for (const card of this.cards) {
        if (card.rank === rank) {
          count++;
        }
      }

      if (count === 3) {
        threeOfAKindRank = rank;
      } else if (count === 2) {
        pairRank = rank;
      }
    }

    return threeOfAKindRank !== null && pairRank !== null;
  }

  isFlush(): boolean {
    const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];

    for (const suit of suits) {
      let count: number = 0;

      for (const card of this.cards) {
        if (card.suit === suit) {
          count++;
        }
      }

      if (count === 5) {
        return true;
      }
    }

    return false;
  }

  isStraight(): boolean {
    const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let straightCount: number = 0;
    let currentRank: string | null = null;

    for (const card of this.cards) {
      if (currentRank === null) {
        currentRank = card.rank;
        straightCount++;
      } else if (card.rank === currentRank + 1) {
        currentRank = card.rank;
        straightCount++;
      }
    }

    return straightCount === 5;
  }

  isThreeOfAKind(): boolean {
    const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (const rank of ranks) {
      let count: number = 0;

      for (const card of this.cards) {
        if (card.rank === rank) {
          count++;
        }
      }

      if (count === 3) {
        return true;
      }
    }

    return false;
  }

  isTwoPairs(): boolean {
    const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let pairsCount: number = 0;

    for (const rank of ranks) {
      let count: number = 0;

      for (const card of this.cards) {
        if (card.rank === rank) {
          count++;
        }
      }

      if (count === 2) {
        pairsCount++;
      }
    }

    return pairsCount === 2;
  }

  isOnePair(): boolean {
    const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (const rank of ranks) {
      let count: number = 0;

      for (const card of this.cards) {
        if (card.rank === rank) {
          count++;
        }
      }

      if (count === 2) {
        return true;
      }
    }

    return false;
  }

  hasCard(rank: string, suit: string): boolean {
    for (const card of this.cards) {
      if (card.rank === rank && card.suit === suit) {
        return true;
      }
    }

    return false;
  }
}

export default PokerHand;
