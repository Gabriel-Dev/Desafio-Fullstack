import styled from "styled-components";

export const MenuStyle = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  padding: 32px 16px;
  a{
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
  }

  a:hover {
    color: var(--color-primary-2);
    transition: 0.5s;
    transform: translatey(-2px);
  }

  @media (min-width: 768px) {
   
  
  }
`;
