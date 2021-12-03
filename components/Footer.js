import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <FooterText>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <p>
          <Link href="/about">About This Project</Link>
        </p>
        <p>Copyright &copy; Tronion 2022</p>
      </FooterText>
    </Foot>
  );
}

const Foot = styled.footer`
  background: #f6f6f6;
  position: relative;
  width: 100%;
  clear: both;
  margin-top: 2rem;
  text-align: center;
  padding: 1.2rem 0.7rem 0;

  a {
    margin-top: 2rem;
    color: #333;
  }

  p {
    font-size: 1.5rem;
    margin: 5px 0 0;
  }
`;

const FooterImages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  padding: 2rem 0 3.2rem 0;
  flex-wrap: wrap;
  margin: 0 auto;

  & > * {
    margin-right: 4rem !important;

    @media only screen and (max-width: 480px) {
      margin-bottom: 2rem !important;
    }
  }
`;

const FooterText = styled.section`
  padding: 3rem 0.5rem 0;
`;
