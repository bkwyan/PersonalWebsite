import { createGlobalStyle } from 'styled-components';
import background from '../../images/background.jpg';
import theme from './theme';
const { fontSizes, fonts } = theme;

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std Medium'), local('CircularStd-Medium'),
        url('../fonts/CircularStd-Medium.woff2') format('woff2'),
        url('../fonts/CircularStd-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std Book'), local('CircularStd-Book'),
        url('../fonts/CircularStd-Book.woff2') format('woff2'),
        url('../fonts/CircularStd-Book.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std Medium Italic'), local('CircularStd-MediumItalic'),
        url('../fonts/CircularStd-MediumItalic.woff2') format('woff2'),
        url('../fonts/CircularStd-MediumItalic.woff') format('woff');
        font-weight: 500;
        font-style: italic;
    }
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std Black'), local('CircularStd-Black'),
        url('../fonts/CircularStd-Black.woff2') format('woff2'),
        url('../fonts/CircularStd-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std Bold'), local('CircularStd-Bold'),
        url('../fonts/CircularStd-Bold.woff2') format('woff2'),
        url('../fonts/CircularStd-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std Bold Italic'), local('CircularStd-BoldItalic'),
        url('../fonts/CircularStd-BoldItalic.woff2') format('woff2'),
        url('../fonts/CircularStd-BoldItalic.woff') format('woff');
        font-weight: 700;
        font-style: italic;
    }
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std Book Italic'), local('CircularStd-BookItalic'),
        url('../fonts/CircularStd-BookItalic.woff2') format('woff2'),
        url('../fonts/CircularStd-BookItalic.woff') format('woff');
        font-weight: 400;
        font-style: italic;
    }
    @font-face {
        font-family: 'Circular Std';
        src: local('Circular Std Black Italic'), local('CircularStd-BlackItalic'),
        url('../fonts/CircularStd-BlackItalic.woff2') format('woff2'),
        url('../fonts/CircularStd-BlackItalic.woff') format('woff');
        font-weight: 900;
        font-style: italic;
    }

    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
    }

    body {
        background-image: url(${background});
        background-size: auto;
        min-height: 100%;
        font-family: ${fonts.primary};
    }
`;