import { PropsWithChildren } from 'react'

interface layoutType {
	children: React.ReactNode
}

const Layout = ({children}:layoutType) => {
  return (
	<div className="max-w-[1500px] mx-auto">
		{children}
	</div>
  )
}

export default Layout