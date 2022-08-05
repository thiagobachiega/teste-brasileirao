import React from 'react'

export interface RowProps {
  children: React.ReactNode
  className?: string
}
const Row: React.FC<RowProps> = ({ children, className }) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>
}

export default Row
