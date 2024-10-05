import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/layouts'
import { Home } from '@/pages'

import { path } from './path'

export const router = createBrowserRouter([
  {
    path: path.root,
    element: <MainLayout />,
    children: [
      {
        path: path.invitation,
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <div>404 not found</div>,
  },
])
