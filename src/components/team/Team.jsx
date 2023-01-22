import s from "./Team.module.scss";

export default function Team() {
  return (
    <div className={s.container}>
      <div className={s.team}>
        <p className={s.titleLabel}>Who we are</p>
        <h2 className={s.title}>Our Professional Team</h2>
        <p className={s.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul className={s.teamList}>
          <li className={s.teamItem}>
            <img className={s.teamImage} src="" alt="" />
            <h3 className={s.teamName}>John Doe</h3>
            <p className={s.teamDescription}>President</p>
          </li>
          <li className={s.teamItem}>
            <img className={s.teamImage} src="" alt="" />
            <h3 className={s.teamName}>Jane Doe</h3>
            <p className={s.teamDescription}>Vice President</p>
          </li>
          <li className={s.teamItem}>
            <img className={s.teamImage} src="" alt="" />
            <h3 className={s.teamName}>Steve Smith</h3>
            <p className={s.teamDescription}>Marketing Head</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
