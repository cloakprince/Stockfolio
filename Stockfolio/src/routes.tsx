// src/routes.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'services',
    element: <Services />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}