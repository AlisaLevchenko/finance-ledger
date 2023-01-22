import s from "./Footer.module.scss";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import linkedin from "../../images/linkedin.svg";

export default function Footer() {
  return (
    <div className={s.container}>
      <div className={s.footerWrapper}>
        <ul className={s.footerList}>
          <li className={s.footerItem}>
            <a className={s.footerLink} href="">
              <img className={s.footerIcon} src={facebook} alt="facebook" />
            </a>
          </li>
          <li className={s.footerItem}>
            <a className={s.footerLink} href="">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li className={s.footerItem}>
            <a className={s.footerLink} href="">
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li className={s.footerItem}>
            <a className={s.footerLink} href="">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
        <p className={s.heroDescription}>Copyright © 2021 - FinanceLedger</p>
      </div>
    </div>
  );
}
