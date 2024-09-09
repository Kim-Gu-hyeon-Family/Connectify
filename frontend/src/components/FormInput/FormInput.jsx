import React from "react";
import styles from './FormInput.module.css';

const FormInput = ({ label, type, value, onChange }) => (
  <div className={styles.inputContainer}>
    <label htmlFor={`input-${label}`} className={styles.label}>{label}</label>
    <input
      id={`input-${label}`}
      type={type}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </div>
);

export default FormInput;
