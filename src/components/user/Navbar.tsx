import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogOutIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { ModeToggle } from '../ModeToggle'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { useAuth } from '@/contexts/AuthContext'
import { LogoWithText } from '../Logo'

// FIXME: Update the links
// const navLinks = [
//   {
//     title: 'Home',
//     url: '/',
//   },
//   {
//     title: 'Routes Page',
//     url: '/routes',
//   },
// ]

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <header className='sticky top-0 z-50 w-full border-border/40 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center justify-between'>
        <div className='mr-4 flex'>
          <Link to='/' className='mr-4 flex items-center space-x-2 lg:mr-6'>
            <LogoWithText />
          </Link>
          {/* <nav className='flex items-center gap-4 text-sm lg:gap-6'>
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.url}
                className='text-foreground/60 transition-colors hover:text-foreground/80'
              >
                {link.title}
              </Link>
            ))}
          </nav> */}
        </div>
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <Button variant='outline' size='sm' onClick={logout}>
            <LogOutIcon strokeWidth={1.75} className='mr-1 size-4' />
            Logout
          </Button>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='relative size-8 rounded-full'>
                <Avatar className='size-8'>
                  <AvatarImage src={user?.profile_img || 'https://github.com/shadcn.png'} />
                  <AvatarFallback>
                    {user?.fullname
                      ?.split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuLabel className='font-normal'>
                <div className='flex flex-col space-y-1'>
                  <p className='text-sm font-medium leading-none'>{user?.fullname}</p>
                  <p className='text-xs leading-none text-muted-foreground'>{user?.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
