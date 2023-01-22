import s from "./About.module.scss";
import Button from "../button/Button";

export default function About() {
  return (
    <section className={s.aboutSection}>
      <picture className={s.aboutImage}>
        <source
          srcset={`${require("../../images/about-img-mob.webp")} 1x, ${require("../../images/about-img-mob@2x.webp")} 2x`}
          type="image/webp"
        />
        <source
          srcset={`${require("../../images/about-img-mob.jpg")} 1x, ${require("../../images/about-img-mob@2x.jpg")} 2x`}
          type="image/jpeg"
        />

        <source
          srcset={`${require("../../images/about-img-tab.webp")} 1x, ${require("../../images/about-img-tab@2x.webp")} 2x`}
          type="image/webp"
        />
        <source
          srcset={`${require("../../images/about-img-tab.jpg")} 1x, ${require("../../images/about-img-tab@2x.jpg")} 2x`}
          type="image/jpeg"
        />

        <source
          srcset={`${require("../../images/about-img-desk.webp")} 1x, ${require("../../images/about-img-desk@2x.webp")} 2x`}
          type="image/webp"
        />
        <source
          srcset={`${require("../../images/about-img-desk.jpg")} 1x, ${require("../../images/about-img-desk@2x.jpg")} 2x`}
          type="image/jpeg"
        />
        <img src={require("../../images/about-img-desk.jpg")} alt="our team" />
      </picture>
      {/* <div className={s.container}> */}
      <div className={s.about}>
        <p className={s.titleLabel}>What you are looking for</p>
        <h2 className={s.title}>We provide bespoke solutions</h2>
        <p className={s.titleDescription}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <Button label="Read More" bordered={true} hoverColor="green" />
      </div>
      {/* </div> */}
    </section>
  );
}
