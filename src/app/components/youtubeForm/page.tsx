"use client";
import React from "react";
import Styles from "./page.module.css";
import { useForm } from "react-hook-form";

const YoutubeForm = () => {
  const form = useForm();
  const { register } = form;

  return (
    <div>
      <form className={Styles.formContainer}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className={Styles.input}
          {...register("username")}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          className={Styles.input}
          {...register("email")}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          className={Styles.input}
          {...register("channel")}
        />

        <button className={Styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
