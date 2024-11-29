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
      name: "Edge Computing",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <section className="bg-[#1A1A2E] py-16">
      <div className="container mx-auto">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold "
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
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-background p-4 shadow-lg"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: index * 0.4, 
              }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="h-[250px] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold ">
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
