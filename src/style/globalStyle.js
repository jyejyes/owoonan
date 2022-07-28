// 전역-스타일 모음
import { createGlobalStyle } from "styled-components";
import "./reset.css";
import SDSamliphopangche from "./fonts/SDSamliphopangche.ttf";
import NotoSansKR_Regular from "./fonts/NotoSansKR-Regular.otf";
import SEBANG_Gothic from "./fonts/SEBANG_Gothic.ttf";

export const GlobalStyle = createGlobalStyle`   
    /* @font-face {
        font-family: 'LeferiPoint-WhiteA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    } */
    @font-face {
        font-family: "NotoSansKR_Regular";
        src: url(${NotoSansKR_Regular}) format("opentype");

    }
    @font-face {
        font-family: "SDSamliphopangche";
        src: url(${SDSamliphopangche}) format("truetype");

    }
    @font-face {
        font-family: "SEBANG_Gothic";
        src: url(${SEBANG_Gothic}) format("truetype");

    }

    html{
        /* font-family: 'LeferiBaseType-RegularA'; */
        font-size: 62.5%;
        width:100%;
        height:100%;
    }
    
`;
