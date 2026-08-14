import { useEffect, useRef } from 'react';
import { 
  FaBusinessTime, 
  FaPhoneVolume, 
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import { HiOutlineSparkles } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa6';

const Contacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const contactInfo = [
    {
      icon: PiBuildingOfficeFill,
      title: "Office",
      details: "25 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
      gradient: "from-blue-600 to-blue-400",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: FaPhoneVolume,
      title: "Phone",
      details: "+234 800 123 4567",
      gradient: "from-rose-600 to-rose-400",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      icon: MdOutlineMail,
      title: "Email",
      details: "info@nexahomes.com",
      gradient: "from-amber-600 to-amber-400",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      icon: FaBusinessTime,
      title: "Working Hours",
      details: "Mon-Fri: 8AM - 6PM | Sat: 9AM - 3PM",
      gradient: "from-emerald-600 to-emerald-400",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
  ];

  const faqs = [
    {
      question: "How do I schedule a property viewing?",
      answer: "Contact us through the form above or call our office, and we'll arrange a convenient viewing time.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      question: "Can I list my property with Nexa Homes?",
      answer: "Yes. We help property owners market and sell or rent their homes quickly through our trusted platform.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      question: "Are your listings verified?",
      answer: "Absolutely. We verify listings to provide accurate information and reduce the risk of fraudulent property advertisements.",
      gradient: "from-emerald-500 to-teal-400",
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
    <div className="outer-container bg-linear-to-b from-slate-50 to-white">
      <div className="inner-container px-4 sm:px-6">
        
        {/* ================= HERO SECTION ================= */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-linear-to-r from-[#12131d] via-[#1a1a2e] to-[#201411] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mt-8 sm:mt-10 lg:mt-12 shadow-2xl"
        >
          {/* Animated Background */}
          <div className="absolute -right-20 -top-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-[#c29345]/10 blur-3xl animate-pulse" />
          <div className="absolute -left-20 -bottom-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-[#e8b86d]/10 blur-3xl animate-pulse delay-1000" />
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block rounded-full bg-[#c29345]/20 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] border border-[#c29345]/30 backdrop-blur-sm mb-4"
            >
              <HiOutlineSparkles className="inline-block mr-1 h-3 w-3" />
              Contact Us
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              We'd Love To{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] to-[#e8b86d]">
                Hear From You
              </span>
            </h2>

            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed">
              Have questions about buying, renting, selling, or investing
              in property? Reach out to our team—we're here to help.
            </p>

            {/* Quick Contact Buttons */}
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+2348001234567"
                className="inline-flex items-center gap-2 bg-[#c29345] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg transition-all"
              >
                <FaPhoneVolume className="h-3 w-3 sm:h-4 sm:w-4" />
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@nexahomes.com"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/20 transition-all"
              >
                <MdOutlineMail className="h-3 w-3 sm:h-4 sm:w-4" />
                Email Us
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100"
            >
              <div className="flex justify-center lg:justify-start">
                <span className="inline-block rounded-full bg-[#c29345]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] border border-[#c29345]/20">
                  Get In Touch
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4 text-center lg:text-left">
                Contact Information
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mt-2 text-center lg:text-left">
                Reach out to us through any of these channels
              </p>

              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`bg-linear-to-r ${info.gradient} p-4 sm:p-5 rounded-xl shadow-lg text-white transition-all duration-300 cursor-default`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`${info.iconBg} p-2 sm:p-3 rounded-xl shrink-0`}>
                        <info.icon className={`${info.iconColor} text-xl sm:text-2xl`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base text-white">
                          {info.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-700 text-center lg:text-left mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3 justify-center lg:justify-start">
                  {[
                    { icon: FaFacebook, color: "bg-blue-600", label: "Facebook" },
                    { icon: FaTwitter, color: "bg-sky-500", label: "Twitter" },
                    { icon: FaInstagram, color: "bg-pink-600", label: "Instagram" },
                    { icon: FaWhatsapp, color: "bg-green-500", label: "WhatsApp" },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className={`${social.color} p-2 sm:p-2.5 rounded-full text-white shadow-lg hover:shadow-xl transition-all`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Send Us A Message
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
                We'll get back to you within 24 hours
              </p>

              <form className="space-y-4 sm:space-y-5">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 800 123 4567"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Inquiry Type
                  </label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20 transition-all duration-300 text-sm sm:text-base bg-white">
                    <option value="">Select Inquiry</option>
                    <option>Buy Property</option>
                    <option>Sell Property</option>
                    <option>Rent Property</option>
                    <option>Land Purchase</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#c29345] focus:ring-2 focus:ring-[#c29345]/20 transition-all duration-300 text-sm sm:text-base resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-[#c29345] to-[#e8b86d] text-white py-3.5 sm:py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base group"
                >
                  Send Message
                  <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <p className="text-xs text-gray-400 text-center mt-2">
                  <FaCheckCircle className="inline-block mr-1 h-3 w-3 text-green-500" />
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="inline-block rounded-full bg-[#c29345]/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c29345] border border-[#c29345]/20">
              FAQ
            </span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c29345] to-[#e8b86d]">
                Questions
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              Find answers to the most common questions about our services
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`bg-linear-to-br ${faq.gradient} p-5 sm:p-6 lg:p-8 rounded-xl shadow-lg text-white transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1.5 shrink-0 mt-1">
                    <FaCheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base lg:text-lg">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-white/90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= MAP SECTION ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-4 sm:py-6"
        >
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              title="Nexa Homes Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5702375828123!2d3.4567!3d6.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1ae3e8c8e7%3A0x4c8c5e6c8e7e8c8e!2sLekki%20Phase%201%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-112.5 border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contacts;