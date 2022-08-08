import React from 'react'

export interface FlexProps {
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
const Flex: React.FC<FlexProps> = ({ children, className, onClick }) => {
  return <div className={`flex ${className}`} onClick={onClick}>{children}</div>
}

export default Flex
