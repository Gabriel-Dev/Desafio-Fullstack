import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { ContactOptions } from "./contactOptionsStyle";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ClientContext } from "../../contexts/ClientContext";

export const ContactOptionsModal = ({ contact }: any) => {
  const { updateContact, deleteContact }: any = useContext(ClientContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: contact.name,
      email: contact.email,
      tel: contact.tel,
    },
  });

  return (
    <ContactOptions>
      <ModalBackground size="options">
        <div>
          <form
            onSubmit={handleSubmit((body) => {
              updateContact(body, contact.id);
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
              label="E-mail"
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
              <Button type="submit" name="Editar"></Button>
              <Button
                type="button"
                name="Remover"
                onClick={() => {
                  deleteContact(contact.id);
                }}
              ></Button>
            </div>
          </form>
        </div>
      </ModalBackground>
    </ContactOptions>
  );
};
