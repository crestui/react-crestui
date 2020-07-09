import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import nextId from 'react-id-generator'
import { TabContext } from './use-tab'
import { displayNone } from '../../utils/display-none'

const TabContent = styled.div<{ selected: boolean }>`
  opacity: ${(props) => (props.selected ? 1 : 0)};
  transition: opacity 0.3s ease-in;
  ${(props) => (props.selected ? '' : displayNone())}
`

export interface TabItemProps {
  title: string

  value: string

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
      <TabHeader onClick={(_: MouseEvent) => onSelectTab(tabInfo, props.id)} selected={selected}>
        <TabHeaderSpan>{props.name}</TabHeaderSpan>
      </TabHeader>
    )
  } else {
    return (
      <TabContent selected={selected}>{props.children}</TabContent>
    )
  }
  return (
    <div>
      {thisId} - {selected}
    </div>
  )
}
