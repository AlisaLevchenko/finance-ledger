import s from "./SocialLinks.module.scss";
import sprite from "../../images/sprite.svg";

export default function SocialLinks(props) {
  const hoverColor = props.hoverColor;
  return (
    <>
      <ul className={s.socList}>
        <li className={s.socItem}>
          <a
            className={`${s.socLink} ${s[hoverColor]}`}
            href="/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg className={s.socIcon} width={35} height={35}>
              <use href={sprite + "#icon-facebook"}></use>
            </svg>
          </a>
        </li>
        <li className={s.socItem}>
          <a
            className={`${s.socLink} ${s[hoverColor]}`}
            href="/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg className={s.socIcon} width={35} height={35}>
              <use href={sprite + "#icon-twitter"}></use>
            </svg>
          </a>
        </li>
        <li className={s.socItem}>
          <a
            className={`${s.socLink} ${s[hoverColor]}`}
            href="/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg className={s.socIcon} width={40} height={35}>
              <use href={sprite + "#icon-youtube"}></use>
            </svg>
          </a>
        </li>
        <li className={s.socItem}>
          <a
            className={`${s.socLink} ${s[hoverColor]}`}
            href="/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg className={s.socIcon} width={31} height={35}>
              <use href={sprite + "#icon-linkedin"}></use>
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
}
