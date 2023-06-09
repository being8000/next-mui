
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItemButton, Collapse } from '@mui/material';
import VerticalNavLink from '../vertical/navigation/VerticalNavLink';
import { useState } from 'react';
import { SidbarProps } from '.';
import { NavLinkItem } from '@/navigation/vertical';
import SidebarItem from './sidebar-item';
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
  leve: number
}) {
  const [open, setOpen] = useState<boolean>(false)
  const handleClick = () => {
    setOpen(!open);
  };
  const children = () => {
    const children = router.children || []
    return children?.length > 0 ? nestedSidbar(props, children, level + 1) : null
  }
  return <div >
    <ListItemButton sx={{ p: 0 }} onClick={handleClick}>
      <VerticalNavLink {...props} item={router} />
      {(router.children || []).length > 0 ? (open ? <ExpandLess /> : <ExpandMore />) : null}
    </ListItemButton>

    <Collapse in={open} timeout="auto" unmountOnExit>
      {children()}
    </Collapse>
  </div>
}  