import React from 'react'

interface ColumnProps {
  name: String
}

const Column: React.FC<ColumnProps> = ({ children, name }) => {
  return (
    <div className="flex flex-col p-2 space-y-2 justify-items-center">
      <div className="font-mono font-bold text-center text-m">{name}</div>
      {children}
    </div>
  )
}

export { Column }
