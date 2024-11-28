import { motion } from "framer-motion";

export default function Footer() {
    return (

      <footer className="bg-[#0F0A1E] py-8 text-[#E6E6FA]">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; 2023 TechSpace. All rights reserved.
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
    )}