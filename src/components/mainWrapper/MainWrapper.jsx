import React from "react";
import Navigation from "../navigation/Navigation";
import Hero from "../hero/Hero";
import About from "../about/About";
import Cases from "../cases/Cases";
import Blog from "../blog/Blog";
import Team from "../team/Team";
import Contacts from "../contacts/Contacts";
import Footer from "../footer/Footer";

export default function MainWrapper() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        <About />

        <Cases />

        <Blog />

        <Team />

        <Contacts />
      </main>

      <Footer />
    </>
  );
}
