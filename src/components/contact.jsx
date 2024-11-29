import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="bg-background text-text py-16">
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
        <motion.form
          className="flex space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <input
            type="email"
            placeholder="Your email"
            className="border-secondary pl-2 bg-nav flex-grow rounded-md border"
          />
          <Button type="submit" className="bg-button hover:scale-110">
            <Send className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
