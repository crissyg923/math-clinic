import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import App from './App';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePageEng from './pages/English/HomePage.jsx';
import Fractions from './pages/English/Fractions/index.jsx'
import Divide from './pages/English/Fractions/Divide/DivideFract.jsx';
import Exponents from  './pages/English/Exponents/index.jsx';
import Multiply from './pages/English/Fractions/Multiply/index.jsx';
import Home from './pages/Language.jsx';
import Creole from './pages/Creole/index.jsx';
import CreoleExponents from './pages/Creole/Exponents/index.jsx';
import CreoleFractions from './pages/Creole/Fractions/index.jsx';
import CreoleDivide from './pages/Creole/Fractions/Divide/DivideFract.jsx';
import CreoleMultiply from './pages/Creole/Fractions/Multiply/index.jsx';
import SpanishHome from './pages/Spanish/index.jsx';
import SpanishExponents from './pages/Spanish/Exponents/index.jsx';
import SpanishFractions from './pages/Spanish/Fractions/index.jsx';
import SpanishDivide from './pages/Spanish/Fractions/Divide/DivideFract.jsx';
import SpanishMultiply from './pages/Spanish/Fractions/Multiply/index.jsx';
import SpanishRegroup from './pages/Spanish/Fractions/Regrouping/index.jsx';


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
        element: <Home />
      },
      {
        path: 'english',
        element: <HomePageEng />,
      },
      {
        path: 'english/fractions',
        element: <Fractions />,
      },
      {
        path: 'english/fractions/divide',
        element: <Divide />,
      },
      {
        path: 'english/fractions/multiply',
        element: <Multiply />,
      },
      {
        path: 'english/exponents',
        element: <Exponents />,
      },
      {
        path:'creole',
        element: <Creole />
      },
      {
        path:'creole/fraksyon',
        element: <CreoleFractions />
      },
      {
        path:'creole/ekspozan',
        element: <CreoleExponents />
      },
      {
        path:'creole/fraksyon/divizefraksyon',
        element: <CreoleDivide />
      },
      {
        path:'creole/fraksyon/miltipliyefraksyon',
        element: <CreoleMultiply />
      },
      {
        path:'creole/fraksyon/miltipliyefraksyon',
        element: <CreoleMultiply />
      },
      {
        path:'espanol',
        element: <SpanishHome />
      },
      {
        path:'espanol/exponentes',
        element: <SpanishExponents />
      },
      {
        path:'espanol/fracciones',
        element: <SpanishFractions />
      },
      {
        path:'espanol/fracciones/dividirfracciones',
        element: <SpanishDivide />
      },
      {
        path:'espanol/fracciones/multiplicarfracciones',
        element: <SpanishMultiply />
      },
      {
        path:'espanol/fracciones/reaguparfracciones',
        element: <SpanishRegroup />
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <RouterProvider router={router} />
  </ChakraProvider>
);

