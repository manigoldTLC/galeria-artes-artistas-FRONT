import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 7px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #a5aaad;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: rgb(46, 122, 192);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #a5aaad;
    }

`;