import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import { motion } from 'framer-motion';
import { 
  CiBookmark, 
  CiHeart, 
  CiShare2, 
  CiLocationOn,
  CiBadgeDollar,
  CiBatteryCharging,
  CiSquareAlert,
 
} from "react-icons/ci";
import { FaHeart, FaEye, FaArrowRight, FaStar, FaBookmark } from "react-icons/fa";
import { MdOutlineCameraAlt, MdVerified } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";

import hous1 from "../../assets/hous1.jpg";
import hous1p from "../../assets/hous1p.jpg";
import hous1k from "../../assets/hous1k.jpg";
import hous1r1 from "../../assets/hous1r1.jpg";
import hous1r2 from "../../assets/another2.jpg";
import hous1r3 from "../../assets/toile1.jpg";
import hous1r4 from "../../assets/stpacas.jpg";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  images: string[];
  featured: boolean;
  rating: number;
  reviews: number;
}

const FeaturedSale = () => {
  const [likedProperties, setLikedProperties] = useState<number[]>([]);
  const [bookmarkedProperties, setBookmarkedProperties] = useState<number[]>([]);
  const [] = useState<number | null>(null);

  const properties: Property[] = [
    {
      id: 1,
      title: "Luxury Villa",
      price: "₦45,000,000",
      location: "Abuja, Nigeria",
      beds: 4,
      baths: 3,
      area: "450 sqm",
      images: [hous1, hous1p, hous1k, hous1r1, hous1r2, hous1r3, hous1r4],
      featured: true,
      rating: 4.8,
      reviews: 24,
    },
    {
      id: 2,
      title: "Modern Apartment",
      price: "₦35,000,000",
      location: "Lagos, Nigeria",
      beds: 3,
      baths: 2,
      area: "280 sqm",
      images: [hous1, hous1p, hous1k, hous1r1, hous1r2, hous1r3, hous1r4],
      featured: false,
      rating: 4.6,
      reviews: 18,
    },
    {
      id: 3,
      title: "Executive Duplex",
      price: "₦65,000,000",
      location: "Lekki, Lagos",
      beds: 5,
      baths: 4,
      area: "620 sqm",
      images: [hous1, hous1p, hous1k, hous1r1, hous1r2, hous1r3, hous1r4],
      featured: true,
      rating: 4.9,
      reviews: 32,
    },
    {
      id: 4,
      title: "Penthouse Suite",
      price: "₦85,000,000",
      location: "Ikoyi, Lagos",
      beds: 4,
      baths: 5,
      area: "520 sqm",
      images: [hous1, hous1p, hous1k, hous1r1, hous1r2, hous1r3, hous1r4],
      featured: false,
      rating: 4.7,
      reviews: 21,
    },
  ];

  const toggleLike = (id: number) => {
    setLikedProperties(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleBookmark = (id: number) => {
    setBookmarkedProperties(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="outer-container bg-linear-to-b from-[#0F172A] to-[#1a1a3e] py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="inner-container px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-10 lg:mb-12 gap-4"
        >
          <div className="text-center sm:text-left">
            <span className="inline-block rounded-full bg-[#c29345]/20 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] border border-[#c29345]/30 backdrop-blur-sm">
              <HiOutlineHomeModern className="inline-block mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              Featured Properties
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Featured Properties & Houses For Sale
            </h2>
            <p className="mt-1 text-sm sm:text-base text-gray-400">
              Discover the best properties in prime locations
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-[#c29345] text-white px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-[#c29345]/30 transition-all duration-300"
          >
            View All Properties
            <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true, hide: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {properties.map((property, index) => (
              <SwiperSlide key={property.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-[#1a1a3e] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                      effect="fade"
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true, dynamicBullets: true }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      className="h-56 sm:h-60 md:h-64 lg:h-72"
                    >
                      {property.images.slice(0, 5).map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={img}
                            alt={`${property.title} - Image ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-2">
                      {property.featured && (
                        <span className="flex items-center gap-1 bg-[#c29345] text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-lg">
                          <FaStar className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          Featured
                        </span>
                      )}
                      <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-lg">
                        <MdVerified className="h-3 w-3 text-[#c29345]" />
                        Verified
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleLike(property.id)}
                        className="bg-black/50 backdrop-blur-sm p-2 sm:p-2.5 rounded-full hover:bg-black/70 transition-all shadow-lg"
                      >
                        {likedProperties.includes(property.id) ? (
                          <FaHeart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                        ) : (
                          <CiHeart className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        )}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleBookmark(property.id)}
                        className="bg-black/50 backdrop-blur-sm p-2 sm:p-2.5 rounded-full hover:bg-black/70 transition-all shadow-lg"
                      >
                        {bookmarkedProperties.includes(property.id) ? (
                          <FaBookmark className="h-4 w-4 sm:h-5 sm:w-5 text-[#c29345]" />
                        ) : (
                          <CiBookmark className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        )}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-black/50 backdrop-blur-sm p-2 sm:p-2.5 rounded-full hover:bg-black/70 transition-all shadow-lg"
                      >
                        <CiShare2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </motion.button>
                    </div>

                    {/* Photo Count */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-xs">
                      <MdOutlineCameraAlt className="h-3 w-3" />
                      <span>{property.images.length}</span>
                    </div>

                    {/* Quick View Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 m-auto w-fit h-fit bg-white/90 backdrop-blur-sm text-gray-900 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 duration-300"
                    >
                      <FaEye className="inline-block mr-2 h-3 w-3" />
                      Quick View
                    </motion.button>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6 bg-[#1a1a3e]">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl group-hover:text-[#c29345] transition-colors">
                          {property.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1 text-gray-400 text-xs sm:text-sm">
                          <CiLocationOn className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#c29345]" />
                          <span>{property.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-[#c29345]/10 px-2.5 py-1 rounded-full">
                        <FaStar className="h-3 w-3 text-[#c29345]" />
                        <span className="text-white text-sm font-semibold">{property.rating}</span>
                        <span className="text-gray-400 text-xs">({property.reviews})</span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <p className="text-[#c29345] font-bold text-xl sm:text-2xl">
                        {property.price}
                      </p>
                    </div>

                    {/* Property Details */}
                    <div className="mt-3 grid grid-cols-3 divide-x divide-gray-700 bg-[#0F172A] rounded-xl py-2 sm:py-3">
                      <div className="flex flex-col items-center gap-0.5 text-gray-300">
                        <CiBadgeDollar className="h-4 w-4 sm:h-5 sm:w-5 text-[#c29345]" />
                        <span className="text-[10px] sm:text-xs font-medium">
                          {property.beds} Beds
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 text-gray-300">
                        <CiBatteryCharging className="h-4 w-4 sm:h-5 sm:w-5 text-[#c29345]" />
                        <span className="text-[10px] sm:text-xs font-medium">
                          {property.baths} Baths
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 text-gray-300">
                        <CiSquareAlert className="h-4 w-4 sm:h-5 sm:w-5 text-[#c29345]" />
                        <span className="text-[10px] sm:text-xs font-medium">
                          {property.area}
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#c29345] text-white py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-[#c29345]/30 transition-all duration-300"
                      >
                        Buy Now
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gray-700 text-white py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-gray-600 transition-all duration-300"
                      >
                        Schedule Tour
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Properties CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <button className="group inline-flex items-center gap-2 bg-transparent border-2 border-[#c29345] text-[#c29345] px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-[#c29345] hover:text-white transition-all duration-300 text-sm sm:text-base">
            Explore All Properties
            <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #c29345 !important;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(194, 147, 69, 0.3);
          transform: scale(1.1);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: #c29345 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px !important;
          border-radius: 4px;
        }
        .swiper-scrollbar {
          background: rgba(255,255,255,0.1) !important;
        }
        .swiper-scrollbar-drag {
          background: #c29345 !important;
        }
        .inner-swiper .swiper-button-next,
        .inner-swiper .swiper-button-prev {
          width: 28px !important;
          height: 28px !important;
          background: rgba(0,0,0,0.5);
          border: none;
        }
        .inner-swiper .swiper-button-next::after,
        .inner-swiper .swiper-button-prev::after {
          font-size: 12px !important;
        }
        .inner-swiper .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
        }
        .inner-swiper .swiper-pagination-bullet-active {
          background: #c29345 !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default FeaturedSale;