import SocialLinks from "../socialLinks/SocialLinks";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerWrapper}>
          <SocialLinks hoverColor="green" />
          <p className={s.footerDescription}>
            Copyright © 2021 - FinanceLedger
          </p>
        </div>
      </div>
    </footer>
  );
}
