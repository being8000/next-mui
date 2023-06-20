
import { ReactNode } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, ListItemButton, ListItemIcon, Collapse, ListItemText } from '@mui/material';
import { useState } from 'react';
import { SidbarProps } from '.';
import { NavLinkItem } from '@/router';
import SidebarItem from './sidebar-item';
// ** Custom Components Imports
import UserIcon from '@/layouts/components/UserIcon'
import { useRouter } from 'next/router'

const nestedSidbar = function (props: SidbarProps, children: NavLinkItem[], level: number) {
  return <>
    <SidebarItem {...props} verticalNavItems={children} level={level} />
  </>
}

export default function Item({
  router,
  props,
  level
}: {
  router: NavLinkItem,
  props: SidbarProps,
  level: number
}) {
  const _router = useRouter()
  const IconTag: ReactNode = router.icon as ReactNode

  const [open, setOpen] = useState<boolean>(false)
  const handleClick = () => {
    console.log(router.path)
    if (router.path && !router.children?.length) {
      _router.push(router.path)
    }

    setOpen(!open);
  }

  const children = () => {
    const children = router.children || []
    return children?.length > 0 ? nestedSidbar(props, children, level + 1) : null
  }
  return <>
    <ListItemButton sx={{
      '&.Mui-selected': {
        borderRadius: 5
      }
    }}
      selected={open}
      onClick={handleClick}
    >
      {/* <VerticalNavLink {...props} item={router} /> */}
      <ListItemIcon
        sx={{
          mr: 2.5,
          color: 'text.primary',
          transition: 'margin .25s ease-in-out'
        }}
      >
        <UserIcon icon={IconTag} />
      </ListItemIcon>
      <ListItemText primary={router.title} />
      {(router.children || []).length > 0 ? (open ? <ExpandLess /> : <ExpandMore />) : null}
    </ListItemButton>

    <Collapse in={open} timeout="auto" unmountOnExit>
      {children()}
    </Collapse>
  </>

}  