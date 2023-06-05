import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white-1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid black;
  color: var(--color-primary-1);
  position: sticky;
  top: 0;
  left: 0;

  .container {
    width: 1440px;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 16px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
