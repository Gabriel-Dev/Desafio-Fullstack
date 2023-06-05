import { useContext } from "react";
import { Main } from "./style";
import { ImExit } from "react-icons/im"
import { MdContactPage } from "react-icons/md"
import { MdNoteAdd } from "react-icons/md"
import { ClientContext } from "../../contexts/ClientContext";
import { CreateContactModal } from "../../components/Modals/createContact";
import { ContactOptionsModal } from "../../components/Modals/contactOptions";


export const Home = () => {
  const { navigate, openModal, setOpenModal}: any = useContext(ClientContext);

  return (
    <>
      <Main>
        <div className="mainTitle">
          <h1>Bem vindo {"name"}
            <ImExit className="exit button" onClick={()=>{navigate("/")}}/>
          </h1>
        </div>
        <div className="container">
            <div className="contactTitle">
              <h2>Contatos</h2>
              <MdNoteAdd className="button" onClick={()=>{setOpenModal(<CreateContactModal/>)}}/>
            </div>
          <ul>
            <li className="opacity" onClick={()=>{setOpenModal(<ContactOptionsModal/>)}}>
              <MdContactPage/>
              <p>name</p>
            </li>
          </ul>
        </div>
      </Main>
      {openModal ? openModal : null}
    </>
  );
};
