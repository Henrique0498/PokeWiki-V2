import { useCallback } from 'react'

type TransformType = 'replace'

const useText = () => {
  const textTransform = useCallback(
    (text: string, transform: TransformType) => {
      let textFinally = ''

      if (transform === 'replace') {
        if (text && text.indexOf('-') > 0) {
          textFinally = text.replace(/-/g, ' ')
        } else if (text && text.indexOf(' ') > 0) {
          textFinally = textFinally = text.replace(/ /g, '-')
        } else {
          textFinally = text
        }
      }

      return textFinally
    },
    []
  )

  return { textTransform }
}

export default useText
