import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaPaperPlane } from "react-icons/fa";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([
    { sender: "bot", text: "Hi! I'm SoftBot. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to the bottom of the chat whenever a new message is added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };

    setChat((prevChat) => [...prevChat, userMsg]);

    // Simulate bot typing
    setIsBotTyping(true);

    // Fetch AI response from API
    try {
      const botResponse = await getAiResponse(input); // API call to get response
      setChat((prevChat) => [...prevChat, { sender: "bot", text: botResponse }]);
    } catch (error) {
      setChat((prevChat) => [
        ...prevChat,
        { sender: "bot", text: "Sorry, I couldn't get an answer at the moment." },
      ]);
    } finally {
      setIsBotTyping(false); // Stop the typing indicator
    }

    setInput(""); // Clear the input field
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <FaComments size={20} />
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-80 bg-white dark:bg-gray-800 shadow-xl rounded-lg mt-4 overflow-hidden flex flex-col"
          >
            <div className="bg-blue-600 text-white text-center py-2 font-semibold">
              SoftBot Assistant
            </div>
            <div className="flex-1 p-3 space-y-2 h-60 overflow-y-auto">
              {chat.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-100 ml-auto"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {/* Typing indicator */}
              {isBotTyping && (
                <div className="text-sm text-gray-500 italic">
                  SoftBot is typing...
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div className="flex border-t p-2 gap-2">
              <input
                type="text"
                placeholder="Ask something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-2 py-1 text-sm rounded border dark:bg-gray-900 dark:text-white"
              />
              <button
                onClick={handleSend}
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
