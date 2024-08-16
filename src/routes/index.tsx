import React from 'react'

import { createBrowserRouter } from 'react-router-dom'

// Routes
import { userRoutes } from './user'
import { adminRoutes } from './admin'

// Layouts
import AdminLayout from '@/layouts/AdminLayout'
import AuthLayout from '@/layouts/AuthLayout'
import RootLayout from '@/layouts/RootLayout'
import UserLayout from '@/layouts/UserLayout'

// Pages
import Logout from '@/pages/auth/Logout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        Component: React.lazy(() => import('@/pages/landing-page')),
      },
      {
        path: '/routes',
        Component: React.lazy(() => import('@/pages/RoutesPage')),
      },
      {
        path: '/',
        element: <AuthLayout />,
        children: [
          {
            path: '/auth/login',
            Component: React.lazy(() => import('@/pages/auth/Login')),
          },
          {
            path: '/auth/register',
            Component: React.lazy(() => import('@/pages/auth/Register')),
          },

          /* Protected routes */

          {
            path: '/',
            element: <UserLayout />,
            children: userRoutes,
          },
          {
            path: '/admin',
            element: <AdminLayout />,
            children: adminRoutes,
          },
        ],
      },
    ],
  },
  {
    // You can logout even if you are not connected to the internet
    path: '/logout',
    element: <Logout />,
  },
])

export default router
