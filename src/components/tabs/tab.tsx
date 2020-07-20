import React from 'react'
import styled from 'styled-components'
import { TabContext, TabState } from './use-tab'
import { addPropsToChildren } from '../../utils/add-props-to-children'

export interface TabProps {
  children: React.ReactNode
  tabState: TabState
}

const TabHeaders = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll !important;
  scrollbar-width: thin;
  scroll-color: ${(props) => props.theme.colors.primary}
    ${(props) => props.theme.colors.primary};
`
export const Tabs = (props: TabProps) => {
  const tabHeaders = addPropsToChildren(props.children, (index: number) => {
    return { key: index, headingOnly: true }
  })
  return (
    <TabContext.Provider value={props.tabState}>
      <TabHeaders>{tabHeaders}</TabHeaders>
      <div>{props.children}</div>
    </TabContext.Provider>
  )
}
