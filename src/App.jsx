"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0F0A1E] text-[#E6E6FA]">
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
