import { NavLinkItem } from '@/router';
import { List, } from '@mui/material';
// ** Types Import
import { SidbarProps } from '.';
import Item from './item';


export default function SidebarItem(props: SidbarProps) {
  const { verticalNavItems, level } = props
  if (verticalNavItems?.length <= 0) {
    return <></>
  }
  const ListItems = verticalNavItems?.map((router: NavLinkItem, index) => {
    return <Item key={index} router={router} level={level || 0 + 1} props={props} />
  })

  return <List component="nav" aria-label="mailbox folders">
    {ListItems}
  </List>;

}