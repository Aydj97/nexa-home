import React, { useState, useEffect, useRef } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff,
  CheckCircle,
  ArrowRight,
  Home,
 
  Shield,
  Sparkles,
 
  Users,
  TrendingUp,
  Award,
  ChevronRight,
  Clock,
  MapPin,
  Key,
  Briefcase,
  Calendar,
  
  Heart,
} from 'lucide-react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import { 
  FaGoogle, 
  FaFacebook, 
  FaApple, 
  FaHandsHelping,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import one from "../../assets/one-hand.png";

const GetStarted = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    accountType: 'buyer',
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (password || confirmPassword) {
      setPasswordsMatch(password === confirmPassword);
    }
  }, [password, confirmPassword]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordsMatch) {
      alert('Passwords do not match!');
      return;
    }
    if (!agreed) {
      alert('Please agree to the Terms & Conditions');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', { ...formData, password });
    setIsSubmitting(false);
    alert('Account created successfully! 🎉');
  };

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

  const stats = [
    { number: "500+", label: "Properties", icon: Home, color: "from-amber-500 to-orange-500" },
    { number: "1,200+", label: "Happy Clients", icon: Users, color: "from-emerald-500 to-green-500" },
    { number: "98%", label: "Satisfaction", icon: Award, color: "from-purple-500 to-pink-500" },
    { number: "15+", label: "Locations", icon: MapPin, color: "from-blue-500 to-cyan-500" },
  ];

  const features = [
    { icon: Shield, text: "Verified Properties", color: "text-blue-500" },
    { icon: TrendingUp, text: "Best Market Prices", color: "text-emerald-500" },
    { icon: Users, text: "Expert Support Team", color: "text-purple-500" },
    { icon: Clock, text: "Fast & Secure Process", color: "text-amber-500" },
  ];

  const socialLinks = [
    { icon: FaFacebook, color: "bg-blue-600", hover: "hover:bg-blue-700" },
    { icon: FaTwitter, color: "bg-sky-500", hover: "hover:bg-sky-600" },
    { icon: FaInstagram, color: "bg-pink-600", hover: "hover:bg-pink-700" },
    { icon: FaLinkedin, color: "bg-blue-700", hover: "hover:bg-blue-800" },
  ];

  return (
    <div className="outer-container min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-linear-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#c29345]/20 pt-20 sm:pt-24 md:pt-28">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c29345]/10 blur-3xl animate-pulse" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#e8b86d]/10 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-[#c29345]/20 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] backdrop-blur-sm border border-[#c29345]/30">
              <Sparkles className="inline-block mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Get Started
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Your Property Journey{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] to-[#e8b86d]">
              Starts Here
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
          >
            Whether you're buying your dream home, selling your property, or
            looking for a rental, Nexa Homes is here to make the process
            simple, secure, and stress-free.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:border-[#c29345]/30 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
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
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="inner-container px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT SIDE - IMAGE & INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden lg:block sticky top-28"
          >
            <div className="relative bg-linear-to-br from-[#c29345] to-[#e8b86d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
              {/* Animated Background Decorations */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl animate-pulse" />
              <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-white/10 blur-3xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
              
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-4 sm:p-6 mb-4 sm:mb-6"
                >
                  <img 
                    src={one} 
                    alt="Get Started" 
                    className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
                  />
                </motion.div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Join Nexa Homes Today
                </h2>
                <p className="mt-2 text-sm sm:text-base text-white/90">
                  Start your property journey with the trusted real estate platform
                </p>

                <div className="mt-6 space-y-3 text-left">
                  {features.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all group cursor-default"
                    >
                      <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm text-white">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="flex items-center justify-center gap-2 text-white">
                    <Heart className="h-5 w-5 text-rose-400 fill-rose-400" />
                    <span className="text-sm font-semibold">1,200+ Happy Clients</span>
                  </div>
                </motion.div>

                {/* Social Links */}
                <div className="mt-6 flex justify-center gap-3">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className={`${social.color} p-2 rounded-full text-white shadow-lg hover:shadow-xl transition-all ${social.hover}`}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE - FORM ================= */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-block bg-[#c29345]/10 rounded-full p-2 mb-3">
                  <Key className="h-6 w-6 text-[#c29345]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Create Your Account
                </h2>
                <p className="mt-1 text-sm sm:text-base text-gray-500">
                  Join Nexa Homes to buy, sell, rent, and manage your properties.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <User className="inline-block mr-1.5 h-4 w-4 text-[#c29345]" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full h-11 sm:h-12 px-4 border border-gray-200 rounded-xl focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20 transition-all duration-300 text-sm sm:text-base outline-none bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <Mail className="inline-block mr-1.5 h-4 w-4 text-[#c29345]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full h-11 sm:h-12 px-4 border border-gray-200 rounded-xl focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20 transition-all duration-300 text-sm sm:text-base outline-none bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <Phone className="inline-block mr-1.5 h-4 w-4 text-[#c29345]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234 801 234 5678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-11 sm:h-12 px-4 border border-gray-200 rounded-xl focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20 transition-all duration-300 text-sm sm:text-base outline-none bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <Lock className="inline-block mr-1.5 h-4 w-4 text-[#c29345]" />
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full h-11 sm:h-12 px-4 pr-12 border border-gray-200 rounded-xl focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20 transition-all duration-300 text-sm sm:text-base outline-none bg-gray-50 focus:bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <div className="mt-1 flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          password.length > i * 2
                            ? i < 2
                              ? 'bg-red-400'
                              : i < 3
                              ? 'bg-yellow-400'
                              : 'bg-green-400'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <Lock className="inline-block mr-1.5 h-4 w-4 text-[#c29345]" />
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className={`w-full h-11 sm:h-12 px-4 pr-12 border rounded-xl transition-all duration-300 text-sm sm:text-base outline-none bg-gray-50 focus:bg-white ${
                        passwordsMatch || (!password && !confirmPassword) 
                          ? 'border-gray-200 focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20' 
                          : 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {!passwordsMatch && password && confirmPassword && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <CheckCircle className="h-3 w-3" />
                      Passwords do not match
                    </motion.p>
                  )}
                  {passwordsMatch && password && confirmPassword && password.length > 0 && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-green-500 flex items-center gap-1"
                    >
                      <CheckCircle className="h-3 w-3" />
                      Passwords match
                    </motion.p>
                  )}
                </div>

                {/* Account Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <Briefcase className="inline-block mr-1.5 h-4 w-4 text-[#c29345]" />
                    Account Type
                  </label>
                  <select
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleInputChange}
                    className="w-full h-11 sm:h-12 px-4 border border-gray-200 rounded-xl focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20 transition-all duration-300 text-sm sm:text-base outline-none bg-gray-50 focus:bg-white"
                  >
                    <option value="buyer">🏠 Buyer</option>
                    <option value="seller">💰 Seller</option>
                    <option value="renter">🔑 Renter</option>
                    <option value="landlord">🏢 Landlord</option>
                    <option value="investor">📈 Investor</option>
                  </select>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#c29345] focus:ring-[#c29345]/20 transition-all"
                  />
                  <label htmlFor="terms" className="text-xs sm:text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-[#c29345] hover:underline font-medium">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[#c29345] hover:underline font-medium">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={!agreed || !passwordsMatch || isSubmitting}
                  className="w-full bg-linear-to-r from-[#c29345] to-[#e8b86d] text-white py-3 sm:py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                {/* Social Sign Up */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs sm:text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: FaGoogle, label: "Google", color: "hover:bg-red-50 hover:border-red-200", textColor: "hover:text-red-600" },
                    { icon: FaFacebook, label: "Facebook", color: "hover:bg-blue-50 hover:border-blue-200", textColor: "hover:text-blue-600" },
                    { icon: FaApple, label: "Apple", color: "hover:bg-gray-50 hover:border-gray-200", textColor: "hover:text-gray-800" },
                  ].map((social, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className={`flex items-center justify-center gap-2 py-2.5 sm:py-3 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-600 transition-all duration-300 ${social.color} ${social.textColor}`}
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{social.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Sign In Link */}
                <div className="text-center text-sm text-gray-500">
                  Already have an account?{' '}
                  <a href="/dashboad" className="text-[#c29345] font-semibold hover:underline hover:text-[#a87d3a] transition-colors">
                    Sign In
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM CTA ================= */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="inner-container px-4 sm:px-6 py-8 sm:py-12 lg:py-16"
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
              <FaHandsHelping className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Start Your Real Estate Journey
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
              Join thousands of satisfied clients who found their dream properties through Nexa Homes
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#c29345] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base justify-center group"
              >
                Get Started Now
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base justify-center"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default GetStarted;