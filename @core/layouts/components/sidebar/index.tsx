import { List, ListItem, Link } from '@mui/material';
import navigation, { NavLinkItem } from '@/router';
import SidebarItem from './sidebar-item'
import { Settings } from '@/@core/context/settingsContext'



export interface SidbarProps {
  settings: Settings
  navVisible?: boolean
  groupActive: string[]
  currentActiveGroup: string[]
  saveSettings: (values: Settings) => void
  toggleNavVisibility: () => void
  setGroupActive: (value: string[]) => void
  setCurrentActiveGroup: (item: string[]) => void
  verticalNavItems: NavLinkItem[]
  level?: number
}
export default function Sidebar(props: SidbarProps) {
  const routers = props.verticalNavItems as NavLinkItem[]
  return <SidebarItem {...props} level={1} />
}