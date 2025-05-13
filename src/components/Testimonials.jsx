import { motion } from "framer-motion";

// Dummy testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Manager",
    company: "TechNova Inc.",
    quote:
      "SoftSell made it incredibly easy to offload unused licenses. Their team was fast, professional, and transparent throughout.",
  },
  {
    name: "David Kim",
    role: "Operations Lead",
    company: "CloudBridge",
    quote:
      "I was skeptical at first, but we got paid the same day! SoftSell is now our go-to for all license recovery.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-left"
          >
            <p className="text-gray-800 dark:text-gray-200 italic mb-4">“{t.quote}”</p>
            <p className="font-semibold text-blue-600 dark:text-blue-400">
              {t.name}, <span className="text-sm">{t.role}</span> @ {t.company}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
