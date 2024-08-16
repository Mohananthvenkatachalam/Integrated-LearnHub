import * as React from 'react'
import { Link } from 'react-router-dom'

type NavLink = {
  title: string
} & (
  | {
      href: string
      children?: never
    }
  | {
      href?: never
      children: NavLink[]
    }
)

const links: NavLink[] = [
  {
    title: 'Landing Page',
    href: '/',
  },
  {
    title: 'Routes Page',
    href: '/routes',
  },
  {
    title: 'Login Page',
    href: '/auth/login',
  },
  {
    title: 'Register Page',
    href: '/auth/register',
  },
  {
    title: 'Admin Dashboard',
    children: [
      {
        title: 'Dashboard',
        href: '/admin/dashboard',
      },
    ],
  },
  {
    title: 'User Dashboard',
    children: [
      {
        title: 'Dashboard',
        href: '/dashboard',
      },
    ],
  },
]

const RoutesPage = () => {
  const [listDropdown, setListDropdown] = React.useState(
    JSON.parse(localStorage.getItem('home-route-list-dropdown') ?? '{}'),
  )

  function toggleDropdown(index: number) {
    const listDropdown2 = { ...listDropdown, [index]: !listDropdown[index] }
    localStorage.setItem('home-route-list-dropdown', JSON.stringify(listDropdown2))
    setListDropdown(listDropdown2)
  }

  return (
    <div className='container relative max-w-screen-2xl py-12'>
      <h1 className='mb-3 text-4xl font-bold text-primary'>
        Welcome to <span className='text-orange-500'>CollegePro</span> Links Page
      </h1>

      <p className='w-1/2'>
        If you create a new route, you can add here for easy access. You can also add a link to the
        sidebar.
      </p>

      <ul className='mt-6 pl-4' style={{ listStyleType: 'disclosure-closed' }}>
        {links.map((link, index) => (
          <li
            key={index}
            className='mb-2'
            style={{
              listStyleType: link.children && listDropdown[index] && 'disclosure-open',
            }}
          >
            {link.children ? (
              <>
                <p
                  className='cursor-pointer font-medium'
                  onClick={() => link.children && toggleDropdown(index)}
                >
                  {link.title}
                </p>
                <ul
                  className='pl-4'
                  style={{
                    listStyleType: 'circle',
                    display: listDropdown[index] ? 'block' : 'none',
                  }}
                >
                  {link.children.map((child, index) => (
                    <li key={index} className='mt-2'>
                      <Link to={child.href!} className='text-orange-500 hover:text-orange-600'>
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={link.href} className='text-orange-500 hover:text-orange-600'>
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RoutesPage
