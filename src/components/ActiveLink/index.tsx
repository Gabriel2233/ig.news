import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, cloneElement } from 'react'

type ActiveLinkProps = LinkProps & {
  activeClassName: string;
  children: ReactElement;
}

export function ActiveLink({ activeClassName, children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassName : ""

  return (
    <Link {...rest}>
      {cloneElement(children, { className })}
    </Link>
  )
}
