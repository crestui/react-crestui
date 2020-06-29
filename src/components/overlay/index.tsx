import React from 'react'
import styled from 'styled-components'

const OverlayContainer = styled.div`
  position: relative;
`

export interface OverlayProps {
  children: React.ReactNode
}

/**
 *
 */
export const Overlay = (props: OverlayProps) => {
  console.info(props)
  return (
    <OverlayContainer>
      <div>{props.children}</div>
    </OverlayContainer>
  )
}

export default Overlay
