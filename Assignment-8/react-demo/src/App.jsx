import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './app.css'
import First from "./pages/First";
import Second from "./pages/Second";
import Calculator from "./pages/Calculator";
import ApiCall from "./pages/ApiCall";
import ApicallTwo from "./pages/ApicallTwo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Sms from "./pages/Sms";


function App(){
  // const router = createBrowserRouter([
  //   {path: "/", element: <First /> },
  //   {path: "/second", element: <Second /> },
  //   {path: "/calc", element: <Calculator /> },
  //   {path: "/api", element: <ApiCall /> },
  //   {path: "/api2", element: <ApicallTwo /> },
  // ])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {path: "/", element: <First /> },
        {path: "/second", element: <Second /> },
        {path: "/calc", element: <Calculator /> },
        {path: "/api", element: <ApiCall /> },
        {path: "/api2", element: <ApicallTwo /> },
        {path: "/sms", element: <Sms /> },
      ]
    }
  ])

  return <RouterProvider router={router} />

  // return (
  //   <>
  //  {/* <First /> */}
  //   {/* <Second /> */}
  //   {/* <Second />
  //   <Second /> */}

  //   {/* <Calculator /> */}
  //   {/* <ApiCall /> */}
  //   <ApicallTwo />
  //   </>
  // )  
}


export default App