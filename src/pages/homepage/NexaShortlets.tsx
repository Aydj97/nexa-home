import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import { 
  FaArrowRight, 
  FaStar, 
  FaHeart,
} from 'react-icons/fa';
import { 
  HiOutlineLocationMarker,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import { HiOutlineHomeModern } from 'react-icons/hi2';

const NexaShortlets = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const locations = [
    {
      id: 1,
      name: "Lagos State",
      image: "/img/lagos-bg.jpg",
      size: "large",
      properties: 45,
      rating: 4.8,
      featured: true,
    },
    {
      id: 2,
      name: "Abuja State",
      image: "/img/abuja-bg.jpg",
      size: "large",
      properties: 38,
      rating: 4.9,
      featured: true,
    },
    {
      id: 3,
      name: "Ekiti State",
      image: "/img/hous-.jpg",
      size: "small",
      properties: 12,
      rating: 4.2,
    },
    {
      id: 4,
      name: "Oyo State",
      image: "/img/hous&.jpg",
      size: "small",
      properties: 18,
      rating: 4.4,
    },
    {
      id: 5,
      name: "Ogun State",
      image: "/img/house.jpg",
      size: "small",
      properties: 15,
      rating: 4.3,
    },
    {
      id: 6,
      name: "Osun State",
      image: "/img/house2.jpg",
      size: "small",
      properties: 10,
      rating: 4.1,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="outer-container bg-linear-to-b from-[#0F172A] via-[#1a1a3e] to-[#0F172A] py-8 sm:py-12 lg:py-16 overflow-hidden">
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
              <HiOutlineSparkles className="inline-block mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              Shortlets
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Nexa Managed{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] to-[#e8b86d]">
                Shortlets
              </span>
            </h2>
            <p className="mt-1 text-sm sm:text-base text-gray-400">
              Premium shortlet apartments in top Nigerian cities
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-[#c29345] text-white px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-[#c29345]/30 transition-all duration-300"
          >
            View All Shortlets
            <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
        >
          {[
            { number: "150+", label: "Shortlets", icon: HiOutlineHomeModern },
            { number: "15+", label: "Cities", icon: HiOutlineLocationMarker },
            { number: "98%", label: "Satisfaction", icon: FaStar },
            { number: "4.8★", label: "Average Rating", icon: FaStar },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 text-center hover:border-[#c29345]/30 transition-all duration-300 group cursor-default"
            >
              <stat.icon className="mx-auto h-5 w-5 sm:h-6 sm:w-6 text-[#c29345] group-hover:scale-110 transition-transform" />
              <div className="mt-1 text-lg sm:text-xl font-bold text-white">
                {stat.number}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {/* Main Large Cards - Lagos & Abuja */}
          {locations.filter(l => l.size === "large").map((location) => (
            <motion.div
              key={location.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative col-span-1 md:col-span-1 lg:col-span-1 h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${location.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-2">
                {location.featured && (
                  <span className="flex items-center gap-1 bg-[#c29345] text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-lg">
                    <FaStar className="h-2.5 w-2.5" />
                    Featured
                  </span>
                )}
                <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-lg">
                  <MdVerified className="h-3 w-3 text-[#c29345]" />
                  Verified
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#c29345] transition-colors">
                  {location.name}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-white/80 text-xs sm:text-sm">
                  <span>{location.properties} Properties</span>
                  <span className="flex items-center gap-1">
                    <FaStar className="h-3 w-3 text-[#c29345]" />
                    {location.rating}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 bg-[#c29345] text-white px-4 sm:px-6 py-2 rounded-xl font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-[#c29345]/30 transition-all duration-300 flex items-center gap-2 group/btn"
                >
                  Explore Properties
                  <FaArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}

          {/* Small Cards Grid */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 grid grid-cols-2 gap-3 sm:gap-4">
            {locations.filter(l => l.size === "small").map((location, index) => (
              <motion.div
                key={location.id}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.03 }}
                className="relative h-48 sm:h-52 md:h-56 lg:h-60 rounded-xl overflow-hidden group cursor-pointer"
                transition={{ delay: index * 0.05 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${location.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full text-white text-[10px] flex items-center gap-1">
                  <FaStar className="h-2.5 w-2.5 text-[#c29345]" />
                  {location.rating}
                </div>

                {/* Content */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#c29345] transition-colors">
                    {location.name}
                  </h4>
                  <p className="text-white/70 text-[10px] sm:text-xs mt-0.5">
                    {location.properties} Properties
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-1.5 bg-[#c29345] text-white px-3 py-1 rounded-lg font-semibold text-[10px] sm:text-xs hover:shadow-lg hover:shadow-[#c29345]/30 transition-all duration-300 flex items-center gap-1 group/btn"
                  >
                    View
                    <FaArrowRight className="h-2.5 w-2.5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 lg:mt-12 flex flex-wrap gap-4 sm:gap-6 justify-center"
        >
          {[
            { icon: MdVerified, text: "Verified Properties" },
            { icon: FaHeart, text: "Trusted by 1,200+ Clients" },
            { icon: FaStar, text: "4.8★ Average Rating" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <item.icon className="h-4 w-4 text-[#c29345]" />
              <span className="text-white text-xs sm:text-sm">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 lg:mt-12 text-center"
        >
          <div className="relative overflow-hidden bg-linear-to-r from-[#c29345] to-[#e8b86d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Ready to Find Your Perfect Shortlet?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
                Book premium shortlet apartments in Nigeria's top cities
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#c29345] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base justify-center group"
                >
                  Browse Shortlets
                  <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base justify-center"
                >
                  List Your Property
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NexaShortlets;