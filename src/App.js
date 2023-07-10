import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// imports 
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Single from "./Pages/Single";
import Write from "./Pages/Write";
import Home from "./Pages/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";


const Layout = () =>{
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
};

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/post/:id",
        element: <Single />
      },
      {
        path:"/write",
        element: <Write />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


function App() {
  return (
    <div className="app">
      <div className="">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
