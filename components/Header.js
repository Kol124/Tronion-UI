import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./common";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navigation>
      <Logo>
        <Image
          src="/images/tronion-logo.png"
          alt="Tronion Logo"
          width={38}
          height={38}
        />
        <Link href="/">
          <span>Tronion</span>
        </Link>
      </Logo>

      <NavList open={menuOpen}>
        <Close
          size={20}
          onClick={() => setMenuOpen((prevState) => !prevState)}
        />
        <ul>
          <li>
            <Link href="/features">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>Our Team</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <Overlay open={menuOpen} />
      </NavList>

      <Link href="/account/login">
        <Button className="primary">Login</Button>
      </Link>

      <Bars size={20} onClick={() => setMenuOpen((prevState) => !prevState)} />
    </Navigation>
  );
}

const Navigation = styled.header`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  color: ${(p) => p.theme.fontPrimary};
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Bars = styled(FaBars)`
  display: none;
  cursor: pointer;
  margin-left: 10px;
  fill: ${(p) => p.theme.fontPrimary};

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Close = styled(FaTimes)`
  display: none;
  cursor: pointer;
  margin: 0 0 30% auto;
  fill: ${(p) => p.theme.fontPrimary};

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 29px;
    margin-left: 2px;
    text-transform: capitalize;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    flex-basis: 55%;
  }
`;

const NavList = styled.nav`
  transition: 0.3s ease;

  @media only screen and (max-width: 768px) {
    right: ${(p) => (p.open ? 0 : "-275px")};
    position: fixed;
    display: block;
    height: 100%;
    top: 0;
    width: 275px;
    z-index: 1000;
    overflow: hidden;
    padding: 40px 30px;
    background: ${(p) => p.theme.backgroundPrimary};
  }

  & > ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
      display: block;
    }

    > li {
      font-size: 15px;
      transition: 0.3s ease;
      letter-spacing: 0.22em;

      &:not(:last-of-type) {
        margin-right: 2rem;
      }

      @media only screen and (max-width: 768px) {
        font-size: 23px;
        padding: 12px 0;
        text-align: center;
        letter-spacing: -0.05em;
        border-bottom: 1px solid rgba(134, 132, 132, 0.5);

        &:not(:last-of-type) {
          margin-right: 0;
        }

        &:first-of-type {
          border-top: 1px solid rgba(134, 132, 132, 0.5);
        }
      }

      a {
        color: ${(p) => p.theme.fontPrimary};

        :hover {
          color: ${(p) => p.theme.accent};
        }
      }
    }
  }
`;

const Overlay = styled.div`
  visibility: ${(p) => (p.open ? "visible" : "hidden")};
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.6);
  opacity: ${(p) => (p.open ? 1 : 0)};
`;
