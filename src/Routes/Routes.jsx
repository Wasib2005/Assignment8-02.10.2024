import { createBrowserRouter } from "react-router-dom";
import FirstPage from "../Pages/FirstPage";
import Home from "../Pages/Home";

import Books from "../Pages/Books";
import BookDetails from "../Pages/BookDetails";
import ErrorElement from "../Pages/ErrorElement";
import PagesToRead from "../Pages/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/listed_books",
        element: <Books />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/pages_to_read",
        element: <PagesToRead />,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);
