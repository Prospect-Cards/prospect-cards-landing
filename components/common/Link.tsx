import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'

interface Props extends LinkProps {
  children: ReactNode;
  className: string;
}

const ButtonLink = React.forwardRef(
  ({ className, href, as, children, prefetch }: Props, ref) => (
    <Link href={ href } as={ as } prefetch={ prefetch } >
      <a className={ className }>{children}</a>
    </Link>
  ),
)

export default ButtonLink
