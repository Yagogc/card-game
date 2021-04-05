import { ChangeEvent, useState } from 'react'

interface InputNumberProps {
  drawNumber: number
  setDrawNumber: (by: number) => void
  deckLenght: number
  disabled: boolean
}

const InputNumber = ({
  drawNumber,
  setDrawNumber,
  deckLenght,
  disabled,
}: InputNumberProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setDrawNumber(e.target.valueAsNumber)
  }

  return (
    <input
      className={`flex-1 w-24 p-1 px-2 text-center bg-gray-300 rounded ${
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:text-gray-700'
      }`}
      type="number"
      value={drawNumber}
      min="1"
      max={deckLenght}
      disabled={disabled}
      onChange={handleChange}
    />
  )
}

export { InputNumber }
