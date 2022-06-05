import useAppData from 'hooks/useAppData'
import { useState } from 'react'

import * as S from './styles'

export interface PagesProps {
  active?: string
  head: {
    id: string
    icon: JSX.Element
    text: string
  }[]
  body: {
    id: string
    content: string | JSX.Element
  }[]
}

const Pages = ({ active, head, body }: PagesProps) => {
  const { theme } = useAppData()
  const [navigation, setNavigation] = useState(active ?? head[0].id)

  function renderList() {
    return head.map((head, i) => (
      <li
        key={`${head.text}${i}`}
        className={navigation === head.id ? 'active' : ''}
      >
        <a onClick={() => setNavigation(head.id)}>
          {head.icon}
          <h2 className="hidden md:block">{head.text}</h2>
        </a>
      </li>
    ))
  }

  function renderBody() {
    const fBody = body.filter((el) => el.id === navigation)[0]

    if (fBody) {
      return fBody.content
    }

    return null
  }

  return (
    <S.Content className={theme}>
      <S.Head
        className={`border-b-2 border-blue-500 dark:border-blue-600 ${theme}`}
      >
        <ul>{renderList()}</ul>
      </S.Head>
      <S.Body>{renderBody()}</S.Body>
    </S.Content>
  )
}

export default Pages
