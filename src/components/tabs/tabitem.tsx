import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import nextId from 'react-id-generator'
import { TabContext } from './use-tab'
import { displayNone } from '../../utils/display-none'

const TabHeader = styled.div<{ selected: boolean }>`
  background-color: transparent;
  flex: 1 auto;
  border-bottom: ${(props) => (props.selected ? '2px solid' : 'none')};
  border-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  min-height: 5vh;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
  min-width: 15%;
  padding: 0rem 0.5rem;
`

const TabContent = styled.div<{ selected: boolean }>`
  opacity: ${(props) => (props.selected ? 1 : 0)};
  transition: opacity 0.3s ease-in;
  ${(props) => (props.selected ? '' : displayNone())}
`

const TabHeaderSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
`

export interface TabItemProps {
  title: string

  value: string

  headingOnly: boolean

  children: React.ReactNode
}

export const TabItem = (props: TabItemProps) => {
  const tabContext = useContext(TabContext)
  const [selected, setSelected] = useState(tabContext.value === props.value)
  useEffect(() => {
    setSelected(tabContext.value === props.value)
  }, [tabContext.value, props.value, setSelected])
  const thisId = nextId()
  console.info(`${props.title}`)
  if (props.headingOnly) {
    return (
      <TabHeader
        onClick={(_: MouseEvent) => onSelectTab(tabInfo, props.id)}
        selected={selected}
      >
        <TabHeaderSpan>{props.name}</TabHeaderSpan>
      </TabHeader>
    )
  } else {
    return <TabContent selected={selected}>{props.children}</TabContent>
  }
  return (
    <div>
      {thisId} - {selected}
    </div>
  )
}
