import { useState } from "react";
import LightBox from "../lightBox/LightBox";
import s from "./CasesGallary.module.scss";

export default function CasesGallary() {
  const [isOpen, setIsOpen] = useState(false);
  const [curImg, setCurImg] = useState("");

  const images = [
    "cases1",
    "cases2",
    "cases3",
    "cases4",
    "cases5",
    "cases6",
    // "cases7",
    // "cases8",
  ];

  const openLightBox = (i) => {
    setIsOpen(true);
    setCurImg(i);
    document.body.classList.add("no-scroll");
  };

  return (
    <>
      <ul className={s.casesList}>
        {images.map((el, i) => (
          <li key={el} className={s.casesItem}>
            <picture className={s.casesImage} onClick={() => openLightBox(i)}>
              <source
                srcSet={`${require(`../../images/cases/${el}.webp`)} 1x, ${require(`../../images/cases/${el}@2x.webp`)} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${require(`../../images/cases/${el}.jpg`)} 1x, ${require(`../../images/cases/${el}@2x.jpg`)} 2x`}
                type="image/jpeg"
              />
              <img src={require(`../../images/cases/${el}.jpg`)} alt={el} />
            </picture>
          </li>
        ))}
      </ul>
      {isOpen && (
        <LightBox
          setIsOpen={setIsOpen}
          images={images}
          startedImg={curImg}
          totalImg={images.length}
        />
      )}
    </>
  );
}
