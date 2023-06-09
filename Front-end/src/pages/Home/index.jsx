import { useContext } from "react";
import { Main } from "./style";
import { ImExit } from "react-icons/im";
import { MdContactPage } from "react-icons/md";
import { MdNoteAdd } from "react-icons/md";
import { ClientContext } from "../../contexts/ClientContext";
import { CreateContactModal } from "../../components/Modals/createContact";
import { ContactOptionsModal } from "../../components/Modals/contactOptions";
import { ClientOptionsModal } from "../../components/Modals/clientOptions";

export const Home = () => {
  const { navigate, openModal, setOpenModal, contacts, client }=
    useContext(ClientContext);
  
  return (
    <>
      <Main>
        <div className="mainTitle">
          <h1>
            Bem vindo {client.name}
            <ImExit
              className="exit button"
              onClick={() => {
                navigate("/");
                window.localStorage.clear();
              }}
            />
          <p onClick={()=>{setOpenModal(<ClientOptionsModal/>)}}>editar perfil</p>
          </h1>
        </div>
        <div className="container">
          <div className="contactTitle">
            <h2>Contatos</h2>
            <MdNoteAdd
              className="button"
              onClick={() => {
                setOpenModal(<CreateContactModal />);
              }}
            />
          </div>
          <ul>
            {contacts && contacts.map((contact) => (
              <li
                key={contact.id}
                className="opacity"
                onClick={() => {
                  setOpenModal(<ContactOptionsModal contact={contact}/>);
                }}
              >
                <MdContactPage />
                <p>{contact.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </Main>
      {openModal ? openModal : null}
    </>
  );
};
