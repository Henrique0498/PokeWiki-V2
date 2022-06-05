import { useRouter } from 'next/router'

import NavLink from 'components/NavLink'

import * as S from './styles'

interface LiProps {
  href: string
  children: React.ReactNode
  items: number
}

const Li = ({ href, children, ...props }: LiProps) => {
  const router = useRouter()

  return (
    <S.Container
      className={`${router.asPath === href ? 'active' : ''}`}
      {...props}
    >
      <NavLink href={href} activeClass={`active`}>
        {children}
      </NavLink>
    </S.Container>
  )
}

export default Li
