import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Heading, CircleIcon } from "./common";
import { useRouter } from "next/router";

const DashboardSidebar = () => {
  const router = useRouter();

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
        <li className={router.pathname == "/dashboard/tasks" ? "active" : ""}>
          <CircleIcon />
          <Link href="/dashboard/tasks">
            <a>Tasks</a>
          </Link>
        </li>
        <li className={router.pathname == "/dashboard/airdrop" ? "active" : ""}>
          <CircleIcon />
          <Link href="/dashboard/airdrop">
            <a>Claim Airdrop</a>
          </Link>
        </li>
        <li className={router.pathname == "/dashboard/ico" ? "active" : ""}>
          <CircleIcon />
          <Link href="/dashboard/ico">
            <a>ICO (coming soon)</a>
          </Link>
        </li>
      </ul>
    </Navigation>
  );
};

const Navigation = styled.aside`
  border-radius: 45px;
  position: fixed;
  display: block;
  height: 100%;
  left: -25px;
  top: 0;
  width: 30%;
  z-index: 1000;
  overflow: hidden;
  transition: 0.3s ease;
  padding: 20px 0 30px 70px;
  background: ${(p) => p.theme.backgroundPrimary};

  @media only screen and (max-width: 1200px) {
    .h1 {
      font-size: 30px;
    }

    & > ul > li {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    position: static;
    margin-bottom: 2rem;
    padding: 0 10px 0 10px;
  }

  .h1 {
    margin-bottom: 1rem;

    @media only screen and (max-width: 1024px) {
      margin-top: 1rem;
      text-align: center;
    }
  }

  & > ul {
    display: block;
    list-style: none;

    @media only screen and (max-width: 1024px) {
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: space-between;
      max-width: 760px;
      margin: 0 auto;
    }

    > li {
      display: flex;
      font-size: 22px;
      align-items: center;
      transition: 0.3s ease;
      cursor: pointer;
      padding: 18px 0;

      &.active {
        position: relative;
        background: ${(p) => p.theme.bodyBackground};

        ${CircleIcon} {
          z-index: 100;
          background: rgba(128, 128, 128, 0.18);
        }

        &:after {
          position: absolute;
          content: "";
          width: 15%;
          top: 0;
          left: -25px;
          height: 100%;
          border-radius: 50%;
          background: ${(p) => p.theme.bodyBackground};
        }

        @media only screen and (max-width: 1024px) {
          background: none;

          &:after {
            display: none;
          }
        }
      }

      :hover {
        ${CircleIcon} {
          background: rgba(128, 128, 128, 0.18);
        }
      }

      @media only screen and (max-width: 1024px) {
        padding: 10px 0;
        text-align: center;
        letter-spacing: -0.05em;

        :hover {
          background: inherit;
        }
      }

      @media only screen and (max-width: 480px) {
        font-size: 16px;
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

  @media only screen and (max-width: 1024px) {
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
