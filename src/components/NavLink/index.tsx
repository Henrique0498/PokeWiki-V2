import { useRouter } from 'next/router'
import Link from 'next/link'

interface NavLinkProps {
  children: React.ReactNode
  href: string
  className?: string
  activeClass?: string
}

const NavLink = ({ children, className, activeClass, href }: NavLinkProps) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a
        className={`
          ${className ?? ''}
          ${router.asPath === href ? activeClass : ''}
        `}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavLink
