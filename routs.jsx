import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./src/home/Home";
import Member from "./src/components/Member";
import Ml from "./src/components/Ml";
import Wl from "./src/components/Wl";
import Fdr from "./src/components/Fdr";
import Dps from "./src/components/Dps";
import Income from "./src/components/Income";
import Expense from "./src/components/Expense";
import WeeklyAc from "./src/components/WeeklyAc";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path:"/",
            element: <>Hello world</> 
        },
        {
            path: "/member",
            element:<Member></Member>
        },
        {
            path: "/ml",
            element: <Ml></Ml>
        },
        {
            path: "/wl",
            element: <Wl></Wl>
        },
        {
            path:"/fdr",
            element: <Fdr></Fdr>
        },
        {
            path:"/dps",
            element:<Dps></Dps>
        },
        {
            path: "wc",
            element:<WeeklyAc></WeeklyAc>
        },
        {
            path:"/income",
            element: <Income></Income>
        },
        {
            path:"/expense",
            element:<Expense></Expense>
        }
      ]
    },
  ]);


  export default router;