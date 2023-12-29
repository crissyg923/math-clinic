import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import App from './App';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage';
import Fractions from './pages/Fractions'

import { ChakraProvider } from '@chakra-ui/react'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'fractions',
        element: <Fractions />,
      },
      // {
      //   path: 'contact',
      //   element: <ContactPage />,
      // },
      // {
      //   path: 'aboutme',
      //   element: <AboutMe />,
      // },
      // {
      //   path: 'portfolio',
      //   element: <PortfolioPage data={data}/>,
      // },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <RouterProvider router={router} />
  </ChakraProvider>
);

