import React from 'react'
import styled from 'styled-components'
import { TabContext, TabState } from './use-tab'
import { Box } from '../box'
import { addPropsToChildren } from '../../utils/add-props-to-children'

export interface TabProps {
  children: React.ReactNode
  state: TabState
}

const TabContainer = styled(Box)`
  width: 100%;
`

const TabHeaders = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-width: thin;
  scroll-color: ${(props) => props.theme.colors.primary}
    ${(props) => props.theme.colors.primary};
`

export const Tabs = (props: TabProps) => {
  const withKeys = addPropsToChildren(props.children, (index: number) => {
    console.info(`add key index: ${index}`)
    return { key: index }
  })
  const tabHeaders = addPropsToChildren(props.children, (index: number) => {
    return { key: index, headingOnly: true }
  })
  return (
    <TabContainer>
      <TabContext.Provider value={props.state}>
        <TabHeaders>{tabHeaders}</TabHeaders>
        <div>{withKeys}</div>
      </TabContext.Provider>
    </TabContainer>
  )
}
