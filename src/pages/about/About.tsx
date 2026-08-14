import { useEffect, useRef } from 'react';
import { 
  Building2, 
  Home, 
  LandPlot, 
  Users, 
  Shield, 
  Award, 
  Clock, 
  TrendingUp,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Crown,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  Quote,
 
} from 'lucide-react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import { GiSubmarineMissile, GiStarProminences } from 'react-icons/gi';
import { FaQuoteLeft, FaHeart, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import pig from '../../assets/d6f95ce3-a110-4b83-9479-1b575271da92.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    { number: "500+", label: "Properties Sold", icon: Home },
    { number: "1,200+", label: "Happy Clients", icon: Users },
    { number: "15", label: "Cities Covered", icon: MapPin },
    { number: "98%", label: "Satisfaction Rate", icon: Award },
  ];

  const services = [
    {
      title: "Buy Property",
      description: "Explore verified houses, apartments, and land for sale in your preferred location.",
      icon: Home,
      gradient: "from-[#c29345] to-[#e8b86d]",
      iconBg: "bg-amber-100",
      iconColor: "text-[#c29345]",
    },
    {
      title: "Sell Property",
      description: "List your house, apartment, or land and connect with serious buyers quickly.",
      icon: Building2,
      gradient: "from-[#2563eb] to-[#60a5fa]",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Rent Property",
      description: "Find apartments, houses, and commercial properties that fit your budget and lifestyle.",
      icon: LandPlot,
      gradient: "from-[#059669] to-[#34d399]",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  // ADDED: Values array
  const values = [
    {
      icon: Shield,
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

  const features = [
    { icon: Shield, label: "Verified Listings", desc: "All properties are verified and legit" },
    { icon: Clock, label: "Fast Response", desc: "Quick replies to your inquiries" },
    { icon: TrendingUp, label: "Best Prices", desc: "Competitive pricing in the market" },
    { icon: HeartHandshake, label: "Trusted Service", desc: "Reliable and professional support" },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      quote: "Nexa Homes made buying my first home a breeze. Their team was professional and supportive throughout the process.",
    },
    {
      name: "Jane Smith",
      role: "Real Estate Investor",
      image: "https://images.unsplash.com/photo-1494790108375-be9c1b6a8d0c?w=100",
      quote: "I've sold multiple properties through Nexa Homes. They consistently deliver excellent results.",
    },
  ];

  // ADDED: cardVariants
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

  return (
    <div className="outer-container bg-linear-to-b from-white to-slate-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#c29345]/20 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c29345]/10 blur-3xl animate-pulse" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#e8b86d]/10 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-[#c29345]/20 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] backdrop-blur-sm border border-[#c29345]/30">
              <Shield className="inline-block mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Trusted Real Estate Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            About{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] to-[#e8b86d]">
              Nexa Homes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
          >
            At Nexa Homes, we believe that every property journey should be simple, transparent, and rewarding. 
            Whether you're buying, selling, or renting a home, apartment, or land, our dedicated professionals 
            work closely with you to understand your needs and deliver the best possible results from start to finish.
          </motion.p>

          {/* Stats */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/10 hover:border-[#c29345]/30 transition-all duration-300 group cursor-default"
              >
                <stat.icon className="mx-auto h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-[#c29345] group-hover:scale-110 transition-transform" />
                <div className="mt-1 sm:mt-2 text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="inner-container px-4 sm:px-6">
        {/* ================= ABOUT US SECTION ================= */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[#c29345]/20 blur-2xl" />
                <div className="absolute -bottom-4 -right-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[#e8b86d]/20 blur-2xl" />
                <img
                  src={pig}
                  alt="About Nexa Homes"
                  className="relative rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 lg:h-112.5 object-cover border-4 border-white/10"
                />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-[#c29345]" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">Nexa Homes</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="bg-linear-to-br from-[#c29345] to-[#e8b86d] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl hover:shadow-[#c29345]/30 transition-shadow duration-300">
                <span className="inline-block rounded-full bg-white/20 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  <Sparkles className="inline-block mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                  About Us
                </span>

                <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Your Trusted Real Estate Partner
                </h2>

                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                    Nexa Homes is committed to making property ownership and renting simple, transparent, and stress-free. 
                    We connect buyers, sellers, landlords, and tenants through innovative technology and professional 
                    real estate services.
                  </p>

                  <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                    From affordable homes and luxury apartments to commercial buildings and land investments, 
                    we provide verified listings, expert guidance, and exceptional customer support.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                      <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] sm:text-xs font-semibold text-white">{feature.label}</p>
                        <p className="text-[8px] sm:text-[10px] text-white/70">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-5 sm:mt-6 w-full bg-white text-[#c29345] py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

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
                <FaQuoteLeft className="text-white/30 text-2xl sm:text-3xl mb-2" />
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

        {/* ================= SERVICES SECTION ================= */}
        <section className="py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block rounded-full bg-[#c29345]/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] border border-[#c29345]/20">
              Our Services
            </span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] to-[#e8b86d]">
                Nexa Homes?
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`bg-linear-to-br ${service.gradient} rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl group cursor-default`}
              >
                <div className={`${service.iconBg} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`${service.iconColor} h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8`} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/90 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 sm:mt-6 flex items-center text-white/80 text-xs sm:text-sm font-medium group-hover:text-white transition-colors">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= TESTIMONIALS SECTION ================= */}
        <section className="py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block rounded-full bg-[#c29345]/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] border border-[#c29345]/20">
              Testimonials
            </span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] to-[#e8b86d]">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-[#c29345] opacity-50" />
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 sm:mt-6 flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[#c29345] text-[#c29345]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-[#c29345] to-[#e8b86d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Ready to Find Your Dream Property?
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
              Let us help you find the perfect home, apartment, or land investment.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#c29345] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base justify-center"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base justify-center"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;