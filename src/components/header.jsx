import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-[60] w-full bg-[#1A1A2E]/80 p-4 text-[#E6E6FA] backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Rocket className="h-6 w-6 text-[#8A2BE2]" />
          <span className="text-xl font-bold">TechSpace</span>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {["Products", "About", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#8A2BE2]"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed inset-0 z-[65] bg-[#1A1A2E] px-6 pt-20"
            >
              <nav className="container mx-auto py-8">
                <ul className="space-y-4">
                  {["Products", "About", "Contact"].map((item) => (
                    <motion.li
                      className="hover:underline"
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="block py-2 text-2xl text-[#E6E6FA]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.button
        className="fixed right-4 top-4 z-[70] md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, rotate: 180 }}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.button>
    </header>
  );
}
