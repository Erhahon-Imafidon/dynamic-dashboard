import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Login from "./pages/Login";

function App() {
  const Layout = () => {
    return (
      <main className="font-inter bg-main-bg text-main-color">
        <Navbar />
        {/* Main Container */}
        <section className="flex">
          {/* MenuContainer Or Sidebar Container */}
          <div className="w-[250px] p-[4px] px-5 border-r-2 border-soft-bg">
            <Menu />
          </div>
          {/* ContentContainer */}
          <div className="p-[5px] px-5 w-full">
            <Outlet />
          </div>
        </section>
        <Footer />
      </main>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "users",
          element: <Users />,
        },

        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
