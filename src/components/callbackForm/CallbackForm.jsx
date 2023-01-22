import Button from "../button/Button";
import s from "./CallbackForm.module.scss";

export default function CallbackForm() {
  return (
    <div className={s.container}>
      <h2>Request Callback</h2>
      <form action=""></form>
      <Button arrow={false} label="Send" fontSize={18} />
    </div>
  );
}
