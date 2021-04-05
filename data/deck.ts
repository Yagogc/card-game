import { Emojis, Suits } from './deck.d'

export interface Card {
  value: number
  name: string
  suit: Suits
  suitEmoji: Emojis
}

const deck: Card[] = [
  { value: 13, name: 'Ace', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 1, name: 'Two', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 2, name: 'Three', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 3, name: 'Four', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 4, name: 'Five', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 5, name: 'Six', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 6, name: 'Seven', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 7, name: 'Eight', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 8, name: 'Nine', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 9, name: 'Ten', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 10, name: 'Jack', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 11, name: 'Queen', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 12, name: 'King', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 13, name: 'Ace', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 1, name: 'Two', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 2, name: 'Three', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 3, name: 'Four', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 4, name: 'Five', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 5, name: 'Six', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 6, name: 'Seven', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 7, name: 'Eight', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 8, name: 'Nine', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 9, name: 'Ten', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 10, name: 'Jack', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  {
    value: 11,
    name: 'Queen',
    suit: Suits.diamonds,
    suitEmoji: Emojis.diamonds,
  },
  { value: 12, name: 'King', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 13, name: 'Ace', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 1, name: 'Two', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 2, name: 'Three', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 3, name: 'Four', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 4, name: 'Five', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 5, name: 'Six', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 6, name: 'Seven', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 7, name: 'Eight', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 8, name: 'Nine', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 9, name: 'Ten', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 10, name: 'Jack', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 11, name: 'Queen', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 12, name: 'King', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 13, name: 'Ace', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 1, name: 'Two', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 2, name: 'Three', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 3, name: 'Four', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 4, name: 'Five', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 5, name: 'Six', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 6, name: 'Seven', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 7, name: 'Eight', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 8, name: 'Nine', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 9, name: 'Ten', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 10, name: 'Jack', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 11, name: 'Queen', suit: Suits.spades, suitEmoji: Emojis.spades },
  { value: 12, name: 'King', suit: Suits.spades, suitEmoji: Emojis.spades },
]

export { deck }
