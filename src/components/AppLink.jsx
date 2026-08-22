import React from 'react'
import { useHref, useNavigate } from 'react-router-dom'

/**
 * Internal nav link — path always comes from ROUTES constants, never from i18n.
 * Uses navigate() on click so browser auto-translate cannot break routing
 * even if it mutates the rendered href attribute.
 */
const AppLink = ({ to, children, className = '', style, onClick, ...rest }) => {
  const navigate = useNavigate()
  const href = useHref(to)

  const handleClick = (e) => {
    onClick?.(e)
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return
    }
    e.preventDefault()
    navigate(to)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      translate="no"
      className={className ? `${className} notranslate` : 'notranslate'}
      style={style}
      {...rest}
    >
      {children}
    </a>
  )
}

export default AppLink
