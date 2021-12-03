import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/Layout";
import styled from "styled-components";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <Error>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">
          <ButtonLink>
            <span> &larr;</span> Go Back Home
          </ButtonLink>
        </Link>
      </Error>
    </Layout>
  );
}

const Error = styled.div`
  text-align: center;
  margin: 100px 0;

  h1 {
    font-size: 50px;
  }

  h4 {
    font-size: 20px;
  }
`;

const ButtonLink = styled.a`
  transition: all 0.2s;
  font-size: 1.8rem;
  padding: 8px;
  border: none;
  color: #000;
  outline: none;
  cursor: pointer;
  margin-bottom: 1rem;
  display: inline-block;

  & span {
    margin-right: 3px;
    transition: margin-right 0.2s;
  }

  &:hover {
    color: rgb(244, 135, 50);

    span {
      margin-right: 10px;
    }
  }

  &:focus {
    outline: none;
  }
`;
