import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;

    @media (max-width: 492px) {
        .middle {
            gap: 1rem !important;
        }

        
    }

    
    .middle {
        display: flex;
        justify-content: space-around;
        gap: 3rem;
        margin: auto;


        .li-nav {
            position: relative;
            text-decoration: none;
            color: black;
            font-weight: 500;
            padding: 10px;

            :after {
                content: "";
                position: absolute;
                background-color: #1E2535;
                height: 3px;
                width: 0;
                left: 0;
                bottom: -10px;
                transition: 0.3s;
            }

            :hover:after {
                width: 100%;
            }
        }

    }


    .logo a {
        display: flex;
        height: 4rem;
        padding: 0 1.5rem;
        align-items: center;
        img {
            height: 3rem;
        }
    }
        
    .menu-bars {
        padding: 0 1.5rem;
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
        opacity: 80%;
        z-index:1;
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