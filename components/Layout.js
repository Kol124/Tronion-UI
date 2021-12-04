import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Body>
        <Header />
        <Container>{children}</Container>
        <Footer>
          See our milestone for use cases, as we plan to reach 1USD per Tronion
          token
        </Footer>
      </Body>
    </div>
  );
}

const Body = styled.main`
  margin: 0 auto 0 auto;
  position: relative;
  max-width: 1200px;
  overflow: auto;

  @media only screen and (max-width: 1200px) {
    padding: 0 12px;
  }
`;

const Container = styled.div`
  padding: 5% 0;
`;

Layout.defaultProps = {
  title: "Tronion",
  description: "Something about Tronion",
  keywords: "etheruem, tronion, nft, crypto, blockchain",
};
