import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

function SEO({ description, lang, meta, title }) {
  const metaDescription = description
  const author = 'reactUI'
  return (
    <Head>
      <title>{title}</title>
      <meta property='description' content={metaDescription} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:creator' content={author} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={metaDescription} />
    </Head>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
