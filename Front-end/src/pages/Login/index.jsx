import { Main } from "./style";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ClientContext } from "../../contexts/ClientContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas";

export const Login = () => {
  const { LoginSubmit }  = useContext(ClientContext);

  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

    return (
    <>
      <Header />
      <Main>
        <div className="container">
          <form onSubmit={handleSubmit(LoginSubmit)}>
            <h3>Login</h3>

            <Input
              name="email"
              type="email"
              placeholder="Digite seu email"
              label="Email"
              register={register("email")}
            />
            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              label="Senha"
              register={register("password")}
            />
            <p>Não possui uma conta ? </p>
            <p>
              vá para o <a href="/register">registro</a>
            </p>
            <Button type="submit" name="Enviar" />
          </form>
          <div className="text">
            <h2>Faça login para gerenciar seus contatos</h2>
          </div>
        </div>
      </Main>
    </>
  );
};
