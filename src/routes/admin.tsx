import RedirectPage from '@/components/RedirectPage'
import AdminCoursePage from '@/pages/admin/AdminCoursePage'
import ConductTest from '@/pages/admin/ConductTest'
import React from 'react'
import type { RouteObject } from 'react-router-dom'
import AddQuestions from '../pages/admin/AddQuestions'
import AiQuizGenerator from '@/pages/admin/AiQuizGenerator'
import AddCourses from '@/pages/admin/AddCourses'

export const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: <RedirectPage to='/admin/dashboard' />,
  },
  {
    path: '/admin/dashboard',
    Component: React.lazy(() => import('../pages/admin/AdminDashboard')),
  },
  {
    path: '/admin/courses',
    element: <AdminCoursePage />,
  },
  {
    path: '/admin/courses/add',
    element: <AddCourses />,
  },
  {
    path: '/admin/conduct-test',
    element: <ConductTest />,
  },
  {
    path: '/admin/add-questions',
    element: <AddQuestions />,
  },
  {
    path: '/admin/ai-generated-quiz',
    element: <AiQuizGenerator />,
  },
]
