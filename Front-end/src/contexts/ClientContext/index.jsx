import { createContext, useState, useEffect } from "react";
import { notifyError, notifySucess } from "../../Toastfy";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";

export const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [contacts, setContacts] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();

  const LoginSubmit = async (body) => {
    try {
      setSpinner(true)
      const response = await api.post("/login", body);
      window.localStorage.clear();
      window.localStorage.setItem("@token",JSON.stringify(response.data.token));

      navigate("/home")
      setLoading(true)
      notifySucess("Logado com sucesso!");
    } catch (err) {
      console.log(err);
      notifyError("Email ou senha invalida!");
    } finally{
      setSpinner(false)
    }
  };

  useEffect(() => {
    async function loadClient() {
      const token = JSON.parse(localStorage.getItem("@token"));
      if (!token) {
        setLoading(false);
        return;
      }
      const clientId = jwt_decode(token).sub;
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.get(`clients/${clientId}`);
        setClient(response.data);
        setContacts(response.data.contacts)
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    loadClient();
  }, [navigate]);

  const createClient = async (body)=>{
      try {
        setSpinner(true)
        const response = await api.post(`/clients`, body);
        notifySucess("Usuário criado com sucesso!");
        navigate("/")
      } catch (err) {
        console.log(err);
        notifyError("Não foi possível criar o usuário");
      } finally {
        setLoading(false);
        setSpinner(false)
      }
  }

  const deleteClient = async () => {
    try {
      setSpinner(true)
      const response = await api.delete(`clients/${client.id}`);
      setOpenModal(false);
      window.localStorage.clear()
      navigate("/")
      notifySucess("Conta deletada com sucesso!");
    } catch (err) {
      console.log(err);
      notifyError("Não foi possível deletar o Conta");
    } finally {
      setLoading(false);
      setSpinner(false)
    }
  };

  const updateClient = async (body) => {

    try {
      setSpinner(true)
      const response = await api.patch(`clients/${client.id}`, body);
      setClient(response.data);
      setOpenModal(false);
      notifySucess("Perfil atualizado com sucesso!");
    } catch (err) {
      console.log(err);
      notifyError("Não foi possível atualizar o Perfil");
    } finally {
      setLoading(false);
      setSpinner(false)
    }
  };

  const createContact = async (body)=>{
      try {
        setSpinner(true)
        const response = await api.post(`/contacts`, body);
        setContacts((await api.get(`/clients/${client.id}`)).data.contacts);
        notifySucess("Contato criado com sucesso!");
        setOpenModal(false)
      } catch (err) {
        console.log(err);
        notifyError("Não foi possível criar o Contato");
      } finally {
        setLoading(false);
        setSpinner(false)
      }
  }

  const deleteContact = async (contact_id) => {
    try {
      setSpinner(true)
      const response = await api.delete(`contacts/${contact_id}/`);
      setContacts((await api.get(`/clients/${client.id}`)).data.contacts);
      setOpenModal(false);
      notifySucess("Contato deletado com sucesso!");
    } catch (err) {
      console.log(err);
      notifyError("Não foi possível deletar o Contato");
    } finally {
      setLoading(false);
      setSpinner(false)
    }
  };

  const updateContact = async (body, contact_id) => {

    try {
      setSpinner(true)
      const response = await api.patch(`contacts/${contact_id}/`, body);
      setContacts((await api.get(`/clients/${client.id}`)).data.contacts);
      setOpenModal(false);
      notifySucess("Contato atualizado com sucesso!");
    } catch (err) {
      console.log(err);
      notifyError("Não foi possível atualizar o Contato");
    } finally {
      setLoading(false);
      setSpinner(false)
    }
  };

  return (
    <ClientContext.Provider
      value={{
        LoginSubmit,
        loading,
        setLoading,
        client,
        setClient,
        navigate,
        spinner, 
        setSpinner,
        setOpenModal,
        openModal,
        createClient,
        createContact,
        contacts,
        deleteContact,
        updateContact,
        deleteClient,
        updateClient
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
