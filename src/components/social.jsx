import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";

export default function Social() {
  const socialLinks = [
    { href: "https://twitter.com", icon: <Twitter />, key: "twitter" },
    { href: "https://github.com", icon: <Github />, key: "github" },
    { href: "https://linkedin.com", icon: <Linkedin />, key: "linkedin" },
    { href: "https://instagram.com", icon: <Instagram />, key: "instagram" },
  ];

  return (
    <div className="relative z-50 flex flex-col items-center justify-center py-20">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-3xl font-semibold"
      >
        Follow Us
      </motion.p>

      <div className="relative z-50 flex w-80 justify-center space-x-10 rounded-xl px-10 py-5 text-2xl">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.key}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -20 : 20,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.2 },
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 7,
              duration: 1,
              delay: index * 0.3,
            }}
            className="cursor-pointer"
          >
            <link.icon.type className="text-text" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
