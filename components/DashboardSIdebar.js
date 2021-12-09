import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Heading, Button } from "./common";

const DashboardSidebar = () => {
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
      <Heading className="h1">Dashboard</Heading>
      <ul>
        <li>
          <Link href="/dashboard/task">
            <a>Tasks</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/airdrop">
            <a>Claim Airdrop</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/ico">
            <a>ICO (coming soon)</a>
          </Link>
        </li>
      </ul>
    </Navigation>
  );
};

const Navigation = styled.aside`
  transition: 0.3s ease;
  margin-bottom: 2rem;

  @media only screen and (min-width: 1199px) {
    border-radius: 45px;
    position: fixed;
    display: block;
    height: 100%;
    left: -25px;
    top: 0;
    width: 30%;
    z-index: 1000;
    overflow: hidden;
    padding: 20px 0 30px 60px;
    background: ${(p) => p.theme.backgroundPrimary};
  }

  .h1 {
    @media only screen and (max-width: 1199px) {
      text-align: center;
    }
  }

  & > ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    max-width: 760px;
    margin: 0 auto;

    @media only screen and (min-width: 1200px) {
      display: block;
    }

    > li {
      font-size: 20px;
      transition: 0.3s ease;
      letter-spacing: 0.22em;
      cursor: pointer;
      padding: 18px;

      :hover {
        background: ${(p) => p.theme.bodyBackground};
      }

      @media only screen and (max-width: 1200px) {
        padding: 12px 0;
        font-size: 15px;
        text-align: center;
        letter-spacing: -0.05em;

        :hover {
          background: inherit;
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

const Logo = styled.div`
  display: flex;
  max-width: 150px;
  align-items: center;
  margin: 0 auto 4rem auto;

  @media only screen and (max-width: 1200px) {
    display: none;
  }

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

export default DashboardSidebar;
