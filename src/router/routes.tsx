import { createBrowserRouter, redirect } from 'react-router-dom'

import { MainLayout } from '@/layouts'
import { Home } from '@/pages'

import { path } from './path'

export const router = createBrowserRouter([
  {
    path: path.root,
    element: <MainLayout />,
    loader: ({ params }) => {
      if (params?.invitationId !== 'thoan' && params?.invitationId !== 'thinh') {
        return redirect('/thoan')
      }
      return null
    },
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
