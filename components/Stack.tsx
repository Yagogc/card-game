import { Card } from '../data/deck'

interface StackProps {
  stack: Card[]
}

const Stack = ({ stack }: StackProps) => {
  return (
    <ul className="flex flex-col space-y-2">
      {stack.map(({ name, suit, suitEmoji }) => (
        <li
          key={`${name} ${suit}`}
          className="w-24 rounded ring-2 ring-inset ring-gray-300 p-1 px-2 flex justify-between pointer-events-none"
        >
          <span>{name}</span>
          <span>{suitEmoji}</span>
        </li>
      ))}
    </ul>
  )
}

export { Stack }
