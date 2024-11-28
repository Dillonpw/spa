import { motion } from "framer-motion";

export default function Features() {
  const products = [
    {
      name: "AI-Powered Analytics",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Quantum Computing Solutions",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Blockchain Security",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Blockchain Security",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <section className="bg-[#1A1A2E] py-16">
      <div className="container mx-auto">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Innovations
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.name}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#24243B] p-4 shadow-lg transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="h-[250px] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {product.name}
                </h3>
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
