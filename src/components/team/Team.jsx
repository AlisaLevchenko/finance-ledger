import s from "./Team.module.scss";
import sprite from "../../images/sprite.svg";

export default function Team() {
  return (
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
                  srcset={`${require("../../images/team/person1.webp")} 1x, ${require("../../images/team/person1@2x.webp")} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${require("../../images/team/person1.jpg")} 1x, ${require("../../images/team/person1@2x.jpg")} 2x`}
                  type="image/jpeg"
                />
                <img
                  src={require("../../images/team/person1.jpg")}
                  alt="employee"
                />
              </picture>
              <div className={s.teamImageOverlay}>
                <ul className={s.teamSocList}>
                  <li>
                    <a className={s.teamSocLink} href="#">
                      <svg width={35} height={35}>
                        {" "}
                        <use href="../../images/sprite.svg#icon-facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className={s.teamSocLink} href="#"></a>
                  </li>
                  <li>
                    <a className={s.teamSocLink} href="#"></a>
                  </li>
                  <li>
                    <a className={s.teamSocLink} href="#"></a>
                  </li>
                </ul>
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
                  srcset={`${require("../../images/team/person2.webp")} 1x, ${require("../../images/team/person2@2x.webp")} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${require("../../images/team/person2.jpg")} 1x, ${require("../../images/team/person2@2x.jpg")} 2x`}
                  type="image/jpeg"
                />
                <img
                  src={require("../../images/team/person2.jpg")}
                  alt="employee"
                />
              </picture>
              <div className={s.teamImageOverlay}>
                <ul className={s.teamSocList}>
                  <li>
                    <a className={s.teamSocLink} href="#">
                      <svg className={s.teamSocIcon}>
                        <use href="../../images/sprite.svg#icon-facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className={s.teamSocLink} href="#">
                      sdf
                    </a>
                  </li>
                  <li>
                    <a className={s.teamSocLink} href="#">
                      ewr
                    </a>
                  </li>
                  <li>
                    <a className={s.teamSocLink} href="#">
                      sfe
                    </a>
                  </li>
                </ul>
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
                  srcset={`${require("../../images/team/person3.webp")} 1x, ${require("../../images/team/person3@2x.webp")} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${require("../../images/team/person3.jpg")} 1x, ${require("../../images/team/person3@2x.jpg")} 2x`}
                  type="image/jpeg"
                />
                <img
                  src={require("../../images/team/person3.jpg")}
                  alt="employee"
                />
              </picture>
              <div className={s.teamImageOverlay}>
                <ul className={s.teamSocList}>
                  <li>
                    <a className={s.teamSocLink} href="#"></a>
                  </li>
                  <li>
                    <a className={s.teamSocLink} href="#"></a>
                  </li>
                  <li>
                    <a className={s.teamSocLink} href="#"></a>
                  </li>
                  <li>
                    <a className={s.teamSocLink} href="#"></a>
                  </li>
                </ul>
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
  );
}
