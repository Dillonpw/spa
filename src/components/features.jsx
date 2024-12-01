import { motion } from "framer-motion";

export default function Features() {
  const products = [
    {
      name: "AI-Powered Analytics",
      image: "/markus-spiske-iar-afB0QQw-unsplash.jpg",
    },
    {
      name: "Quantum Computing Solutions",
      image: "/markus-spiske-Skf7HxARcoc-unsplash.jpg",
    },
    {
      name: "Blockchain Security",
      image: "/mathew-schwartz-iGheu30xAi8-unsplash.jpg",
    },
    {
      name: "Edge Computing",
      image: "/thisisengineering-ZPeXrWxOjRQ-unsplash.jpg",
    },
  ];

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
    <section className="bg-nav py-40">
      <div className="container mx-auto">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How We Innovate
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-background p-4 shadow-lg"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <div className="relative w-full pb-[56.25%]">
                {" "}
                {/* 16:9 Aspect Ratio Container */}
                <motion.img
                  src={product.image}
                  alt={product.name}
                  whileHover={{ scale: 1.06 }}
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-400">
                  Revolutionizing industries with our advanced{" "}
                  {product.name.toLowerCase()} technology.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
}
