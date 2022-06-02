import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import styled from "@emotion/styled";

import background from "../assets/BgRegisterAdmin.png";
import Logo from "../assets/Logo.icon";
import Button from "../Components/Button";
import InputData from "../Components/InputData";

export default function Register() {
  const [isPaswordShown, setIsPasswordShown] = useState(false);
  const _handleClickPassword = () => {
    setIsPasswordShown(!isPaswordShown);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const errorData = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  const RegexPassword = /(?=^.{8,}$)/;
  const [error, setError] = useState(errorData.password);

  const _handleChangePassword = (e) => {
    if (RegexPassword.test(password)) {
      setError(errorData.password);
    } else {
      setError("Password must be at least 8 characters");
    }
    setPassword(e.target.value);
  }

  const _handleRegister = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:3000/register", {
        name: name,
        email: email,
        username: username,
        password: password,
        role: role,
      })
      navigate("/login")
    } catch (error) {
      if(error.response) {
        setMsg(error.response.data.msg)
      }   
    }
  }

  const backgroundImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
  };

  return (
    <RegisterWrap style={backgroundImage}>
        <Logo />
      <RegisterInput onSubmit={_handleRegister}>
        <h1 className="text-2xl font-bold">REGISTER</h1>
        <h4 className="text-left">Create Your Account</h4>
        <p className="has-text-centered">{msg}</p>
        <InputData
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <InputData
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputData
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password">
          <InputData
            type={isPaswordShown ? "text" : "password"}
            name="password"
            value={password}
            placeholder="Password"
            onChange={_handleChangePassword}
          />
          <button className="show-password" onClick={_handleClickPassword}>
            {isPaswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>
        <span className="text-black">{error}</span>
        <Button onClick={_handleRegister}>Register</Button>
        <h4>
          Have an account?{" "}
          <Link to="/login" className="font-bold text-primary-blue">
            Login
          </Link>
        </h4>
      </RegisterInput>
    </RegisterWrap>
  );
}

const RegisterWrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

const RegisterInput = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 40%;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .password {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    width: 100%;
    margin-left: 20px;
  }
`;
