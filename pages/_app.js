// import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme } from "utils/theme";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: "Nunito", sans-serif;
  }

  body {
    height: 100%;
    font-size: 13px;
    line-height: 1.8;
    font-family: "Nunito", sans-serif;
    color: ${(p) => p.theme.fontPrimary};
    background-color: ${(p) => p.theme.bodyBackground};
  }

  a {
    text-decoration: none;
    transition: 0.2s ease;
  }

  /* @media (max-width: 768px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 40%;
    }
  } */
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
