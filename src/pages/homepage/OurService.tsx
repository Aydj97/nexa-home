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

const OurService = () => {
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
    <div className="outer-container bg-linear-to-b from-[#0F172A] via-[#1a1a3e] to-[#0F172A] py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="inner-container px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <span className="inline-block rounded-full bg-[#c29345]/20 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] border border-[#c29345]/30 backdrop-blur-sm">
            <HiOutlineSparkles className="inline-block mr-1 h-3 w-3 sm:h-4 sm:w-4" />
            Our Services
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Our Special{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] to-[#e8b86d]">
              Services
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique needs
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
        >
          {stats.map((stat, idx) => (
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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-[#1a1a3e] rounded-2xl p-6 sm:p-7 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-[#c29345]/30 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#c29345]/0 via-[#c29345]/0 to-[#c29345]/0 group-hover:from-[#c29345]/20 group-hover:via-[#c29345]/10 group-hover:to-[#c29345]/20 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`${service.iconBg} inline-block p-3 sm:p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <service.icon className={`text-4xl sm:text-5xl ${service.iconColor}`} />
                </motion.div>

                {/* Title */}
                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#c29345] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-300"
                    >
                      <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#c29345]" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-5 sm:mt-6"
                >
                  <NavLink
                    to="/"
                    className="inline-flex items-center gap-2 bg-[#c29345] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-[#c29345]/30 transition-all duration-300 group/btn"
                  >
                    Get Started
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
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 flex flex-wrap gap-4 sm:gap-6 justify-center"
        >
          {[
            { icon: FaShieldAlt, text: "100% Secure Transactions", color: "text-emerald-400" },
            { icon: FaHandHoldingHeart, text: "Trusted by 1,200+ Clients", color: "text-amber-400" },
            { icon: FaStar, text: "4.8★ Average Rating", color: "text-yellow-400" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-[#c29345]/30 transition-all duration-300"
            >
              <item.icon className={`h-4 w-4 ${item.color}`} />
              <span className="text-white text-xs sm:text-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 lg:mt-12"
        >
          <div className="relative overflow-hidden bg-linear-to-r from-[#c29345] to-[#e8b86d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-2xl">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="inline-block bg-white/20 rounded-full p-3 sm:p-4 mb-4"
              >
                <HiOutlineSparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Ready to Get Started?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
                Let us help you find the perfect property or investment opportunity
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#c29345] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base justify-center group"
                >
                  Contact Us Now
                  <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base justify-center"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurService;