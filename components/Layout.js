import Head from "next/head";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import { Radial } from "./common";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Body>
        <Header />
        <Container>{children}</Container>
        {router.pathname !== "/" && (
          <Radial>
            <Image
              src="/images/radial-bg.png"
              alt="Radial Overlay"
              objectFit="contain"
              width={904}
              height={648}
            />
          </Radial>
        )}
        <Footer>
          See our milestone for use cases, as we plan to reach 1USD per Tronion
          token
        </Footer>
      </Body>
    </div>
  );
}

const Body = styled.main`
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 1200px) {
    padding: 0 12px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  min-height: 75vh;
  max-width: 1200px;
  padding: 5% 0;
`;

Layout.defaultProps = {
  title: "Tronion",
  description: "Something about Tronion",
  keywords: "etheruem, tronion, nft, crypto, blockchain",
};
