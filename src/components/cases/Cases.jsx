import CasesGallary from "../casesGallary/CasesGallary";

import s from "./Cases.module.scss";

export default function Cases() {
  return (
    <section id="cases">
      <div className={s.container}>
        <div className={s.cases}>
          <p className={s.titleLabel}>This is what we do</p>
          <h2 className={s.title}>Business Cases</h2>
          <p className={s.titleDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
          <CasesGallary />
        </div>
      </div>
    </section>
  );
}
