import { useState, useEffect, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import Layout from "@/components/Layout";
// import AuthContext from "@/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged In!!!");
  };

  return (
    <Layout title="User Login">
      <Login>
        <h1>
          <FaUser /> Log In
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>

          <Button type="submit">Login</Button>
        </form>

        <p>
          Don't have an account? <Link href="/account/register">Register</Link>
        </p>
      </Login>
    </Layout>
  );
}

const Login = styled.div`
  max-width: 50rem;
  margin: 2rem auto;
  background-color: #f6f6f6;
  padding: 3rem 3rem 2.5rem 3rem;
  box-shadow: 0.5rem 1rem 1.3rem rgba(220, 220, 220, 0.4);

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  p {
    margin-top: 1.4rem;
    font-size: 1.5rem;
    text-align: center;

    a {
      color: rgb(244, 135, 50);
    }
  }
`;

const InputContainer = styled.section`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  label {
    font-size: 1.6rem;
    font-weight: 500;
    display: block;
    transition: all 0.3s;
    margin-bottom: 7px;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    display: block;
    width: 100%;
    height: 4rem;
    padding: 5px;
    color: inherit;
    display: block;
    font-size: 1.4rem;
    border-radius: 2px;
    font-family: inherit;
    padding: 1.5rem 2rem;
    transition: all 0.3s;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    border-bottom: 1px solid transparent;

    &:focus {
      outline: none;
      background-color: #fff;
      border-bottom: 1px solid #aaa;
    }

    &:focus:invalid {
      border-bottom: 1px solid #aaa;
    }

    &::-webkit-input-placeholder {
      color: #f1f1f1;
    }
  }
`;

const Button = styled.button`
  border: none;
  font: inherit;
  color: #f9f9f9;
  font-size: 1.4rem;
  border-radius: 2px;
  background-color: rgb(244, 135, 50);
  transition: 0.2s ease;
  padding: 7px 12px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: #f9f9f9;
    color: rgb(244, 135, 50);
  }
`;
