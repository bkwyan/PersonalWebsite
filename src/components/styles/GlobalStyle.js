import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import EuropaWoff from '../../fonts/Europa-Regular.woff';
import EuropaWoff2 from '../../fonts/Europa-Regular.woff2';
import RobotoWoff from '../../fonts/Roboto.woff';
import RobotoWoff2 from '../../fonts/Roboto.woff2';
import LatoWoff from '../../fonts/Lato.woff';
import LatoWoff2 from '../../fonts/Lato.woff2';
import MontserratWoff from '../../fonts/Montserrat.woff';
import MontserratWoff2 from '../../fonts/Montserrat.woff2';
import PlayfairDisplayWoff from '../../fonts/PlayfairDisplay.woff2';
import PlayfairDisplayWoff2 from '../../fonts/PlayfairDisplay.woff2';
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

    @font-face {
        font-family: "Lato"; 
        src: local('Lato'), local('Lato'),
        url(${LatoWoff}) format('woff'),
        url(${LatoWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat"; 
        src: local('Montserrat'), local('Montserrat'),
        url(${MontserratWoff}) format('woff'),
        url(${MontserratWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "PlayfairDisplay"; 
        src: local('PlayfairDisplay'), local('PlayfairDisplay'),
        url(${PlayfairDisplayWoff}) format('woff'),
        url(${PlayfairDisplayWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    html,
    body {
        //background-color: ${colors.raisinBlack};
        margin: 0;
    }
`;