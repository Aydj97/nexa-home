import { useState, useEffect } from "react";
import logo from "../../assets/log-nexa.png";
import { MdClose } from "react-icons/md";
import { CgMenuGridR, CgProfile } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Mainheader = () => {
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home, contacts ");

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDropdown(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "logout", path: "/" },
  ];

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setDropdown(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a1a]/95 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="inner-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <img
              src={logo}
              alt="Nexa Logo"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <a
                    href={link.path}
                    onClick={() => handleLinkClick(link.name)}
                    className={`text-sm lg:text-base font-semibold transition-all duration-300 ${
                      activeLink === link.name
                        ? "text-[#c29345]"
                        : "text-[#f8f2ff] hover:text-[#c29345]"
                    }`}
                  >
                    {link.name === "contact" ? (
                      <>
                        About <span className="hidden sm:inline"></span>
                      </>
                    ) : (
                      link.name
                    )}
                  </a>
                  {activeLink === link.name && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c29345] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>

            <NavLink to="/dashboad">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-linear-to-r from-[#c29345] to-[#e8b86d] text-[#f8f2ff] text-sm lg:text-base font-bold px-3 py-2.5 lg:px-8 lg:py-3 rounded-[50%] shadow-lg hover:shadow-[#c29345]/30 transition-all duration-300"
              >
                <span className=" flex flex-col gap-1 justify-center items-center">
                  <CgProfile />
                 
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-[#e8b86d] to-[#c29345] opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </NavLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={toggleDropdown}
            className="md:hidden text-3xl lg:text-4xl text-[#f8f2ff] hover:text-[#c29345] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {dropdown ? <MdClose /> : <CgMenuGridR />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-0 bg-linear-to-b from-[#0a0a1a] to-[#1a1a2e] z-40"
          >
            <div className="flex flex-col items-center justify-center min-h-screen p-8">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                onClick={toggleDropdown}
                className="absolute top-6 right-6 text-3xl text-[#f8f2ff] hover:text-[#c29345] transition-colors"
              >
                <MdClose />
              </motion.button>

              <ul className="flex flex-col items-center gap-8 w-full max-w-sm">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="w-full text-center"
                  >
                    <a
                      href={link.path}
                      onClick={() => handleLinkClick(link.name)}
                      className={`block text-2xl lg:text-3xl font-bold transition-all duration-300 hover:scale-110 ${
                        activeLink === link.name
                          ? "text-[#c29345]"
                          : "text-[#f8f2ff] hover:text-[#c29345]"
                      }`}
                    >
                      {link.name}
                    </a>
                    {activeLink === link.name && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="w-12 h-0.5 bg-[#c29345] mx-auto mt-2 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.li>
                ))}

                <NavLink to='/dashboad'>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-linear-to-r from-[#c29345] to-[#e8b86d] text-[#f8f2ff] text-lg lg:text-xl font-bold py-4  shadow-lg hover:shadow-[#c29345]/30 transition-all duration-300 mt-4 rounded-[50%]"
                >
                  Dashborad
                </motion.button>

                </NavLink>

                
              </ul>

              {/* Decorative elements */}
              <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.3, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="w-2 h-2 rounded-full bg-[#c29345]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Mainheader;
