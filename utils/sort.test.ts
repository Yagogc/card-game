import { Emojis, Suits } from '../data/deck.d'
import { sortHand } from './sort'

const orderedHand = [
  { value: 1, name: 'Two', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 13, name: 'Ace', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 1, name: 'Two', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 2, name: 'Two', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
]

const unorderedHand = [
  { value: 2, name: 'Two', suit: Suits.diamonds, suitEmoji: Emojis.diamonds },
  { value: 1, name: 'Two', suit: Suits.hearts, suitEmoji: Emojis.hearts },
  { value: 1, name: 'Two', suit: Suits.clubs, suitEmoji: Emojis.clubs },
  { value: 13, name: 'Ace', suit: Suits.clubs, suitEmoji: Emojis.clubs },
]

test('Sort the hand of unsorted cards', async () => {
  expect(sortHand(unorderedHand)).toStrictEqual(orderedHand)
})

test('A sorted hand of card keeps sorted', async () => {
  expect(sortHand(orderedHand)).toStrictEqual(orderedHand)
})
