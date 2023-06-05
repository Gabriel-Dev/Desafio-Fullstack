import { MenuStyle } from "./styled";
import { Link } from "react-router-dom";

export const MenuContainer = () => {
  return (
    <MenuStyle>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={"/"}
      >
        Login
      </Link>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={"/register"}
      >
        Registro
      </Link>
    </MenuStyle>
  );
};
