import s from "./About.module.scss";
import Button from "../button/Button";

export default function About() {
  return (
    <section className={s.aboutSection} id="about">
      <picture className={s.aboutImageMob}>
        <source
          srcSet={`${require("../../images/about/people.webp")} 1x, ${require("../../images/about/people@2x.webp")} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${require("../../images/about/people.jpg")} 1x, ${require("../../images/about/people@2x.jpg")} 2x`}
          type="image/jpeg"
        />
        <img
          src={require("../../images/about/people.jpg")}
          alt="table whith a diary and cup of coffee"
        />
      </picture>
      <div className={`${s.leftBG}  ${s.leftBGWebp}`}></div>
      <div className={s.rightBG}></div>
      <div className={s.container}>
        <div className={s.aboutLeftSide}></div>
        <div className={s.aboutInner}>
          <p className={s.titleLabel}>What you are looking for</p>
          <h2 className={s.title}>We provide bespoke solutions</h2>
          <p className={s.titleDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <a href="/" target="_blank" rel="noopener noreferrer nofollow">
            <Button
              label="Read More"
              type="button"
              bordered={true}
              hoverColor="green"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
