import { motion } from 'framer-motion'

import { Card } from '../data/deck'
interface StackProps {
  stack: Card[]
}

const Stack = ({ stack }: StackProps) => {
  return (
    <motion.ul layout className="flex flex-col space-y-2">
      {stack.map(({ name, suit, suitEmoji }) => (
        <motion.li
          layoutId={`${name} ${suit}`}
          key={`${name} ${suit}`}
          className="flex justify-between w-24 p-1 px-2 bg-white rounded pointer-events-none ring-2 ring-inset ring-gray-300"
        >
          <span>{name}</span>
          <span>{suitEmoji}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export { Stack }
