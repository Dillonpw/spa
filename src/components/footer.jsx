import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background pb-8 pt-10">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; 2024 Company Name. All rights reserved.
        </motion.p>
        <motion.p
          className="mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Pioneering the future of technology.
        </motion.p>
      </div>
    </footer>
  );
}
