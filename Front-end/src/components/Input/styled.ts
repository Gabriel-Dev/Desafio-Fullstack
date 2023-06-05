import styled from "styled-components";

export const Label = styled.label`
position: relative;
input{
    width: 100%;
    height: 45px;
    background: var(--color-white-1);
    border: 1px solid var(--color-grey-0);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 0 16px;
    margin-top: 8px;
    
    ::placeholder{
        color: var(--color-grey-05);
    }
}
.error{
    width: 100%;
    height: 16px;
    padding: 8px;

    position: absolute;
    
    color: var(--color-negative);
    font-size: 14px;
}
`