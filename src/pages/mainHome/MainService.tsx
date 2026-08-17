import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import {
  FcDataProtection,
  FcMoneyTransfer,
  FcHome,
  FcConferenceCall,
  FcCustomerSupport,
  FcApproval,
} from "react-icons/fc";
import {
  FaArrowRight,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaStar,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  HiOutlineSparkles,
  HiOutlineHomeModern,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2';
import { NavLink } from "react-router-dom";

const MainService = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const services = [
    {
      id: 1,
      icon: FcDataProtection,
      title: "Buy Today, Pay Gradually",
      description: "Choose a Payment Schedule That Works for You and Start Your Journey to Land or Home Ownership.",
      features: ["Flexible Payment Plans", "No Hidden Fees", "Quick Approval"],
      color: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      id: 2,
      icon: FcMoneyTransfer,
      title: "Flexible Financing",
      description: "Access affordable mortgage options and financing solutions tailored to your budget.",
      features: ["Low Interest Rates", "Long Term Plans", "Expert Guidance"],
      color: "from-emerald-500 to-green-500",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      gradient: "from-emerald-500/20 to-green-500/20",
    },
    {
      id: 3,
      icon: FcHome,
      title: "Property Management",
      description: "Professional property management services to maximize your investment returns.",
      features: ["Tenant Management", "Maintenance", "Rental Collection"],
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 4,
      icon: FcConferenceCall,
      title: "Real Estate Consulting",
      description: "Expert advice and guidance for all your real estate investment decisions.",
      features: ["Market Analysis", "Investment Strategy", "Risk Assessment"],
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 5,
      icon: FcCustomerSupport,
      title: "24/7 Customer Support",
      description: "Round-the-clock support to assist you with any questions or concerns.",
      features: ["Live Chat", "Phone Support", "Email Assistance"],
      color: "from-rose-500 to-red-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      gradient: "from-rose-500/20 to-red-500/20",
    },
    {
      id: 6,
      icon: FcApproval,
      title: "Verified Listings",
      description: "All properties are thoroughly verified to ensure authenticity and value.",
      features: ["Property Verification", "Legal Checks", "Market Valuation"],
      color: "from-indigo-500 to-blue-500",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
  ];

  const stats = [
    { number: "500+", label: "Properties Sold", icon: HiOutlineHomeModern },
    { number: "1,200+", label: "Happy Clients", icon: HiOutlineUserGroup },
    { number: "98%", label: "Satisfaction Rate", icon: HiOutlineShieldCheck },
    { number: "15+", label: "Cities Covered", icon: HiOutlineChatBubbleLeftRight },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (


    <div className='outer-container bg-[#151534]'>
        <div className='inner-container'>


                
    <div className="min-h-screen bg-linear-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0a0a2a] py-12 sm:py-16 lg:py-20 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#c29345]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#c29345]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#c29345]/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[#c29345]/20 mb-4">
            <HiOutlineSparkles className="h-4 w-4 text-[#c29345]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c29345]">
              Premium Services
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Elevate Your{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] via-[#e8b86d] to-[#c29345]">
                Real Estate
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-[#c29345] to-[#e8b86d] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </span>{' '}
            Experience
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover comprehensive solutions crafted to transform your property journey into an extraordinary experience
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-[#c29345]/40 transition-all duration-500 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#c29345]/0 to-[#c29345]/0 group-hover:from-[#c29345]/5 group-hover:to-transparent transition-all duration-500" />
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#c29345]/0 via-[#c29345]/0 to-[#c29345]/0 group-hover:from-[#c29345]/20 group-hover:via-[#c29345]/10 group-hover:to-[#c29345]/20 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="flex justify-center">
                  <div className="p-2 bg-[#c29345]/10 rounded-full group-hover:bg-[#c29345]/20 transition-all duration-300">
                    <stat.icon className="h-6 w-6 text-[#c29345] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="mt-2 text-2xl sm:text-3xl font-bold text-white text-center group-hover:text-[#c29345] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 text-center">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#c29345]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#c29345]/0 via-[#c29345]/0 to-[#c29345]/0 group-hover:from-[#c29345]/30 group-hover:via-[#c29345]/20 group-hover:to-[#c29345]/30 rounded-3xl blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon with Rotating Border */}
                <div className="relative inline-block">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className={`${service.iconBg} p-3 sm:p-4 rounded-2xl shadow-lg relative`}
                  >
                    <service.icon className={`text-4xl sm:text-5xl ${service.iconColor}`} />
                  </motion.div>
                  <div className="absolute -inset-0.5 bg-linear-to-r from-[#c29345] to-[#e8b86d] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white group-hover:text-[#c29345] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                    >
                      <div className="shrink-0 w-5 h-5 rounded-full bg-[#c29345]/20 flex items-center justify-center">
                        <FaCheckCircle className="h-3 w-3 text-[#c29345]" />
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  <NavLink
                    to="/"
                    className="inline-flex items-center gap-2 bg-linear-to-r from-[#c29345] to-[#e8b86d] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-[#c29345]/30 transition-all duration-300 group/btn"
                  >
                    Explore Service
                    <FaArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex flex-wrap gap-4 justify-center"
        >
          {[
            { icon: FaShieldAlt, text: "100% Secure Transactions", color: "text-emerald-400", bg: "bg-emerald-500/10" },
            { icon: FaHandHoldingHeart, text: "Trusted by 1,200+ Clients", color: "text-amber-400", bg: "bg-amber-500/10" },
            { icon: FaStar, text: "4.8★ Average Rating", color: "text-yellow-400", bg: "bg-yellow-500/10" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-2 ${item.bg} backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 hover:border-[#c29345]/40 transition-all duration-300 group cursor-default`}
            >
              <item.icon className={`h-4 w-4 ${item.color} group-hover:scale-110 transition-transform`} />
              <span className="text-white text-xs sm:text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="relative overflow-hidden bg-linear-to-br from-[#c29345] via-[#d4a04a] to-[#e8b86d] rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
            {/* Animated Background Shapes */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/5 blur-2xl animate-pulse delay-500" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-4 mb-6"
              >
                <HiOutlineSparkles className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Ready to Transform Your Dreams?
              </h3>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-6">
                Let our expert team guide you to the perfect property investment opportunity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#c29345] px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto group"
                >
                  Get Started Now
                  <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                  View All Services
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

        </div>

    </div>

  );
};

export default MainService;