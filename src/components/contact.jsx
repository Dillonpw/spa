import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (email.trim()) {
      setIsSent(true);
      setEmail(""); 
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <>
              <svg
        viewBox="0 0 1440 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        className="bg-nav"
      >
        <path
          d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
          className="fill-background"
        ></path>
      </svg>
    <section id="contact" className="bg-nav text-text py-40">
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
        {isSent ? (
          <motion.p
            className="text-center text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing!
          </motion.p>
        ) : (
          <motion.form
            className="flex space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            onSubmit={handleSubmit} 
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Your email"
              className="border-button bg-nav flex-grow rounded-md border pl-2"
            />
            <Button type="submit" className="bg-button hover:scale-110">
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </motion.form>
        )}
      </div>
    </section>
    </>
  );
}
