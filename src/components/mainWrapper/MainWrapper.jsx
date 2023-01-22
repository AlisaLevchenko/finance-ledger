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
      <header className={s.header}>
        <Navigation />
      </header>
      <section className={s.main}>
        <Hero />
      </section>
      <About />
      <section>
        <Cases />
      </section>
      <section className={s.blog}>
        <Blog />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <CallbackForm />
      </section>
      <footer className={s.footer}>
        <Footer />
      </footer>
    </>
  );
}
