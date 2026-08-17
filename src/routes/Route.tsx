import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import HomeComp from "../pages/homepage/HomeComp";
import ContactLayout from "../layout/ContactLayout";
import ContactsComp from "../pages/contacts/ContactsComp";
import AboutLayout from "../layout/AboutLayout";
import AboutComp from "../pages/about/AboutComp";
import GetStarted from "../layout/GetStartedLayout";
import GetstartedComp from "../pages/getStarted/GetstartedComp";
import PropertieLayout from "../layout/PropertieLayout";
import PropertieComp from "../pages/properties/PropertieComp";

import LoginLayout from "../layout/LoginLayout";
import LogIn from "../pages/getStarted/LogIn";
import DashboadLayout from "../layout/DashboadLayout";
import Dashboad from "../pages/getStarted/Dashboad";
import MainPageLayout from "../layout/MainPageLayout";
import MainPageComp from "../pages/mainHome/MainPageComp";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeComp />,
      },
    ],
  },
  {
    path: "/contact",
    element: <ContactLayout />,
    children: [
      {
        index: true,
        element: <ContactsComp/>,
      },
    ],
  },

   {
    path: "/about",
    element: <AboutLayout />,
    children: [
      {
        index: true,
        element: <AboutComp/>,
      },
    ],
  },

  {
    path: "/getstarted",
    element: <GetStarted/>,
    children: [
      {
        index: true,
        element: <GetstartedComp/>,
      },
    ],
  },

  {
    path: "/properties",
    element: <PropertieLayout/>,
    children: [
      {
        index: true,
        element: <PropertieComp/>,
      },
    ],
  },



  {
    path: "/login",
    element: <LoginLayout/>,
    children: [
      {
        index: true,
        element: <LogIn/>,
      },
    ],
  },


  {
    path: "/dashboad",
    element: <DashboadLayout/>,
    children: [
      {
        index: true,
        element: <Dashboad/>,
      },
    ],
  },

  {
    path: "/mainpage",
    element: <MainPageLayout/>,
    children: [
      {
        index: true,
        element: <MainPageComp/>,
      },
    ],
  },




]);
