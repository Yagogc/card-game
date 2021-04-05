import { Card } from '../data/deck'
import { Suits } from '../data/deck.d'

const getSuitValue = (suit: Suits) => {
  if (suit === Suits.clubs) {
    return 0
  } else if (suit === Suits.spades) {
    return 100
  } else if (suit === Suits.hearts) {
    return 200
  } else {
    return 300
  }
}

const sortCards = (a: Card, b: Card) => {
  const newA = a.value + getSuitValue(a.suit)
  const newB = b.value + getSuitValue(b.suit)
  return newA - newB
}

const sortHand = (deck: Card[]) => {
  let newHand: Card[] = [...deck]
  newHand.sort(sortCards)
  return newHand
}

export { sortHand }
