import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/components/ThemeProvider.jsx'
import { Provider as ReactReduxProvider } from 'react-redux'

import { Toaster } from '@/components/ui/sonner.jsx'
import { store } from '@/app/store'

import router from '@/routes'

const App = () => {
  return (
    <ReactReduxProvider store={store}>
      <ThemeProvider //
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
      >
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </ReactReduxProvider>
  )
}

export default App
