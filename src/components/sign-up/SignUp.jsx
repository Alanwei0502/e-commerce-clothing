import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, createUserProfileDocument } from "../../config/firebase.utils";
import { useUserSignUpInfo } from "./SignUpHooks";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import "./SignUp.styles.scss";

const SignUp = () => {
  const [
    { displayName, email, password, confirmPassword },
    setFormInput,
    resetForm,
  ] = useUserSignUpInfo();

  const handleSubmit = (e) => {
    e.preventDefault();
    password !== confirmPassword && alert("Passwords don't match.");

    try {
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        createUserProfileDocument(auth.currentUser, { displayName });
        resetForm();
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          required
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={setFormInput("displayName")}
        />
        <FormInput
          required
          type="text"
          name="email"
          label="Email"
          value={email}
          onChange={setFormInput("email")}
        />
        <FormInput
          required
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={setFormInput("password")}
        />
        <FormInput
          required
          type="password"
          name="confirmPassword"
          label="Comfirm Password"
          value={confirmPassword}
          onChange={setFormInput("confirmPassword")}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
