import { ModalBackgroundStyle } from "./styled";
import { useContext } from "react";
import { ClientContext } from "../../../contexts/ClientContext";

export const ModalBackground = ({ children, size }: any) => {
  const { setOpenModal }: any =
    useContext(ClientContext);

  return (
    <ModalBackgroundStyle className="closeModal"
      onClick={(e: any) =>
        e.target.className.includes("closeModal") ? setOpenModal(false): null
      }
    >
      <div className={"modal opacity-2 " + size}>
        <span
          className="close"
          onClick={() => {setOpenModal(false)}}
        >
          x
        </span>
        {children}
      </div>
    </ModalBackgroundStyle>
  );
};
