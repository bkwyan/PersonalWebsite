import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import EuropaWoff from '../../fonts/Europa-Regular.woff';
import EuropaWoff2 from '../../fonts/Europa-Regular.woff2';
import RobotoWoff from '../../fonts/Roboto.woff';
import RobotoWoff2 from '../../fonts/Roboto.woff2';
const { colors } = theme;

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Europa"; 
        src: local('Europa'), local('Europa'),
        url(${EuropaWoff}) format('woff'),
        url(${EuropaWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "Roboto"; 
        src: local('Roboto'), local('Roboto'),
        url(${RobotoWoff}) format('woff'),
        url(${RobotoWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    html,
    body {
        background-color: ${colors.raisinBlack};
        margin: 0;
    }
`;