import React, {lazy, Suspense} from 'react';
import ReactDOM  from 'react-dom/client';
import Header from "./src/Header.js";
import Body from "./src/Body.js";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './src/About.js';
import Contact from './src/Contact.js';
import RestaurantMenu from './src/RestaurantMenu.js';
import Footer from "./src/Footer.js";
import { useOnlineStatus } from "./utils/useOnlineStatus.js";


const About = lazy(() => import("./src/About.js")); 
const AppLayout = () => {
    const isOnline = useOnlineStatus();

    if(isOnline == false){
      return <h2>Please check your internet connectivity </h2>;
    }

    return (
      <div className="container">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    )
  };

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        // errorElement: <ErrorPage />,
        children: [
          {
            path : "/",
            element : <Body/>,
          },
          {
            path : "/about",
            element : <Suspense><About/></Suspense>,
          },
          {
            path : "/contact",
            element : <Contact/>,
          },
          {
            path : "/restaurants/:resId",
            element : <RestaurantMenu/>,
          },
        ],
    },
    
]);
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    < AppLayout />
  </RouterProvider>);