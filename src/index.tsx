import 'tailwindcss/tailwind.css';
import { createRoot } from 'react-dom/client'
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from 'components/App';
import { CourseCatalog } from 'pages/coursesCatalog';
import { Questions } from 'pages/questions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/courses",
    element: <CourseCatalog/>
  },
  {
    path: "/questions",
    element: <Questions/>
  }
]);

const container = document.getElementById('root') as HTMLDivElement
createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);