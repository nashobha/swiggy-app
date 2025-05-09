import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart";

const About = lazy(()=> import("./components/About"))
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const[userName, setUserName] = useState();

  useEffect(()=>{
    const data = {name :"Shobha N A"};
    setUserName(data.name);
  },[]);

  return (
    // <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
    //   <div className="app">
    //       <Header />
    //     <Outlet />
    //   </div>
    // </UserContext.Provider>

    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
    <div className="app">
        <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h3>loading...</h3>}>
            <Grocery />
          </Suspense>
        )
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path : "/cart",
        element : <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
