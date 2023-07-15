import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import router from './routers/router.tsx';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
