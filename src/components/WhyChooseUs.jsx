import { motion } from "framer-motion";
import { FaLock, FaBolt, FaBuilding, FaGlobe } from "react-icons/fa";

const benefits = [
  {
    icon: <FaLock className="text-3xl text-blue-600 mb-2" />,
    title: "Secure Transactions",
    description: "End-to-end encryption keeps your license data safe.",
  },
  {
    icon: <FaBolt className="text-3xl text-blue-600 mb-2" />,
    title: "Fast Payouts",
    description: "Get paid within 24 hours of verification.",
  },
  {
    icon: <FaBuilding className="text-3xl text-blue-600 mb-2" />,
    title: "Enterprise Ready",
    description: "Trusted by 100+ organizations worldwide.",
  },
  {
    icon: <FaGlobe className="text-3xl text-blue-600 mb-2" />,
    title: "Global Reach",
    description: "Support for licenses in multiple countries.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            {benefit.icon}
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
