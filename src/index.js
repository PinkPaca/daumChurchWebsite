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
import Weekly from './pages/community/Weekly';
import Join from './pages/community/Join';
import Counsel from './pages/community/Counsel';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Sermon from './pages/daumTV/Sermon';
import Worship from './pages/daumTV/Worship';
import Videos from './pages/daumTV/Videos';
import Album from './pages/daumTV/Album';
import News from './pages/daumTV/News';
import Broadcast from './pages/daumTV/Broadcast';
import MissionTrip from './pages/ministry/MissionTrip';
import ChildrenSchool from './pages/ministry/ChildrenSchool';
import VisionTrip from './pages/ministry/VisionTrip';

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
  {
    path: '/community/weekly',
    element: <Weekly />,
  },
  {
    path: '/community/join',
    element: <Join />,
  },
  {
    path: '/community/counsel',
    element: <Counsel />,
  },
  {
    path: '/daumTV/sermon',
    element: <Sermon />,
  },
  {
    path: '/daumTV/worship',
    element: <Worship />,
  },
  {
    path: '/daumTV/videos',
    element: <Videos />,
  },
  {
    path: '/daumTV/album',
    element: <Album />,
  },
  {
    path: '/daumTV/broadcasting',
    element: <Broadcast />,
  },
  {
    path: '/daumTV/news',
    element: <News />,
  },
  {
    path: '/ministry/mission-trip',
    element: <MissionTrip />,
  },
  {
    path: '/ministry/children',
    element: <ChildrenSchool />,
  },
  {
    path: '/ministry/vision-trip',
    element: <VisionTrip />,
  },
  {
    path: '/log-in',
    element: <LogIn />,
  },
  {
    path: '/register',
    element: <Register />,
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
