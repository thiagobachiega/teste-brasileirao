import React from 'react'

export interface FlexProps {
  children: React.ReactNode
  className?: string
}
const Flex: React.FC<FlexProps> = ({ children, className }) => {
  return <div className={`flex ${className}`}>{children}</div>
}

export default Flex
