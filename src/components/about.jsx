import { motion } from "framer-motion";
import { Code, Shield, Globe } from "lucide-react";

export default function About() {
  return (
    <>
      <section id="about" className="py-40">
        <div className="container mx-auto">
          <motion.h2
            className="mb-8 text-center text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.5,
            }}
          >
            Why Choose TechSpace?
          </motion.h2>
          <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-3">
            {[
              {
                icon: Code,
                title: "Cutting-Edge Tech",
                description:
                  "We're at the forefront of technological advancements.",
              },
              {
                icon: Shield,
                title: "Unparalleled Security",
                description:
                  "Your data is protected by state-of-the-art security measures.",
              },
              {
                icon: Globe,
                title: "Global Impact",
                description:
                  "Our solutions are changing lives across the world.",
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                className="flex aspect-square w-full max-w-80 flex-col items-center justify-center rounded-lg bg-nav p-6 text-center shadow-lg"
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.3,
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
              >
                <Icon className="mb-4 h-12 w-12 text-secondary" />
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p>{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
