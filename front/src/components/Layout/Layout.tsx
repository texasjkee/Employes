import { FC, ReactNode } from 'react'

import style from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={style.main}>{children}</div>
}
