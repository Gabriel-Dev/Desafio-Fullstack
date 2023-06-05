import { createContext, useState, useEffect } from "react";
import { notifyError, notifySucess } from "../../Toastfy";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";

export const ClientContext = createContext({});

export const ClientProvider = ({ children }: any) => {
  const [client, setClient] = useState(null);
  const [openModal, setOpenModal] = useState<any>(false);
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState<string | boolean>(false);
  const navigate = useNavigate();

  const LoginSubmit = async (body: any) => {
    try {
      setSpinner("Entrar")
      const response = await api.post("Clients/login/", body);
      // const decodedToken = jwt_decode(response.data.access);
      window.localStorage.clear();
      window.localStorage.setItem("@token",JSON.stringify(response.data.access));

      navigate("/register")
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
      const token = JSON.parse(localStorage.getItem("@token")!);

      if (!token) {
        setLoading(false);
        return;
      }

      const clientId = jwt_decode<any>(token).client.id;

      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.get(`clients/${clientId}`);
        setClient(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    loadClient();
  }, [navigate]);

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
        openModal
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
