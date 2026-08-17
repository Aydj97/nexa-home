import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  GiRocket,
  GiSunrise,
  GiGlobe,
} from 'react-icons/gi';
import { 
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




  return (
    <div className="outer-container bg-linear-to-b from-slate-50 to-white py-8 sm:py-12 lg:py-16">
      <div className="inner-container px-4 sm:px-6">
       

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