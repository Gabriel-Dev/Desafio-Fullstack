import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { ClientOptions } from "./clientOptionsStyle";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ClientContext } from "../../contexts/ClientContext";

export const ClientOptionsModal = () => {
  const { updateClient, deleteClient, client, navigate }= useContext(ClientContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: client.name,
      email: client.email,
      tel: client.tel,
    },
  });

  return (
    <ClientOptions>
      <ModalBackground size="options">
        <div>
          <form
            onSubmit={handleSubmit((body) => {
              updateClient(body);
            })}
          >
            <Input
              name="name"
              type="text"
              placeholder="Digite o nome completo do contato"
              label="Nome"
              register={register("name")}
            />
            <Input
              name="email"
              type="email"
              placeholder="Digite o email do contato"
              label="Email"
              register={register("email")}
            />
            <Input
              name="tel"
              type="text"
              placeholder="Digite o telefone do contato"
              label="Telefone"
              register={register("tel")}
            />
            <div>
              <Button type="submit" name="Atualizar"></Button>
              <Button
                type="button"
                name="Deletar Conta"
                onClick={() => {
                  deleteClient();
                }}
              ></Button>
            </div>
          </form>
        </div>
      </ModalBackground>
    </ClientOptions>
  );
};
