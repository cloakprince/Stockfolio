// src/routes.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Register';
import About from './pages/AboutPage';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Services from './pages/Services';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/stockfolio',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}