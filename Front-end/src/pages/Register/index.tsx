import { Main } from "./style";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ClientContext } from "../../contexts/ClientContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createClientSchema } from "../../schemas";

export const Register = () => {
  const { createClient } : any = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(createClientSchema),
  });
  
  return (
    <>
      <Header/>
      <Main>
        <div className="container">
          <div className="text">
            <h2>
                Registre-se para gerenciar seus contatos
            </h2>
          </div>
          <form onSubmit={handleSubmit(createClient)}>
            <h3>Registrar</h3>
              <Input
                name="name"
                type="text"
                placeholder="Digite seu nome completo"
                label="Nome*"
                register={register("name")}
                className={errors.name && "error"}
              />
              <Input
                name="email"
                type="email"
                placeholder="Digite seu email"
                label="Email*"
                register={register("email")}
                className={errors.email && "error"}
              />
              <Input
                name="password"
                type="password"
                placeholder="Digite sua senha"
                label="Senha*"
                register={register("password")}
                className={errors.password && "error"}
              />
              <Input
                name="tel"
                type="tel"
                placeholder="Digite seu telefone"
                label="Telefone*"
                register={register("tel")}
                className={errors.tel && "error"}
              />
              <Button type="submit" name="Enviar" />
          </form>
        </div>
      </Main>
    </>
  );
};
