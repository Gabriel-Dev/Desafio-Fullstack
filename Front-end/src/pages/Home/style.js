import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-secondary);
  color: var(--color-white-2);
  overflow: auto;

  .button{
      font-size: 24px;
      cursor: pointer;
    }

    .button:hover {
      color: var(--color-primary-2);
      transition: 0.5s;
    }
    
  .mainTitle {
    width: 100%;
    height: 100px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1),
      inset 0px 4px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;

    h1 {
      position: relative;
      width: 1440px;
      font-size: 24px;
    }
    .exit {
      position: absolute;
      top: 8px;
      right: 0px;
    }
    p{
      font-size: 14px;
      font-weight: 400;
      position: relative;
      top: 4px;
      cursor: pointer;
    }

    p:hover{
      color: var(--color-primary-2);
      transition: 0.2s;
      transform: translatey(-2px);
    }
  }

  .container {
    width: 100%;
    height: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    position: relative;

    .contactTitle{
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;
      gap: 32px;
      svg{
        position: relative;
        top: 1px;
        font-size: 24px;
        cursor: pointer;
      }
    }
  }

  ul {
    width: 100%;
    max-height: 70%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow: auto;
    border-left: 1px solid var(--color-white-1);
    padding: 16px;
    li {
      width: max-content;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      svg {
        font-size: 20px;
      }
    }

    li:hover {
      color: var(--color-primary-2);
      transition: 0.2s;
      transform: translatey(-2px);
    }

   
  }
  @media (min-width: 768px) {
  }
`;
