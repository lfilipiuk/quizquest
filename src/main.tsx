import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import { DeckQuestions } from "./components/deck/DeckQuestions";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Game from "./components/game/Game";
import DeckSelector from "./components/deck/DeckSelector";
import HomePage from "./components/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "deck",
        element: <DeckSelector />,
        children: [
          {
            path: ":deckId",
            element: <DeckQuestions />,
          },
        ]
      },
      {
        path: "learning/:deckId",
        element: <Game />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
