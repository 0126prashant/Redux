import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((store) => {
    return store.authReducer;
  });
  console.log(auth);
  const handleLogin = () => {
    let loginData = { email, password };
    dispatch(login().loginRequest());
    axios
      .post("https://reqres.in/api/login", loginData)
      .then((res) => {
        dispatch(login().loginSuccess(res.data.token));
      })
      .catch(() => {
        dispatch(login().loginFailure());
      });
    setPassword("");
    setEmail("");
  };

  return (
    <DIV>
      <h2>Log In</h2>
      <input
        data-testid="user-email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        data-testid="user-password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button data-testid="user-login" onClick={handleLogin}>
        Log In
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
