import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/HomePage';
import ReservationPage from '../pages/ReservationPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import Page404 from '../pages/Page404';

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <Page404 />
    },
    {
      path: '/booking',
      element: <ReservationPage />
    },
    {
      path: '/contact-us',
      element: <ContactPage />
    },/*
    {
      path: '/menus',
      element: <MenusPage />
    },
    {
      path: '/faqs',
      element: <FAQsPage />
    },
    */
    {
      path: '/login',
      element: <LoginPage />
    }
  
  ]);

  export default router