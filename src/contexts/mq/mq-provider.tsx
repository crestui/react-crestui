import React from 'react'
import { MQContext, useMQ } from './mq-provider-context'

type Props = {
  children: React.ReactNode
}

export const MQProvider = ({ children }: Props) => {
  const mqState = useMQ()
  return <MQContext.Provider value={mqState}>{children}</MQContext.Provider>
}
