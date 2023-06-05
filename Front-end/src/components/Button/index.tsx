import { useContext } from "react";
import { ButtonStyle } from "./styled";
import { ImSpinner2 } from "react-icons/im"
import { ClientContext } from "../../contexts/ClientContext";

export const Button = ({ type, name, onClick, className}: any) => {
  const { spinner }: any = useContext(ClientContext);
  
  return (
    <ButtonStyle
      type={type}
      onClick={onClick ? onClick : null}
      className={className}
    >
      {spinner ? <ImSpinner2 className="spinner"/>: name}
    </ButtonStyle>
  );
};
