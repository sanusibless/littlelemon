import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReservationPage from './pages/ReservationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div> Oops! Not Found </div>
  },
  {
    path: '/booking',
    element: <ReservationPage />
  },
  {
    path: '/menus',
    element: <MenusPage />
  },
  {
    path: '/contact-us',
    element: <ContactPage />
  },
  {
    path: '/faqs',
    element: <FAQsPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
