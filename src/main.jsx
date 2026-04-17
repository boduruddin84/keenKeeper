import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router'
import ClickedFriendProvider from './context/ClickedFriendProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickedFriendProvider>
      <RouterProvider router={router} />
    </ClickedFriendProvider>
  </StrictMode>,
)
