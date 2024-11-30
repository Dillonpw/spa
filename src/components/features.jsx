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
    <section className="bg-[#1A1A2E] py-16">
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
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-background group relative cursor-pointer overflow-hidden rounded-lg p-4 shadow-lg"
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
              <motion.img
                src={product.image}
                alt={product.name}
                whileHover={{ scale: 1.06 }}
                className="h-[250px] w-full rounded-lg object-cover"
              />
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
  );
}
