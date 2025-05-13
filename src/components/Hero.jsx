import { motion } from "framer-motion";
import logo from "../assets/logo.png"; 
const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center min-h-screen px-6 
                 bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 
                 text-gray-900 dark:text-white"
    >
      <img src={logo} alt="SoftSell Logo" className="h-16 mb-6 drop-shadow-md" />

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Unlock Value from Unused Software Licenses
      </h1>
      <p className="text-lg max-w-xl mb-6">
        SoftSell helps you convert idle software into revenue—fast, easy, and secure.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Get a Quote
      </button>
    </motion.section>
  );
};

export default Hero;
