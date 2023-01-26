import SocialLinks from "../socialLinks/SocialLinks";
import s from "./Team.module.scss";

export default function Team() {
  return (
    <section>
      <div className={s.container}>
        <div className={s.team}>
          <p className={s.titleLabel}>Who we are</p>
          <h2 className={s.title}>Our Professional Team</h2>
          <p className={s.titleDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
          <ul className={s.teamList}>
            <li className={s.teamItem}>
              <div className={s.teamImage}>
                <picture>
                  <source
                    srcSet={`${require("../../images/team/person1.webp")} 1x, ${require("../../images/team/person1@2x.webp")} 2x`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`${require("../../images/team/person1.jpg")} 1x, ${require("../../images/team/person1@2x.jpg")} 2x`}
                    type="image/jpeg"
                  />
                  <img
                    src={require("../../images/team/person1.jpg")}
                    alt="employee"
                  />
                </picture>
                <div className={s.teamImageOverlay}>
                  <SocialLinks hoverColor="grey" />
                </div>
              </div>
              <div className={s.teamCard}>
                <h3 className={s.teamName}>John Doe</h3>
                <p className={s.teamDescription}>President</p>
              </div>
            </li>
            <li className={s.teamItem}>
              <div className={s.teamImage}>
                <picture>
                  <source
                    srcSet={`${require("../../images/team/person2.webp")} 1x, ${require("../../images/team/person2@2x.webp")} 2x`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`${require("../../images/team/person2.jpg")} 1x, ${require("../../images/team/person2@2x.jpg")} 2x`}
                    type="image/jpeg"
                  />
                  <img
                    src={require("../../images/team/person2.jpg")}
                    alt="employee"
                  />
                </picture>
                <div className={s.teamImageOverlay}>
                  <SocialLinks hoverColor="grey" />
                </div>
              </div>
              <div className={s.teamCard}>
                <h3 className={s.teamName}>Jane Doe</h3>
                <p className={s.teamDescription}>Vice President</p>
              </div>
            </li>
            <li className={s.teamItem}>
              <div className={s.teamImage}>
                <picture>
                  <source
                    srcSet={`${require("../../images/team/person3.webp")} 1x, ${require("../../images/team/person3@2x.webp")} 2x`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`${require("../../images/team/person3.jpg")} 1x, ${require("../../images/team/person3@2x.jpg")} 2x`}
                    type="image/jpeg"
                  />
                  <img
                    src={require("../../images/team/person3.jpg")}
                    alt="employee"
                  />
                </picture>
                <div className={s.teamImageOverlay}>
                  <SocialLinks hoverColor="grey" />
                </div>
              </div>
              <div className={s.teamCard}>
                <h3 className={s.teamName}>Steve Smith</h3>
                <p className={s.teamDescription}>Marketing Head</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
