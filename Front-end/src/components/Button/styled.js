import styled from "styled-components";

export const ButtonStyle = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 45px;
width: 100%;
background: var(--color-secondary);
color: var(--color-white-1);
border-radius: var(--radius-1);
padding: 0 16px;
transition: 1s;
:hover{
    filter: contrast(130%);
}
`