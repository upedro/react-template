import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #885ffF;
        height: 100%;

        #root {
            height: 100%;
        }

        p, h1, h2, h3, li, ul, a {
            margin: 0;
            padding: 0;
            list-style: none;
            text-decoration: none;
            color: #fff;
        }
    }
`