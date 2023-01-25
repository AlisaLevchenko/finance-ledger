// import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import s from "./Navigation.module.scss";
import logo from "../../images/logo.svg";

export default function Navigation() {
  // const [scroll, setScroll] = useState(0);

  // useEffect(() => document.addEventListener("scroll", scroll));
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.navigation}>
          <a className={s.logoLink} href="/">
            {/* SVG_LOGO!!!! */}
            <img src={logo} alt="logo" />
          </a>
          <nav>
            <ul className={s.navList}>
              <li className={s.navItem}>
                <a className={s.navLink} href="/">
                  Home
                </a>
              </li>
              <li className={s.navItem}>
                <Link
                  className={s.navLink}
                  to="about"
                  spy={true}
                  duration={500}
                  smooth={true}
                  offset={-120}
                >
                  About
                </Link>
              </li>
              <li className={s.navItem}>
                <Link
                  className={s.navLink}
                  to="cases"
                  spy={true}
                  duration={500}
                  smooth={true}
                  offset={-120}
                >
                  Cases
                </Link>
              </li>
              <li className={s.navItem}>
                <Link
                  className={s.navLink}
                  to="blog"
                  spy={true}
                  duration={500}
                  smooth={true}
                  offset={-120}
                >
                  Blog
                </Link>
              </li>
              <li className={s.navItem}>
                <Link
                  className={s.navLink}
                  to="contacts"
                  spy={true}
                  duration={500}
                  smooth={true}
                  offset={-120}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
