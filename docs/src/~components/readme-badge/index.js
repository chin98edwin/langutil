import React, { memo } from 'react'
import PropTypes from 'prop-types'

const ReadmeBadge = memo(function ({ alt, src, href }) {
  const img = <img src={src} alt={alt} style={{ height: 24 }} />
  if (href) {
    return <a href={href} target='_blank' rel='noopener noreferrer' children={img} />
  } else {
    return img
  }
}, () => true)


ReadmeBadge.propTypes = {
  /**
   * @description Alternative text for the image
   */
  alt: PropTypes.string.isRequired,
  /**
   * @description Image of the badge
   */
  src: PropTypes.string.isRequired,
  /**
   * @description Link to open upon clicking the badge
   */
  href: PropTypes.string.isRequired,
}

export default ReadmeBadge
