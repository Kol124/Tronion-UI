import Link from "next/link";
import Image from "next/image";
import { Button } from "./common";
import styled from "styled-components";
// import AuthContext from "@/context/AuthContext";

export default function Header() {
  return (
    <Navigation>
      <Logo>
        <Image
          src="/tronion-logo.png"
          alt="Tronion Logo"
          width={38}
          height={38}
        />
        <Link href="/">
          <span>Tronion</span>
        </Link>
      </Logo>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Our Team</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>

      <Link href="/account/login">
        <Button>Login</Button>
      </Link>
    </Navigation>
  );
}

const Navigation = styled.header`
  display: flex;
  color: ${(p) => p.theme.fontPrimary};
  align-items: center;
  padding: 20px 0;

  /* @media (max-width: 1024px) {
    padding: 0 10px;
    justify-content: space-between;
  } */

  nav > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 45%;
    list-style: none;

    > li {
      font-weight: 700;
      transition: 0.3s ease;
      letter-spacing: 0.22em;

      &:not(:last-of-type) {
        margin-right: 2rem;
      }

      a {
        font-size: 15px;
        color: ${(p) => p.theme.fontPrimary};

        :hover {
          color: rgb(244, 135, 50);
        }
      }
    }
  }
`;

const Logo = styled.div`
  display: flex;
  flex-basis: 40%;
  align-items: center;

  span {
    font-size: 29px;
    margin-left: 2px;
    text-transform: capitalize;
    cursor: pointer;
  }
`;
