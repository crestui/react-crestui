import * as React from 'react'

interface ButtonProps {
  label: string
}

// eslint-disable-next-line no-empty-pattern
export const Button = ({ label }: ButtonProps) => {
  return (
    <div>
      {label}
      Interesting
    </div>
  )
}
