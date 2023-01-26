// import Button from "../button/Button";
import CallbackForm from "../callbackForm/CallbackForm";
import s from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <section className={s.contactSection} id="contacts">
      <picture className={s.contactImageMob}>
        <source
          srcSet={`${require("../../images/contact/contact.webp")} 1x, ${require("../../images/contact/contact@2x.webp")} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${require("../../images/contact/contact.jpg")} 1x, ${require("../../images/contact/contact@2x.jpg")} 2x`}
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
          <h2 className={s.title}>Request Callback</h2>
          <CallbackForm />
        </div>
      </div>
    </section>
  );
}
