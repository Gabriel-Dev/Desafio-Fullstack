import { HeaderStyle } from "./styled";
import { MenuContainer } from "../menuContainer"

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
         <MenuContainer/>
      </div>
    </HeaderStyle>
  );
  };
