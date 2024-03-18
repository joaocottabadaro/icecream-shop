// interface Props { }

import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export default function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  console.log('🚀 ~ NavLink ~ pathname:', pathname)
  console.log('🚀 ~ NavLink ~ props.to:', props.to)
  return (
    <Link
      data-active={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[active=true]:border-b-2 data-[active=true]:text-foreground"
      {...props}
    />
  )
}
