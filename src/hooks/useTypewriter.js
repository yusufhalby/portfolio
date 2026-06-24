import { useState, useEffect } from 'react'

const roles = ['Backend Developer', 'Node.js Engineer', 'IT Specialist', 'Open to Remote']

export function useTypewriter() {
  const [text, setText] = useState('')

  useEffect(() => {
    let ri = 0
    let ci = 0
    let deleting = false
    let timeoutId
    let active = true

    function type() {
      if (!active) return
      const word = roles[ri]
      if (!deleting) {
        ci++
        setText(word.slice(0, ci))
        if (ci === word.length) {
          deleting = true
          timeoutId = setTimeout(type, 1800)
        } else {
          timeoutId = setTimeout(type, 70)
        }
      } else {
        ci--
        setText(word.slice(0, ci))
        if (ci === 0) {
          deleting = false
          ri = (ri + 1) % roles.length
        }
        timeoutId = setTimeout(type, 38)
      }
    }

    timeoutId = setTimeout(type, 600)

    return () => {
      active = false
      clearTimeout(timeoutId)
    }
  }, [])

  return text
}