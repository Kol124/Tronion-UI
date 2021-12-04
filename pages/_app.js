import { darkTheme } from "utils/theme";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "@/context/AuthContext";
import { GlobalStyle } from "utils/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
