import type { NavLinkType } from './Nav'

import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Send,
  ShoppingCart,
  SparkleIcon,
  Trash2,
  Users2,
} from 'lucide-react'

import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { cn } from '@/lib/utils'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'

const navLinks: NavLinkType[] = [
  {
    title: 'courses',
    label: '128',
    icon: Inbox,
    variant: 'default',
  },
  {
    title: 'Top Rated',
    label: '9',
    icon: File,
    variant: 'ghost',
  },
  {
    title: 'Average',
    label: '',
    icon: Send,
    variant: 'ghost',
  },
  {
    title: 'Below Average',
    label: '23',
    icon: ArchiveX,
    variant: 'ghost',
  },
  {
    title: 'Highest access',
    label: '5690',
    icon: Trash2,
    variant: 'ghost',
  },
  {
    title: 'Referral',
    label: '',
    icon: Archive,
    variant: 'ghost',
  },
]

const navLinks2: NavLinkType[] = [
  {
    title: 'Social',
    label: '972',
    icon: Users2,
    variant: 'ghost',
  },
  {
    title: 'Updates',
    label: '342',
    icon: AlertCircle,
    variant: 'ghost',
  },
  {
    title: 'Forums',
    label: '128',
    icon: MessagesSquare,
    variant: 'ghost',
  },
  {
    title: 'Contacts',
    label: '8',
    icon: ShoppingCart,
    variant: 'ghost',
  },
  {
    title: 'Promotions',
    label: '21',
    icon: Archive,
    variant: 'ghost',
  },
]

type SidebarProps = {
  isCollapsed: boolean
}

export function Sidebar({ isCollapsed }: SidebarProps) {
  return (
    <div>
      <div
        className={cn(
          'flex h-[52px] items-center justify-center',
          isCollapsed ? 'h-[52px]' : 'px-2',
        )}
      >
        <Link to='/' className={`${!isCollapsed && 'w-full'}`}>
          {isCollapsed ? (
            <Button variant='outline' size='icon'>
              <SparkleIcon className='size-4 fill-inherit' />
            </Button>
          ) : (
            <Button variant='outline' size='sm' className='w-full justify-start'>
              <SparkleIcon className='size-4 fill-inherit' />
              <span className='ml-2'>CollegePro</span>
            </Button>
          )}
        </Link>
      </div>
      <Separator />
      <Nav isCollapsed={isCollapsed} links={navLinks} />
      <Separator />
      <Nav isCollapsed={isCollapsed} links={navLinks2} />
    </div>
  )
}

Sidebar.displayName = 'Sidebar'
