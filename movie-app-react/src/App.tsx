import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './layouts/Login';
import Movie from './layouts/Movie';
import Movies from './layouts/Movies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/movies",
    element: <Movies></Movies>
  },
  {
    path: "/movies/:id",
    element: <Movie></Movie>
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
