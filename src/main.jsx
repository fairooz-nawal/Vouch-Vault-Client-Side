import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import router from './route/AllRoute.jsx';
import ContextAPI from './components/ContextAPI.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextAPI>
      <RouterProvider router={router} />
    </ContextAPI>
  </StrictMode>,
)
