import { useEffect } from 'react'

import useAuth from 'hooks/useAuth'
import SearchPageTemplate from 'templates/SearchPageTemplate'

const SearchPage = () => {
  const { setLoading } = useAuth()

  useEffect(() => {
    setLoading(false)
  }, [setLoading])

  return <SearchPageTemplate />
}

export default SearchPage
