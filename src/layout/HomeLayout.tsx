import { Outlet } from "react-router-dom"
import Header from "../componets/block/Header"
import Footer from "../componets/block/Footer"


const HomeLayout = () => {
  return (
    <div>
     <Header/>
         <Outlet/>
         <Footer/>
    </div>
  )
}

export default HomeLayout