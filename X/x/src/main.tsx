import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './auth/login/Login.tsx';
import Register from './auth/register/Register.tsx';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        { path: 'login', element: <Login /> },
        { path:'register', element: <Register /> }
      ]
    }
  // Add more routes here
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App />
  </StrictMode>,
)
