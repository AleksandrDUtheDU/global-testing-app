import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

ul,
li,
dl {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: inherit;
    display: inline-block;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}


p {
    margin: 0;
    padding: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`
