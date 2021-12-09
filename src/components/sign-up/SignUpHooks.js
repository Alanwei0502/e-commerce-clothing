import { useState } from "react";

export const useUserSignUpInfo = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const setFormInput = (name) => (e) => {
    switch (name) {
      case 'displayName':
        return setDisplayName(e.target.value);
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      case 'confirmPassword':
        return setConfirmPassword(e.target.value);
      default:
        return;
    }
  }

  const userInfo = { displayName, email, password, confirmPassword };
  return [
    userInfo,
    setFormInput,
    resetForm,
  ];
};