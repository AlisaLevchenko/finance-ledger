import s from "./Hero.module.scss";
import Button from "../button/Button";

export default function Hero() {
  return (
    <div className={s.container}>
      <div className={s.hero}>
        <h1 className={s.heroTitle}>The Sky Is The Limit</h1>
        <p className={s.heroDescription}>
          We provide world class financial assistance
        </p>
        <Button arrow={true} label="Read More" fontSize={18} />
      </div>
    </div>
  );
}
