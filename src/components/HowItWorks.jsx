import { motion } from "framer-motion";
import { FaUpload, FaDollarSign, FaMoneyCheckAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload className="text-3xl text-blue-600 mb-2" />,
    title: "Upload License",
    description: "Submit your unused software license securely.",
  },
  {
    icon: <FaDollarSign className="text-3xl text-blue-600 mb-2" />,
    title: "Get Valuation",
    description: "We evaluate your license and provide an instant quote.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-3xl text-blue-600 mb-2" />,
    title: "Get Paid",
    description: "Receive payment quickly via your preferred method.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
