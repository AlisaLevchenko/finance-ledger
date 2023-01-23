import s from "./Navigation.module.scss";
import logo from "../../images/logo.svg";

export default function Navigation() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.navigation}>
          <a className={s.logoLink} href="/">
            {/* <svg className={s.logoIcon}>
          <use href="../../images/symbol-defs.svg#icon-logo"></use>
        </svg> */}
            <img src={logo} alt="logo" />
          </a>
          <nav>
            <ul className={s.navList}>
              <li className={s.navItem}>
                <a className={s.navLink} href="">
                  Home
                </a>
              </li>
              <li className={s.navItem}>
                <a className={s.navLink} href="">
                  About
                </a>
              </li>
              <li className={s.navItem}>
                <a className={s.navLink} href="">
                  Cases
                </a>
              </li>
              <li className={s.navItem}>
                <a className={s.navLink} href="">
                  Blog
                </a>
              </li>
              <li className={s.navItem}>
                <a className={s.navLink} href="">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
