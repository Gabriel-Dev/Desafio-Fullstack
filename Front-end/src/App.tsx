import { GlobalStyle } from "./styles/global";
import { MainRoutes as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import { ClientProvider } from "./contexts/ClientContext";

import "react-toastify/dist/ReactToastify.css";
import { Animations } from "./styles/animations";

export const App = ()=> {

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
      <Animations/>
      <ClientProvider>
        <Routes />
      </ClientProvider>
    </>
  )
}


