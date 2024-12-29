"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSent(true);
      setEmail("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid email address.");
    }
  };

  return (
    <section id="contact" className="bg-nav py-40 text-text">
      <div className="container mx-auto max-w-md">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stay Connected
        </motion.h2>
        <motion.p
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Join our newsletter for the latest in tech innovations and updates.
        </motion.p>
        <AnimatePresence mode="wait">
          {isSent ? (
            <motion.p
              key="success"
              className="text-center text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              Thank you for subscribing!
            </motion.p>
          ) : (
            <motion.form
              key="form"
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onSubmit={handleSubmit}
            >
              <div className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className={`flex-grow rounded-md border py-2 pl-2 ${
                    errorMessage
                      ? "border-red-500 bg-red-50"
                      : "border-button bg-nav"
                  }`}
                />
                <Button
                  type="submit"
                  className="hover:bg-button/90 bg-button transition-all duration-200 hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              <AnimatePresence>
                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 flex items-center text-sm text-red-500"
                  >
                    <AlertCircle className="mr-2 h-4 w-4" />
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
