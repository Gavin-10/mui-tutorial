import Home from './pages/Home.jsx'
import Tour from './pages/Tour.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyAppBar from './components/AppBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyAppBar />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/:id",
        element: <Tour />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
