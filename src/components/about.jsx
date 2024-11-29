import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Code, Shield, Globe } from "lucide-react";
export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose TechSpace?
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
              description: "Our solutions are changing lives across the world.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="flex flex-col items-center rounded-lg bg-nav p-6 text-center shadow-lg"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.3,
                    duration: 0.5,
                  },
                }),
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
  );
}
