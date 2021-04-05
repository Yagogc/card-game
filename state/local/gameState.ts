import { Card } from '../../data/deck'

interface GameState {
  deck: Card[]
  hand: Card[]
}

const KEY = 'save'

const saveGame = ({ deck, hand }: GameState) => {
  const newSave = JSON.stringify({ deck, hand })
  localStorage.setItem(KEY, newSave)
}

const restoreGame = (): GameState => {
  const restoredGame = process.browser ? localStorage.getItem(KEY) : null
  if (!restoredGame) return null

  return JSON.parse(restoredGame)
}

const deleteGame = (): void => {
  localStorage.removeItem(KEY)
}

export { saveGame, restoreGame, deleteGame }
