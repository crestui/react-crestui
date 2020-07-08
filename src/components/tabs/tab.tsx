import React from 'react'
import { Flex } from '../flex'
// eslint-disable-next-line no-unused-vars
import { TabContext, TabState } from './use-tab'

export interface TabProps {
  children: React.ReactNode
  tabState: TabState
}

export const Tabs = (props: TabProps) => {
  return (
    <TabContext.Provider value={props.tabState}>
      <Flex
        flexDirection='row'
        style={{
          verticalAlign: 'middle'
        }}
      >
        {props.children}
      </Flex>
    </TabContext.Provider>
  )
}
