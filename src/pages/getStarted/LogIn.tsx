import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowRight,
  User,
  Shield,
  Sparkles,
  Home,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import one from "../../assets/one-hand.png";

const LogIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [] = useState('');
  const [] = useState('');
  const [formErrors, setFormErrors] = useState<{ email?: string; password?: string }>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const errors: { email?: string; password?: string } = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Login:', { email, password, rememberMe });
    setIsLoading(false);
    navigate('/ dashboard');
  };

  
  return (
    <div className="outer-container min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">
      <div className="inner-container px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* ================= LEFT SIDE - WELCOME & INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative bg-linear-to-br from-[#c29345] to-[#e8b86d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
              {/* Animated Background */}
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
                    alt="Welcome" 
                    className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
                  />
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl sm:text-3xl font-bold text-white"
                >
                  Welcome Back!
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2 text-sm sm:text-base text-white/90"
                >
                  Sign in to continue your property journey with Nexa Homes
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 space-y-3 text-left"
                >
                  {[
                    { icon: Shield, text: "Secure & Trusted Platform", color: "text-blue-300" },
                    { icon: Home, text: "Verified Properties", color: "text-emerald-300" },
                    { icon: User, text: "Personalized Experience", color: "text-amber-300" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all group cursor-default"
                    >
                      <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm text-white">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="flex items-center justify-center gap-2 text-white">
                    <Sparkles className="h-5 w-5 text-amber-300" />
                    <span className="text-sm font-semibold">1,200+ Happy Clients</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE - LOGIN FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-block bg-[#c29345]/10 rounded-full p-2 mb-3">
                  <Shield className="h-6 w-6 text-[#c29345]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Welcome Back
                </h2>
                <p className="mt-1 text-sm sm:text-base text-gray-500">
                  Sign in to access your Nexa Homes account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <Mail className="inline-block mr-1.5 h-4 w-4 text-[#c29345]" />
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setFormErrors(prev => ({ ...prev, email: '' }));
                      }}
                      className={`w-full h-11 sm:h-12 px-4 border rounded-xl transition-all duration-300 text-sm sm:text-base outline-none bg-gray-50 focus:bg-white ${
                        formErrors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                          : 'border-gray-200 focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20'
                      }`}
                    />
                    {formErrors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-xs text-red-500 flex items-center gap-1"
                      >
                        <AlertCircle className="h-3 w-3" />
                        {formErrors.email}
                      </motion.p>
                    )}
                  </div>
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
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setFormErrors(prev => ({ ...prev, password: '' }));
                      }}
                      className={`w-full h-11 sm:h-12 px-4 pr-12 border rounded-xl transition-all duration-300 text-sm sm:text-base outline-none bg-gray-50 focus:bg-white ${
                        formErrors.password 
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                          : 'border-gray-200 focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {formErrors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle className="h-3 w-3" />
                      {formErrors.password}
                    </motion.p>
                  )}
                </div>

                {/* Remember & Forgot */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-[#c29345] focus:ring-[#c29345]/20 transition-all"
                    />
                    <span className="text-gray-600">Remember Me</span>
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-[#c29345] hover:underline font-medium transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>

                <NavLink to='/mainpage'>

                   {/* Login Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-linear-to-r from-[#c29345] to-[#e8b86d] text-white py-3 sm:py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed group"
                 
                >
                  {isLoading ? (
                    <>


                    
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"  ></div>
                      Signing In...
                    </>
                  ) : (
                    <>

                    
                      Sign In
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                </NavLink>

               

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs sm:text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                {/* Social Login */}
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

                {/* Sign Up Link */}
                <div className="text-center text-sm text-gray-500">
                  Don't have an account?{' '}
                  <NavLink
                    to="/getstarted"
                    className="text-[#c29345] font-semibold hover:underline hover:text-[#a87d3a] transition-colors"
                  >
                    Create Account
                  </NavLink>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    Secure Login
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-[#c29345]" />
                    SSL Encrypted
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;