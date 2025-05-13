import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';
import ChatWidget from './components/ChatWidget';

function App() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <Newsletter />
        </main>
        <ChatWidget/>
        <Footer />
      </div>
    </div>
  );
}

export default App;