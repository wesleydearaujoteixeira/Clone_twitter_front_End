import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './auth/login/Login.tsx';
import Register from './auth/register/Register.tsx';
import { Layout } from './components/home/Layout.tsx';
import { Home } from './components/home/Home.tsx';
//import { Layout } from './components/home/Layout';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        { path: '/', element: <Login />, errorElement: <div> Erro na rota </div> },
        { path:'register', element: <Register /> },
        { path:'/layout', element: <Layout/>},
        { path: '/home',element: <Home/> }
      ]
    }
    ,

    
  // Add more routes here
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App />
  </StrictMode>,
)
