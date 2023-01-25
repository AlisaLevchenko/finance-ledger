import s from "./Button.module.scss";
import rightaArrow from "../../images/right-arrow.svg";

export default function Button(props) {
  const hoverColor = props.hoverColor;
  return (
    <div>
      <button
        type={props.type}
        style={{ fontSize: `${props.fontSize}px` }}
        className={`${s.btn} ${props.bordered ? s.btnBordered : ""} ${
          s[hoverColor]
        }`}
      >
        {props.arrow && (
          <img className={s.btnIcon} src={rightaArrow} alt="right-arrow" />
        )}
        {props.label}
      </button>
    </div>
  );
}
