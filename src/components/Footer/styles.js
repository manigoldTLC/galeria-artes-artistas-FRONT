import styled from 'styled-components';

export const Container = styled.footer`

footer {
   display:flex;
   justify-content: space-between ;
   position:absolute;
   bottom:0;
   width:100%;
   height:80px;   /* Height of the footer */
   background:#6cf;
   font-size: 0.6rem;
   font-family: robotto;
  
  }
  .left-footer{
        display:flex;
        justify-content: space-between;
        margin-left: 1rem;
        font-size: 0.6rem;
  }
  .left-footer h1{
      margin-left: 3.7rem;
      margin-top: 1.3rem;

  }
  .left-footer h2{
      margin-left: 5rem;
      margin-top: 2.5rem;

  }
  .right-footer{
        display:flex;
        justify-content: space-between;
        margin-right: 1rem;
        font-size: 0.6rem;
  }
  .right-footer h3{
      margin-top: 2.5rem;
      margin-right: 5rem;
      font-size: 1.2rem;
      font-style: italic;
      text-decoration: whitesmoke;
      text-decoration:underline;
  }
  .right-footer h4{
      font-size: 1.2rem;
      margin-right: 3.7rem;
      margin-top: 1.3rem;
  }
  img {
      margin-top: 1rem;
      height:3.6rem;  
  }
  `;