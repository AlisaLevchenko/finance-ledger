import { Link } from "react-scroll";
import { useRef } from "react";

import logo from "../../images/logo.svg";
import s from "./Navigation.module.scss";

export default function Navigation() {
  // eslint-disable-next-line
  let lastScroll = 0;
  const defaultOffset = document.documentElement.clientWidth >= 734 ? 70 : 120;
  const header = useRef(null);

  document.addEventListener("scroll", () => {
    if (header.current) {
      const containHide = () => header.current.classList.contains(s.hederHide);
      const scrollPosition = () => document.documentElement.scrollTop;

      if (!containHide() && scrollPosition() > defaultOffset)
        header.current.classList.add(s.hederHide);
      else if (scrollPosition() < defaultOffset && containHide())
        header.current.classList.remove(s.hederHide);

      lastScroll = scrollPosition();
    }
  });

  return (
    <header className={s.header} ref={header}>
      <div className={s.container}>
        <div className={s.navigation}>
          <a className={s.logoLink} href="/">
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
