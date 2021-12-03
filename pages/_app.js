// import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme } from "utils/theme";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

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
    line-height: 1.8;
    font-family: "Nunito", sans-serif;
    background-color: ${(p) => p.theme.bodyBackground};
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
