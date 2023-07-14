import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from './pages/Home';
import Page_1 from "./pages/Page_1";
import Page_2 from "./pages/Page_2";
import Page_3 from "./pages/Page_3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "home",
        element: <Home/>
      },
      {
        path: "page_1",
        element: <Page_1/>
      },
      {
        path: "page_2",
        element: <Page_2/>
      },
      {
        path:"page_3",
        element:<Page_3/>
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);

const query = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
