import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {Link} from "react-router-dom";
import {gql, useMutation} from "@apollo/client"
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

import Logo from "../assets/Logo.icon";
import Button from "../Components/Button";
import InputData from "../Components/InputData";

const insertDataUserByRegister = gql`
mutation mutationInsertData($email: String!, $name: String!, $password: String!, $username: String!) {
  insert_user_data(objects: {email: $email, name: $name, password: $password, username: $username}) {
    returning {
      email
      id
      name
      password
      username
    }
  }
}
`

export default function Register() {
  const [isPaswordShown, setIsPasswordShown] = useState(false);
  const _handleClickPassword = () => {
    setIsPasswordShown(!isPaswordShown);
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const errorData = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  const RegexPassword = /(?=^.{8,}$)/;
  const [error, setError] = useState(errorData.password);

  const _handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "password") {
      if (!RegexPassword.test(value)) {
        setError("Must be at least 8 characters.");
      } else {
        setError("");
      }
    }
    setData({
      ...data,
      [name]: value,
    });
  };

  const [insertDataUser, {data: dataInsert}] = useMutation(insertDataUserByRegister)

  const insertUser = (event) => {
    if(data.name && data.email && data.username && data.password){
      insertDataUser({
        variables: {
          id: uuidv4(),
          name: data.name,
          email: data.email,
          username: data.username,
          password: data.password,
        }
      })
      if(error === "") {
        alert("Registrasi berhasil")
      } else{
        alert("Registrasi gagal")
      }

      event.preventDefault();

      console.log(data);
      setData({
        name: "",
        email: "",
        username: "",
        password: "",
      })
    } else {
      alert("Email, name, password, and username not empty")
    }
  }

  return (
    <RegisterWrap>
      <RegisterImage></RegisterImage>
      <RegisterInput onSubmit={() => insertUser()}>
        <Logo />
        <h4 className="text-left">Create Your Account</h4>
        <InputData
          type="text"
          name="name"
          value={data.name}
          placeholder="Name"
          onChange={_handleChangeInput}
        />
        <InputData
          type="email"
          name="email"
          value={data.email}
          placeholder="Email"
          onChange={_handleChangeInput}
        />
        <InputData
          type="text"
          name="username"
          value={data.username}
          placeholder="Username"
          onChange={_handleChangeInput}
        />
        <div className="password">
          <InputData
            type={isPaswordShown ? "text" : "password"}
            name="password"
            value={data.password}
            placeholder="Password"
            onChange={_handleChangeInput}
          />
          <button className="show-password" onClick={_handleClickPassword}>
            {isPaswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>
        <span className="text-black">{error}</span>
        <Button onClick={() => insertUser()}>Register</Button>
        <h4>Have an account? <Link to="/login" className="font-bold">Login</Link></h4>
      </RegisterInput>
    </RegisterWrap>
  );
}

const RegisterWrap = styled.div`
  display: flex;
  padding: 30px;
`;
const RegisterImage = styled.div`
  width: 50%;
`;
const RegisterInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 50%;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  padding: 10px;

  .password {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    width: 100%;
    margin-left: 20px;
  }
`;
