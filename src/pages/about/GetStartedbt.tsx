// import React from 'react'

import { NavLink } from "react-router-dom"

const GetStartedbt = () => {
  return (
    <div className="outer-container ">
        <div className="inner-container flex justify-center items-center">
            <div className=" bg-linear-to-r from-[#b6c245] to-[#e88a6d] flex flex-col gap-3 justify-center items-center h-65 w-220 mb-10 rounded-3xl">
                <h2 className=" font-extrabold text-[35px]">Build Your Future with Nexa Homes</h2>
                <p className="w-120 text-center text-[20px] text-[#ffffff]">Take the next step toward homeownership or property investment with reliable support and personalized solutions.</p>
                <div className=" flex gap-7">
                   <NavLink to="/dasboad" className=" w-35 h-12 bg-linear-to-r from-[#c29345] to-[#0f172a]  flex justify-center items-center text-[20px] text-[#ffffff] font-bold rounded-sm">Buy</NavLink>

                   <NavLink to="/" className=" w-35 h-12 bg-linear-to-r from-[#c29345] to-[#221501]  flex justify-center items-center text-[20px] text-[#ffffff] font-bold rounded-sm">Rent</NavLink>
                </div>

            </div>

        </div>

    </div>
  )
}

export default GetStartedbt