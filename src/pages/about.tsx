import { useEffect } from 'react'

import useAuth from 'hooks/useAuth'
import AboutTemplatePage from 'templates/AboutTemplatePage'

const About = () => {
  const { setLoading } = useAuth()

  useEffect(() => {
    setLoading(false)
  }, [setLoading])

  return <AboutTemplatePage />
}

export default About
