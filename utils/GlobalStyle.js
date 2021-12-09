import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: "Nunito", sans-serif;
  }

  body {
    height: 100%;
    font-size: 14px;
    line-height: 1.8;
    font-family: "Nunito", sans-serif;
    color: ${(p) => p.theme.fontPrimary};
    background-color: ${(p) => p.theme.bodyBackground};
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: 0.2s ease;
  }

  .line-height-sm {
    line-height: 22px;
  }

  /* ============= MARGINS ============= */
  /* X and Y */
  .u-margin-large {
    margin: 3rem !important;
  }
  .u-margin-medium {
    margin: 1.5rem !important;
  }
  .u-margin-small {
    margin: 10px !important;
  }
  .u-margin-xsmall {
    margin: 5px !important;
  }

  /* Margin X */
  .u-margin-x-large {
    margin: 0 3rem !important;
  }
  .u-margin-x-medium {
    margin: 0 1.5rem !important;
  }
  .u-margin-x-small {
    margin: 0 10px !important;
  }
  .u-margin-x-xsmall {
    margin: 0 5px !important;
  }

  /* Margin Y */
  .u-margin-y-large {
    margin: 3rem 0 !important;
  }
  .u-margin-y-medium {
    margin: 1.5rem 0 !important;
  }
  .u-margin-y-small {
    margin: 10px 0 !important;
  }
  .u-margin-y-xsmall {
    margin: 5px 0 !important;
  }

  /* Margin Top */
  .u-margin-top-large {
    margin-top: 3rem !important;
  }
  .u-margin-top-medium {
    margin-top: 1.5rem !important;
  }
  .u-margin-top-small {
    margin-top: 10px !important;
  }
  .u-margin-top-xsmall {
    margin-top: 5px !important;
  }

  /* Margin Bottom */
  .u-margin-bottom-large {
    margin-bottom: 3rem !important;
  }
  .u-margin-bottom-medium {
    margin-bottom: 1.5rem !important;
  }
  .u-margin-bottom-small {
    margin-bottom: 10px !important;
  }
  .u-margin-bottom-xsmall {
    margin-bottom: 5px !important;
  }
`;
