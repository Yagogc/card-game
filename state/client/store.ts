import create from 'zustand'

import { Card, deck as defaultDeck } from '../../data/deck'
import { sortHand } from '../../utils/sort'
import {
  deleteGame,
  isGameSaved,
  restoreGame,
  saveGame,
} from '../local/gameState'

type State = {
  deck: Card[]
  hand: Card[]
  setDeck: (cards: Card[]) => void
  setHand: (cards: Card[]) => void
  isSaved: boolean
  draw: (by: number) => void
  save: () => void
  reset: () => void
  shuffle: () => void
  sort: () => void
}

const restoredDeck = restoreGame()?.deck
const restoredHand = restoreGame()?.hand

const useCardStore = create<State>((set, get) => ({
  deck: restoredDeck || defaultDeck,
  hand: restoredHand || [],
  isSaved: isGameSaved(),
  setDeck: (deck) =>
    set(() => {
      return { deck }
    }),
  setHand: (hand) =>
    set(() => {
      return { hand }
    }),
  draw: (by = 1) =>
    set((state) => {
      const newDeck = state.deck.slice(by)
      const newHand = [...state.deck.slice(0, by), ...state.hand]
      return { deck: newDeck, hand: newHand }
    }),
  save: () =>
    set(() => {
      const deck = get().deck
      const hand = get().hand
      saveGame({ deck, hand })
      set({ isSaved: true })
    }),
  reset: () =>
    set(() => {
      deleteGame()
      return { isSaved: false, deck: defaultDeck, hand: [] }
    }),
  shuffle: () =>
    set((state) => {
      const newShuffledDeck = [...state.deck].sort(() => Math.random() - 0.5)
      return { deck: newShuffledDeck }
    }),
  sort: () =>
    set((state) => {
      const newSortedHand = sortHand(state.hand)
      return { hand: newSortedHand }
    }),
}))

export { useCardStore }
