// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, } from "../componets"
import Mainheader from "../componets/block/Mainheader"

const MainPageLayout = () => {
  return (
    <div>
<Mainheader/>  
<Outlet/>
<Footer/>
    </div>
  )
}

export default MainPageLayout