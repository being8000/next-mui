import { ReactNode } from 'react'
import { Settings } from '@/@core/context/settingsContext'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'
import { NavLinkItem } from '@/navigation/vertical'

export type ContentWidth = 'full' | 'boxed'

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export type NavLink = {
  path?: string
  title: string
  action?: string
  subject?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  openInNewTab?: boolean
  icon?: string | string[] | ReactNode | OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  children?: NavLink[]
}

export type NavSectionTitle = {
  sectionTitle: string
  action?: string
  subject?: string
}

export type VerticalNavItemsType = (NavLink | NavSectionTitle)[]

export type LayoutProps = {
  hidden: boolean
  settings: Settings
  children: ReactNode
  verticalNavItems?: NavLinkItem[]
  scrollToTop?: (props?: any) => ReactNode
  saveSettings: (values: Settings) => void
  footerContent?: (props?: any) => ReactNode
  verticalAppBarContent?: (props?: any) => ReactNode
  verticalNavMenuContent?: (props?: any) => ReactNode
  verticalNavMenuBranding?: (props?: any) => ReactNode
  afterVerticalNavMenuContent?: (props?: any) => ReactNode
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode
}

export type BlankLayoutProps = {
  children: ReactNode
}
