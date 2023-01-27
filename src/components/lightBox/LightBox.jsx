import { useState } from "react";
import s from "./LightBox.module.scss";

export default function LightBox({ setIsOpen, images, startedImg, totalImg }) {
  const [curImg, setCurImg] = useState(startedImg);

  const next = () => {
    if (curImg < images.length - 1) setCurImg(curImg + 1);
  };

  const prev = () => {
    if (curImg > 0) setCurImg(curImg - 1);
  };

  const closeHandler = (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <div className={s.backdrop} onClick={closeHandler}>
      <div className={s.modal}>
        <div className={s.modalImageWrapper}>
          {curImg > 0 && (
            <button
              className={`${s.modalBtn} ${s.modalBtnPrev}`}
              aria-label="previous"
              type="button"
              onClick={prev}
            ></button>
          )}

          <picture className={s.modalImage}>
            <source
              srcSet={`${require(`../../images/cases/${images[curImg]}.webp`)} 1x, ${require(`../../images/cases/${images[curImg]}@2x.webp`)} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${require(`../../images/cases/${images[curImg]}.jpg`)} 1x, ${require(`../../images/cases/${images[curImg]}@2x.jpg`)} 2x`}
              type="image/jpeg"
            />
            <img
              src={require(`../../images/cases/${images[curImg]}.jpg`)}
              alt="fdsfs"
            />
          </picture>

          {curImg < images.length - 1 && (
            <button
              className={`${s.modalBtn} ${s.modalBtnNext}`}
              aria-label="next"
              type="button"
              onClick={next}
            ></button>
          )}
        </div>
        <div className={s.modalDescriptionWrapper}>
          <div>
            <p className={s.modalDescription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, aut quam!
            </p>
            <p className={s.modalDescriptionCases}>
              {`Image ${curImg + 1} of
          ${totalImg}`}
            </p>
          </div>
          <button
            className={s.modalBtnClose}
            aria-label="close"
            type="button"
            onClick={closeHandler}
          ></button>
        </div>
      </div>
    </div>
  );
}
