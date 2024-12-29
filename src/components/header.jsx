import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed z-[60] w-full bg-nav p-4">
        <div className="container mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="flex gap-2"
          >
            <motion.div
              className="flex items-center space-x-2"
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="group flex items-center space-x-2"
                whileHover="hovered"
              >
                <motion.div
                  className="h-6 w-6 text-secondary"
                  variants={{
                    hovered: { y: -50, x: 30, rotate: 25, opacity: 0 },
                    initial: { y: 0, x: 0, rotate: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Rocket />
                </motion.div>
                <span className="text-xl font-bold">TechSpace</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <nav className="hidden items-center space-x-4 md:flex">
            <ul className="flex items-center space-x-4">
              {["Products", "About", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-secondary"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <li>
                <Button size="md">Sign Up</Button>
              </li>
            </ul>
          </nav>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="fixed inset-0 z-[65] bg-nav px-6 pt-20"
              >
                <nav className="container mx-auto py-8">
                  <ul className="space-y-4">
                    {["Products", "About", "Contact"].map((item) => (
                      <motion.li
                        key={item}
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="block py-2 text-2xl text-[#E6E6FA] hover:text-[#8A2BE2]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item}
                        </a>
                      </motion.li>
                    ))}
                    <motion.li
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="w-full text-2xl"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign Up
                      </Button>
                    </motion.li>
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.button
          className={`fixed right-4 top-4 z-[70] ${isMenuOpen ? "" : "md:hidden"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, rotate: 180 }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.button>
      </header>
    </>
  );
}
