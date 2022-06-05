import Link from 'next/link'
import { memo } from 'react'

import * as S from './styles'

interface TitleSiteProps {
  title?: string
  size?: string
  href?: string
}

function TitleSiteComponent({
  title = 'PokeWiki',
  href,
  size = 'text-4xl'
}: TitleSiteProps) {
  function renderText() {
    if (href) {
      return (
        <Link href={href}>
          <a className="title">{title}</a>
        </Link>
      )
    } else {
      return <div className="title">{title}</div>
    }
  }

  return <S.Container className={size}>{renderText()}</S.Container>
}

const TitleSite = memo(TitleSiteComponent)

export default TitleSite
