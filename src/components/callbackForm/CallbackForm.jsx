import Button from "../button/Button";
import s from "./CallbackForm.module.scss";

export default function CallbackForm() {
  return (
    <section className={s.contactSection}>
      <picture className={s.contactImageMob}>
        <source
          srcset={`${require("../../images/contact/contact.webp")} 1x, ${require("../../images/contact/contact@2x.webp")} 2x`}
          type="image/webp"
        />
        <source
          srcset={`${require("../../images/contact/contact.jpg")} 1x, ${require("../../images/contact/contact@2x.jpg")} 2x`}
          type="image/jpeg"
        />
        <img
          src={require("../../images/contact/contact.jpg")}
          alt="table whith a diary and cup of coffee"
        />
      </picture>
      <div className={`${s.leftBG}  ${s.leftBGWebp}`}></div>
      <div className={s.rightBG}></div>
      <div className={s.container}>
        <div className={s.contactLeftSide}></div>
        <div className={s.contactInner}>
          <h2>Request Callback</h2>
          <form action=""></form>
          <Button arrow={false} label="Send" fontSize={18} />
        </div>
      </div>
    </section>
  );
}
