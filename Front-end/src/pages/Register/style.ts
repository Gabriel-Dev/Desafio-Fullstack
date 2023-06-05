import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-primary-1);
  overflow: auto;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    color: var(--color-white-1);

    form{
      color: var(--color-primary-1);
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      max-width: 400px;
      border-radius: var(--radius-2);
      padding: 32px;
      background-color: var(--color-white-1);
      label{
        font-size: 16px;
        font-weight: 600;
      }
      h3{
        text-align: center;
      }
    }
  }
    

  @media (min-width: 768px) {
    .container{
        flex-direction: row;
        gap: 64px;
        div{
            h2{
                font-size: 32px;
                max-width: 300px;
            }
        }
    }
  }
`;
