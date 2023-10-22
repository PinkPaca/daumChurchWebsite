import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/Error';
import Greeting from './pages/about/Greeting';
import Services from './pages/about/Services';
import History from './pages/about/History';
import MapToChurch from './pages/about/MapToChurch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about/greeting',
    element: <Greeting />,
  },
  {
    path: '/about/services',
    element: <Services />,
  },
  {
    path: '/about/history',
    element: <History />,
  },
  {
    path: '/about/map',
    element: <MapToChurch />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
