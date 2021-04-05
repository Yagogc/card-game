import React from 'react'

interface ControlsProps {
  name: String
}

const Controls: React.FC<ControlsProps> = ({ children, name }) => {
  return (
    <div className="flex flex-col gap-2 p-2 justify-items-center">
      <div className="font-mono text-sm font-bold text-center">{name}</div>
      {children}
    </div>
  )
}

export { Controls }
