import styled from "styled-components";

export const ModalBackgroundStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

position: fixed;
top: 0;
left: 0;
z-index: 3;

background-color: var(--color-grey-05);

.modal{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    border-radius: var(--radius-2);
    padding: 16px;

    text-align: center;
   

    .close{
        font-size: 24px;
        position: absolute;
        top: 8px;
        right: 24px;
        cursor: pointer;
    }
}
`