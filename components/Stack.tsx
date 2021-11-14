import { Reorder } from 'framer-motion'
import * as React from 'react'

import { Card } from '../data/deck'
interface StackProps {
  stack: Card[]
  setter: (cards: Card[]) => void
}

const Stack: React.FC<StackProps> = ({ stack, setter }) => {
  return (
    <Reorder.Group
      values={stack}
      axis="y"
      onReorder={setter}
      className="flex flex-col space-y-2"
    >
      {stack.map((card) => {
        const { name, suit, suitEmoji } = card
        return (
          <Reorder.Item
            layoutId={`${name} ${suit}`}
            key={`${name} ${suit}`}
            value={card}
            className="flex justify-between w-24 p-1 px-2 bg-white rounded cursor-pointer ring-2 ring-inset ring-gray-300"
          >
            <span>{name}</span>
            <span>{suitEmoji}</span>
          </Reorder.Item>
        )
      })}
    </Reorder.Group>
  )
}

export { Stack }
