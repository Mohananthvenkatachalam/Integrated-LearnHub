import * as React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Sidebar } from '@/components/admin/Sidebar'
import { CircularSpinner } from '@/components/ui/spinner'
import { useAuth } from '@/contexts/AuthContext'
import { toast } from 'sonner'
import Navbar from '@/components/admin/Navbar'

const AdminLayout = () => {
  const { isAuthenticated, isAdmin } = useAuth()
  const pathname = window.location.pathname
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!isAuthenticated) {
      return navigate('/auth/login?redirect=' + pathname + '#admin', { replace: true })
    }

    if (!isAdmin) {
      toast.error('You are not authorized to access the Admin page')
      navigate('/user')
    }
  }, [isAuthenticated, isAdmin])

  if (!isAuthenticated) {
    return null
  }

  const { defaultCollapsed, defaultLayout, navCollapsedSize } = React.useMemo(() => {
    const layout = localStorage.getItem('react-resizable-panels:layout')
    const collapsed = localStorage.getItem('react-resizable-panels:collapsed')

    const defaultLayout = layout ? JSON.parse(layout) : undefined
    const defaultCollapsed = collapsed ? collapsed === 'true' : undefined

    return {
      defaultLayout: defaultLayout ?? [20, 80],
      defaultCollapsed: defaultCollapsed ?? false,
      navCollapsedSize: 4,
    }
  }, [])

  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction='horizontal'
        className='max-h-screen min-h-screen items-stretch'
        onLayout={(sizes) => {
          localStorage.setItem('react-resizable-panels:layout', JSON.stringify(sizes))
        }}
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            localStorage.setItem('react-resizable-panels:collapsed', String(true))
          }}
          onExpand={() => {
            setIsCollapsed(false)
            localStorage.setItem('react-resizable-panels:collapsed', String(false))
          }}
          className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
        >
          <Sidebar isCollapsed={isCollapsed} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          {/* Change the bg color of the dashboard from here */}
          <div className='relative h-full max-w-full overflow-y-auto bg-gray-50 dark:bg-neutral-950'>
            <React.Suspense
              fallback={
                <div className='grid h-full w-full place-items-center'>
                  <CircularSpinner size='xl' />
                </div>
              }
            >
              <Navbar />
              <Outlet /> {/* This is where the child routes will be rendered */}
            </React.Suspense>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}

export default AdminLayout
