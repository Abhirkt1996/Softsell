import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import ChatWidget from "./components/ChatWidget";
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
      <ThemeToggle />
    </div>
  );
}
