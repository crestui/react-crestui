import React from 'react'
import ComponentsSidebar from '@components/react-components-sidebar'
import Layout from '@components/layout'
import SEO from '@components/seo'

const ReactComponentsLayout = ({ title, children }) => (
  <Layout>
    <SEO title={title} />
    <ComponentsSidebar>{children}</ComponentsSidebar>
  </Layout>
)

export default ReactComponentsLayout
