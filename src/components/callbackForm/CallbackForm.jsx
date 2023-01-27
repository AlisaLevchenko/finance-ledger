import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../button/Button";
import sprite from "../../images/sprite.svg";
import s from "./CallbackForm.module.scss";

export default function CallbackForm() {
  const schema = Yup.object().shape({
    name: Yup.string().label(),

    email: Yup.string()
      .email("This email is not valid")
      .required("This is a required field"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema: schema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form className={s.form} autoComplete="true" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className={s.nameField} role="group">
          <input
            className={s.formInput}
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
          />
          <label
            htmlFor="name"
            className={`${s.formLabel} ${
              formik.values.name && s[`formInputValid`]
            }`}
          >
            Enter your name
          </label>
        </div>
        <div className={s.emailField} role="group">
          <input
            className={s.formInput}
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <label
            htmlFor="email"
            className={`${s.formLabel} ${
              formik.values.email && s[`formInputValid`]
            }`}
          >
            Enter email*
          </label>
          <div className={s.formError}>
            {formik.touched.email && formik.errors.email && (
              <>
                <svg className={s.FormIcon} width={15} height={15}>
                  <use href={sprite + "#icon-worning"}></use>
                </svg>
                <p className={s.errorDescription}>
                  {formik.touched.email && formik.errors.email}
                </p>
              </>
            )}
          </div>
        </div>
        <Button type="submit" arrow={false} label="Send" fontSize={18} />
      </form>
    </>
  );
}
