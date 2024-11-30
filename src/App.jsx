"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import Social from "./components/social";
import Features from "./components/features";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Page() {
  return (
    <main className="bg-background text-text min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Social />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
