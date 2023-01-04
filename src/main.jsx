import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./routes/root";
import { ErrorPage } from "./error-page";

// 1 - A primeira coisa a se fazer é criar um browser router
// 2 - E depois criar nossa primeira rota
// 3 - Para criar uma rota é necessário:
//  3.1 - Informar o caminho que será acessada no browser.
//  3.2 - Informar o elemento/componente que será renderizado.
// 4 - Passar o RouterProvider para nossa aplicação, para que ele forneça as rotas configuradas para todos os componentes filhos.

// {1}
const router = createBrowserRouter([
  // {2}
  {
    // 3.1
    path: "/",
    // 3.2
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* {4} */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
