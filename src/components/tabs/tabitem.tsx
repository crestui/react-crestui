import React, { useContext, useState, useEffect } from 'react'
import nextId from 'react-id-generator'
import { TabContext } from './use-tab'

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
  return (
    <div>
      {thisId} - {selected}
    </div>
  )
}
