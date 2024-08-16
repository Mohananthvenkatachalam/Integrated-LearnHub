import React from 'react'

import { LogoWithText } from '@/components/Logo'
import { Link } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'

const links = [
  {
    title: 'Features',
    url: '#features',
  },
  {
    title: 'Integrations',
    url: '#integrations',
  },
  {
    title: 'About us',
    url: '#teams',
  },
]

const HeroSection: React.FC = () => {
  return (
    <section>
      <div className='overflow-x-hidden bg-gray-50'>
        <header className='py-4 md:py-6'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between'>
              <div className='flex-shrink-0'>
                <Link to='#' className='flex rounded outline-none'>
                  <LogoWithText className='text-xl text-neutral-950' logoClassName='size-8' />
                </Link>
              </div>

              <div className='flex lg:hidden'>
                <button type='button' className='text-gray-900'>
                  <MenuIcon className='size-7' />
                </button>
              </div>

              <div className='hidden lg:ml-16 lg:flex lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16'>
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className='rounded text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              <div className='hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10'>
                <Link
                  to='/auth/login'
                  className='rounded text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
                >
                  Login
                </Link>

                <Link
                  to='/auth/register'
                  className='inline-flex items-center justify-center rounded-xl border border-transparent bg-gray-900 px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
                  role='button'
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className='bg-gray-50 pt-12 sm:pt-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='font-inter px-6 text-lg text-gray-600'>
                Smart learning center made for Developers and Students
              </h1>
              <p className='mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight'>
                Empower Your Education Via
                <span className='relative inline-flex sm:inline'>
                  <span className='absolute inset-0 h-full w-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-30 blur-lg filter'></span>
                  <span className='relative'> Learning</span>
                </span>
              </p>

              <div className='mt-9 px-8 sm:flex sm:items-center sm:justify-center sm:space-x-5 sm:px-0'>
                <Link
                  to='/auth/register#admin'
                  className='inline-flex w-full items-center justify-center rounded-xl border-2 border-transparent bg-gray-900 px-8 py-3 text-lg font-bold text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:w-auto'
                  role='button'
                >
                  Boost your Knowledge
                </Link>

                <Link
                  to='#'
                  className='mt-4 inline-flex w-full items-center justify-center rounded-xl border-2 border-gray-400 px-6 py-3 text-lg font-bold text-gray-900 transition-all duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:border-gray-900 focus:bg-gray-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:mt-0 sm:w-auto'
                  role='button'
                >
                  <svg
                    className='mr-2 h-5 w-5'
                    viewBox='0 0 18 18'
                    fill='none'
                    stroke='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z'
                      strokeWidth='2'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  Watch demo
                </Link>
              </div>

              <p className='font-inter mt-8 text-base text-gray-500'>
                Expand Your Mind, No Cost Required...
              </p>
            </div>
          </div>

          <div className='bg-white pb-12'>
            <div className='relative'>
              <div className='absolute inset-0 h-2/3 bg-gray-50'></div>
              <div className='relative mx-auto'>
                <div className='lg:mx-auto lg:max-w-6xl'>
                  <img
                    className='scale-110 transform'
                    src='https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default HeroSection
