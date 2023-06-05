import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { Input } from "../Input";
import { CreateContact } from "./createContactStyle";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { createContactSchema } from "../../schemas"
import { yupResolver } from "@hookform/resolvers/yup";
import { ClientContext } from "../../contexts/ClientContext";

export const CreateContactModal = () => {
  const { createContact } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(createContactSchema),
  });

  return (
    <CreateContact>
      <ModalBackground size="createContact">
        <div>
          <form onSubmit={handleSubmit(createContact)}>
            <Input
              name="name"
              type="text"
              placeholder="Digite o nome completo do contato"
              label="Nome"
              register={register("name")}
              className={errors.name && "error"}
            />
              <Input
                name="email"
                type="email"
                placeholder="Digite o email do contato"
                label="E-mail"
                register={register("email")}
                className={errors.email && "error"}
              />

            <Input
              name="tel"
              type="text"
              placeholder="Digite o telefone do contato"
              label="Telefone"
              register={register("tel")}
              className={errors.tel && "error"}
              
            />
            <div>
              <Button type="submit" name="Adicionar" ></Button>
            </div>
          </form>
        </div>
      </ModalBackground>
    </CreateContact>
  );
};
