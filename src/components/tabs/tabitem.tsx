import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import nextId from 'react-id-generator'
import { TabContext } from './use-tab'
import { displayNone } from '../../utils/display-none'

const TabHeader = styled.div<{ selected: boolean }>`
  background-color: transparent;
  flex: 1 auto;
  border-width: ${(props) => (props.selected ? '4px' : '4px')};
  border-style: none none solid none;
  border-bottom-color: ${(props) =>
    props.selected ? props.theme.colors.primary : props.theme.colors.shadow};
  cursor: pointer;
  min-height: 5vh;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
  min-width: 25%;
  padding: 0.5rem 0.5rem;

  &:hover {
    border-bottom-color: ${(props) =>
      props.selected ? props.theme.colors.primary : props.theme.colors.focus};
  }
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

  key: number

  headingOnly: boolean

  children: React.ReactNode
}

export const TabItem = (props: TabItemProps) => {
  const tabContext = useContext(TabContext)
  const [selected, setSelected] = useState(tabContext.value === props.value)
  console.info(`Key: ${props.key}, Value: ${props.value}`)
  useEffect(() => {
    if (
      (tabContext.value === undefined ||
        tabContext.value === null ||
        tabContext.value.length === 0) &&
      props.key === 0
    ) {
      setSelected(true)
      tabContext.setValue(props.value)
    } else {
      setSelected(tabContext.value === props.value)
    }
  }, [tabContext, props.key, props.value, setSelected])
  const thisId = nextId()
  console.info(`divid: ${thisId}`)
  if (props.headingOnly) {
    return (
      <TabHeader
        selected={selected}
        onClick={(e) => {
          e.preventDefault()
          tabContext.setValue(props.value)
        }}>
        <TabHeaderSpan>{props.title}</TabHeaderSpan>
      </TabHeader>
    )
  } else {
    return <TabContent selected={selected}>{props.children}</TabContent>
  }
}
