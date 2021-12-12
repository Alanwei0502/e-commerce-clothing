import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
  signInWithGoogle,
  signInByEmailAndPassword,
} from "../../config/firebase.utils";
import "./SignIn.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="sign-in">
      <h2 className="title"> I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          required
          label="email"
          type="email"
          name="email"
          value={email}
          handleChange={handleChangeEmail}
        />
        <FormInput
          required
          label="password"
          type="password"
          name="password"
          value={password}
          handleChange={handleChangePassword}
        />
        <div className="buttons">
          <CustomButton
            type="submit"
            onClick={() => signInByEmailAndPassword(email, password)}
          >
            Sign In
          </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
