import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex justify-center items-center py-40">
      <style>{`
        .hero-gradient {
          background: radial-gradient(circle at center, rgba(138, 43, 226, 0.2) 0%, rgba(15, 10, 30, 0) 70%);
        }
      `}</style>
      <div className="hero-gradient absolute inset-0 z-0"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.h1
          className="mb-6 text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Explore the Future of Technology
        </motion.h1>
        <motion.p
          className="mx-auto mb-8 max-w-2xl text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover cutting-edge solutions that push the boundaries of what is
          possible in the digital realm.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className="bg-[#8A2BE2] text-white hover:bg-[#9B30FF]">
            Dive into Innovation
          </button>
        </motion.div>
      </motion.div>
      {[...Array(14)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute z-0"
          style={{
            width: Math.random() * 40 + 20,
            height: Math.random() * 40 + 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            scale: [1, Math.random() * 0.5 + 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="h-full w-full rounded-full bg-[#8A2BE2] opacity-30"></div>
        </motion.div>
      ))}
    </section>
  );
}
