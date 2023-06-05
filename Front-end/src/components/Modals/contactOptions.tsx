import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { ContactOptions } from "./contactOptionsStyle";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { createUserSchema } from "../../schemas"
import { yupResolver } from "@hookform/resolvers/yup";
import { ClientContext } from "../../contexts/ClientContext";

export const ContactOptionsModal = ({client_id}: any) => {
  const { createContact } : any = useContext(ClientContext);

  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(createUserSchema),
  });

  return (
    <ContactOptions>
      <ModalBackground size="options">
        <div>
          <form onSubmit={handleSubmit((body)=>{createContact(body,client_id)})}>
            <Input
              name="name"
              type="text"
              placeholder="Digite o nome completo do contato"
              label="Nome"
              register={register("name")}
            />
            <Input
              name="tel"
              type="text"
              placeholder="Digite o telefone do contato"
              label="Telefone"
              register={register("tel")}
              
            />
            <Input
              name="email"
              type="email"
              placeholder="Digite o email do contato"
              label="E-mail"
              register={register("email")}
            />
            <div>
              <Button type="submit" name="Editar" ></Button>
              <Button type="button" name="Remover" ></Button>
            </div>
          </form>
        </div>
      </ModalBackground>
    </ContactOptions>
  );
};
