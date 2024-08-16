import React from 'react'
import RedirectPage from '@/components/RedirectPage'

import { RouteObject } from 'react-router-dom'

export const userRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    Component: React.lazy(() => import('@/pages/user/UserDashboard')),
  },
  {
    path: '/user',
    element: <RedirectPage to='/dashboard' />,
  },
  {
    path: '/courses',
    Component: React.lazy(() => import('@/pages/user/UserCoursePage')),
  },
  {
    path: '/hackathons',
    Component: React.lazy(() => import('@/pages/user/HackathonPage')),
  },
  {
    path: '/profile',
    Component: React.lazy(() => import('@/pages/user/UserProfile')),
  },
  {
    path: '/coding/:id',
    Component: React.lazy(() => import('@/pages/user/coding')),
  },
  {
    path: '/project/:id',
    Component: React.lazy(() => import('@/pages/user/project')),
  },
  // {
  //   path: '/lab-smith',
  //   Component: React.lazy(() => import('@/pages/user/lab-smith')),
  // },
  {
    path: '/resume',
    Component: React.lazy(() => import('@/pages/user/ResumeAnalysis')),
  },
  {
    path: '/take-test',
    Component: React.lazy(() => import('@/pages/user/TakeTest')),
  },
]
