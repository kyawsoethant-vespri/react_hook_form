"use client";
import React from "react";
import Styles from "./page.module.css";
import { useForm } from "react-hook-form";

const YoutubeForm = () => {
  interface formValues {
    username: string;
    email: string;
    channel: string;
  }

  const form = useForm({
    defaultValues: {
      username: "Spiderman",
      email: "",
      channel: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const submitHandler = (data: formValues) => {
    console.log("Form Submitted Data", data);
  };

  return (
    <>
      <form
        className={Styles.formContainer}
        onSubmit={handleSubmit(submitHandler)}
        noValidate
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className={Styles.input}
            {...register("username", {
              required: {
                value: true,
                message: "UserName is required",
              },
            })}
          />
          <p className={Styles.error}>{errors.username?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={Styles.input}
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid Email format",
              },
              validate: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },
            })}
          />
          <p className={Styles.error}>{errors.email?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            className={Styles.input}
            {...register("channel", {
              required: {
                value: true,
                message: "Channel is required",
              },
            })}
          />
          <p className={Styles.error}>{errors.channel?.message}</p>
        </div>

        <button className={Styles.button}>Submit</button>
      </form>
    </>
  );
};

export default YoutubeForm;
