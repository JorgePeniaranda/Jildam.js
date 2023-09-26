"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import style from "./style.module.scss";

export const ShowSecretPassword = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onClick = () => setShowPassword(!showPassword);

  return (
    <div className={style.passwordContainer}>
      <span>{showPassword ? password : "••••••••"}</span>
      {showPassword ? (
        <FiEye name="show" onClick={() => onClick()} />
      ) : (
        <FiEyeOff name="hidden" onClick={() => onClick()} />
      )}
    </div>
  );
};
