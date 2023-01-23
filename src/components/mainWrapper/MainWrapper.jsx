import React from "react";
import Navigation from "../navigation/Navigation";
import Hero from "../hero/Hero";
import About from "../about/About";
import Cases from "../cases/Cases";
import Blog from "../blog/Blog";
import Team from "../team/Team";
import CallbackForm from "../callbackForm/CallbackForm";
import Footer from "../footer/Footer";

import s from "./MainWrapper.module.scss";

export default function MaunWrapper() {
  return (
    <>
      <Navigation />

      <Hero />

      <About />

      <Cases />

      <Blog />

      <Team />

      <CallbackForm />

      <Footer />
    </>
  );
}
