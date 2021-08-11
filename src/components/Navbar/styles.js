import styled from 'styled-components';

export const Container = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #c7ffe0;
    z-index: 2;
    li span {
        text-decoration: none;
        color: #f5f5f5;
        font-size: 24px;
        font-weight: bolder;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
    }
    .middle{
        display:flex;
        column-gap: 3rem;
        justify-content: space-between;
        margin-top: 20px;
    }
    .middle a{
        text-decoration: none;
        color: black;
        size: 2rem;

    }
    .logo a{
        display: flex;
        height: 4rem;
        img {
            margin-left: 20px;
            margin-top: 8px;
            height: 3rem;
        }
    }
        
    .menu-bars {
    margin-right: 2rem;
    margin-top: 1rem;
    font-size: 2rem;
    background: none;
    }
    .nav-menu {
    background-color: #1E2535;
    width: 250px;
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    opacity: 70%;
    }
    .nav-menu.active {
    right: 0;
    transition: 350ms;
    }
    .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    min-height: 60px;
    }
    .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    min-height: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    }
    .nav-text a:hover {
    background-color: #1a83ff;
    }
    .nav-menu-items {
    width: 100%;
    }
    .navbar-toggle {
    background-color: #1E2535;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    }
    span {
    margin-right: 16px;
    }
   
    .nav-menu-right {
    background-color: #1E2535;
    width: 250px;
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    }
    .nav-menu-right.active {
    right: 0;
    transition: 350ms;
    }
    
    .hide{
        display: none;
    }
    
 
    
`;