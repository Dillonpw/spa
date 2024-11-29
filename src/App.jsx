"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Page() {
  return (
    <main className="bg-background text-text min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
