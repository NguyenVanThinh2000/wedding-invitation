import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/router'

import { AppContextProvider } from './providers/AppContextProviders'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </HelmetProvider>,
)
