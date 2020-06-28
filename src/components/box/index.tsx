import * as React from 'react'

interface BoxProps {
  children: React.ReactNode
}

export const Box = ({ children }: BoxProps) => {
  return <div>{children}</div>
}
