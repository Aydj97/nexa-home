import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import { 
  GiSubmarineMissile, 
  GiShield, 
  GiStarProminences,
  GiRocket,
  GiSunrise,
  GiGlobe,
} from 'react-icons/gi';
import { 
  FaHeart, 
  FaHandsHelping, 
  FaLightbulb, 
  FaUsers,
  FaCheckCircle,
} from 'react-icons/fa';

const Trecking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const values = [
    {
      icon: GiShield,
      title: "Integrity",
      description: "We operate with honesty and transparency in every transaction.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: FaHeart,
      title: "Customer First",
      description: "Your satisfaction is our top priority, always.",
      color: "from-rose-500 to-pink-400",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We leverage technology to simplify real estate processes.",
      color: "from-amber-500 to-yellow-400",
    },
    {
      icon: FaHandsHelping,
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
      color: "from-emerald-500 to-green-400",
    },
  ];

  const goals = [
    {
      number: "01",
      title: "Simplify Real Estate",
      description: "Making property transactions easier through technology",
      icon: GiRocket,
    },
    {
      number: "02",
      title: "Build Trust",
      description: "Creating lasting relationships with our clients",
      
    },
    {
      number: "03",
      title: "Drive Growth",
      description: "Helping clients achieve their investment goals",
      icon: GiSunrise,
    },
    {
      number: "04",
      title: "Global Reach",
      description: "Connecting Nigeria to the global real estate market",
      icon: GiGlobe,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };


  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="outer-container bg-linear-to-b from-slate-50 to-white py-8 sm:py-12 lg:py-16">
      <div className="inner-container px-4 sm:px-6">
        {/* ================= MAIN MISSION CARD ================= */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 }
          }}
          className="relative overflow-hidden bg-linear-to-br from-[#c29345] via-[#d4a84e] to-[#e8b86d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 lg:mb-16 shadow-2xl"
        >
          {/* Animated Background Decorations */}
          <div className="absolute -right-20 -top-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute -left-20 -bottom-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-white/10 blur-3xl animate-pulse delay-1000" />
          
          <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-1/3 bg-linear-to-r from-white/5 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Side - Icon and Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -30 }
              }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-white/20 blur-2xl animate-pulse" />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="relative inline-block bg-white/10 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-full border-2 border-white/20 shadow-xl"
                >
                  <GiSubmarineMissile className="text-5xl sm:text-6xl lg:text-7xl text-white" />
                </motion.div>
              </div>
              
              <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white flex items-center gap-3">
                Our Mission
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <GiStarProminences className="text-3xl sm:text-4xl text-white" />
                </motion.span>
              </h2>
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 30 }
              }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed">
                  Our mission is to provide reliable and professional real estate services that make 
                  buying, selling, and renting properties simple, transparent, and rewarding for every client.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
                  <div className="text-[8px] sm:text-[10px] text-white/80">Properties</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-white">98%</div>
                  <div className="text-[8px] sm:text-[10px] text-white/80">Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-white/10">
                  <div className="text-xl sm:text-2xl font-bold text-white">15+</div>
                  <div className="text-[8px] sm:text-[10px] text-white/80">Locations</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= OUR VALUES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <span className="inline-block rounded-full bg-[#c29345]/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] border border-[#c29345]/20">
              Our Values
            </span>
            <h3 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              What We{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] to-[#e8b86d]">
                Stand For
              </span>
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              Core principles that guide everything we do
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-300`} />
                <div className="relative">
                  <div className={`inline-block bg-linear-to-br ${value.color} p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon className="text-2xl sm:text-3xl" />
                  </div>
                  <h4 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-gray-900">
                    {value.title}
                  </h4>
                  <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= OUR GOALS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <span className="inline-block rounded-full bg-[#c29345]/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] border border-[#c29345]/20">
              Our Goals
            </span>
            <h3 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              What We{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] to-[#e8b86d]">
                Aim To Achieve
              </span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {goals.map((goal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex items-start gap-4 sm:gap-6"
              >
                <div className="shrink-0">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#c29345]/30">
                    {goal.number}
                  </div>
                  <div className="mt-1 text-2xl sm:text-3xl text-[#c29345]">
                    
                  </div>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    {goal.title}
                  </h4>
                  <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                  <div className="mt-2 sm:mt-3 flex items-center text-[#c29345] text-xs sm:text-sm font-medium">
                    Learn more
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-1"
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= CTA SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-[#c29345] to-[#e8b86d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2 sm:p-3">
                <FaUsers className="text-white text-2xl sm:text-3xl" />
              </div>
              <div className="text-left">
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Join Our Community
                </h4>
                <p className="text-xs sm:text-sm text-white/80">
                  Be part of our growing family
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#c29345] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <FaCheckCircle className="h-4 w-4" />
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Trecking  ;