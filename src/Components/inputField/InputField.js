import { ErrorMessage, useField } from "formik";
import React from "react";
import "./inputfield.css";
const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="inputFieldWrapper">
        <input
          autoComplete="off"
          className={`${meta.touch && meta.error}`}
          {...field}
          {...props}
        />
        <p className="error">
          <ErrorMessage name={field.name} />
        </p>
      </div>
    </div>
  );
};

export default InputField;
