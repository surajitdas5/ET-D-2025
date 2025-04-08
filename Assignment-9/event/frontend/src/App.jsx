import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import Search from './pages/Search'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {path: "/", element: <Home />},
        {path: "/search", element: <Search />},
        {path: "/:id", element: <EventDetails />}
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
