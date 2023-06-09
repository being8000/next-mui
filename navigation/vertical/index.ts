// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { VerticalNavItemsType } from '@/@core/layouts/types'
import { SvgIconTypeMap } from '@mui/material'
import { ReactNode } from 'react'

// ** Type import
export type NavLinkItem = {
  path?: string
  title: string
  openInNewTab?: boolean
  icon?: ReactNode | OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
  action?: string
  subject?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  isSection?: boolean
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  children?: NavLinkItem[]
}

const navigation = (): NavLinkItem[] => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      openInNewTab: true,
      children: [
        {
          title: 'child-register',
          icon: AccountPlusOutline,
          path: '/pages/register',
          openInNewTab: true
        },
        {
          title: 'child-2',
          icon: AlertCircleOutline,
          path: '/pages/error',
          openInNewTab: true
        },
      ]
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      title: 'User Interface',
      icon: AlertCircleOutline,
      children: [
        {
          title: 'Typography',
          icon: FormatLetterCase,
          path: '/typography'
        },
        {
          title: 'Icons',
          path: '/icons',
          icon: GoogleCirclesExtended
        },
        {
          title: 'Cards',
          icon: CreditCardOutline,
          children: [
            {
              title: 'third-1',
              icon: Table,
              path: '/third-1'
            },
            {
              icon: CubeOutline,
              title: 'third-2',
              path: '/third-1'
            }
          ]
        },
        {
          title: 'Tables',
          icon: Table,
          path: '/tables'
        },
        {
          icon: CubeOutline,
          title: 'Form Layouts',
          path: '/form-layouts'
        }
      ]
    }
  ]
}

export default navigation
