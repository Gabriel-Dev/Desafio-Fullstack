import styled from "styled-components";

export const CreateContact= styled.div`
  .createContact {
    width: 80%;
    max-width: 400px;
    height: 50%;
    overflow: auto;
    padding: 32px 16px;
    height: max-content;
    background-color: var(--color-white-1);

    div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 32px;
      form {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        label {
          text-align: left;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary-2);
          position: relative;
          input {
            margin: 0;
          }
        }
        button {
          background-color: var(--color-primary-1);
          margin-top: 16px;
        }
      }
    }
  }
  @media (min-width: 768px) {

  }
`;
