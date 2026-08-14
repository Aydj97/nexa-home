// import React from 'react';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaLocationDot,
  FaMagnifyingGlass,
  FaArrowRight,
} from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BiBuildingHouse } from "react-icons/bi";

import p1 from "../../assets/dillon-kydd-2keCPb73aQY-unsplash.jpg";
import p2 from "../../assets/elite-prop-hmlP-v0vJ5o-unsplash.jpg";
import p3 from "../../assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg";
import p4 from "../../assets/lotus-design-n-print-wRzBarqn3hs-unsplash.jpg";

const Hero = () => {
  // const stats = [
  //   { number: "500+", label: "Properties" },
  //   { number: "50+", label: "Agents" },
  //   { number: "1000+", label: "Happy Clients" },
  //   { number: "95%", label: "Satisfaction" },
  // ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="absolute inset-0 w-full h-full"
      >
        {[p1, p2, p3, p4].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center w-full h-full  lg:-top-143 -top-167 ">
        <div className="inner-container px-4 md:px-6 lg:px-8 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center flex flex-col lg:gap-4 gap-1.5"
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block mb-6 px-4 py-1.5 bg-[#c29345]/20 backdrop-blur-sm border border-[#c29345]/30 rounded-full"
            >
              <span className="text-[#c29345] text-xs md:text-sm font-semibold tracking-wider">
                🏆 Nigeria's #1 Property Platform
              </span>
            </motion.div> */}

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ }}
              className="text-[24px] md:text- lg:text-[57px]  font-bold leading-tight "
            >
              <span className="text-white">Your Gateway to</span>
              <br />
              <span className="text-[#c29345] inline-block min-h-10 md:min-h-14">
                <Typewriter
                  words={[
                   
                    "Dream Properties!",
                    "Investment Growth!",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/90 text-sm sm:text-base md:text-[1px] lg:text-xl max-w-2xl mx-auto mb- px-4 text-[24px]"
            >
              Nigeria's Leading and Fastest Growing Platform for Property
              Rentals, Buying, and Selling  
            </motion.p>

            {/* Search Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 mb- shadow-2xl border border-white/10"
            >
              <div className="flex flex-col md:flex-row lg:gap-3 gap-1.5">
                <div className="flex-1 flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 md:py-2">
                  <FaLocationDot className="text-[#c29345] text-lg shrink-0" />
                  <input
                    type="text"
                    placeholder="Search by State, LGA, or Ward"
                    className="w-full bg-transparent text-white placeholder-white/60 outline-none text-sm md:text-base"
                  />
                </div>
                <div className="flex-1 flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 md:py-2">
                  <HiOutlineHomeModern className="text-[#c29345] text-lg shrink-0" />
                  <input
                    type="text"
                    placeholder="Property Type"
                    className="w-full bg-transparent text-white placeholder-white/60 outline-none text-sm md:text-base"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#c29345] text-white px-6 py-3 md:py-2 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#a87d3a] transition-colors duration-300"
                >
                  <FaMagnifyingGlass />
                  <span>Search</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-3"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-linear-to-r from-[#c29345] to-[#e8b86d] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-[#c29345]/40 transition-all duration-300 w-full sm:w-auto  text-[15px] lg:text-[18px]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Become a Landlord
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-[#e8b86d] to-[#c29345] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 w-full sm:w-auto "
              >
                <span className="relative z-10 flex items-center gap-2 text-[15px] lg:text-[18px] ">
                  <BiBuildingHouse />
                  Book a Property
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto"
            >
              {/* {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 border border-white/10"
                >
                  <div className="text-[#c29345] text-xl md:text-2xl lg:text-3xl font-bold">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-xs md:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))} */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-3 bg-[#c29345] rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Hero;
