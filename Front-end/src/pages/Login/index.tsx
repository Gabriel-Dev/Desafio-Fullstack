import { Main } from "./style";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Login = () => {
  return (
    <>
      <Header />
      <Main>
        <div className="container">
          <form>
            <h3>Login</h3>

            <Input
              name="email"
              type="email"
              placeholder="Digite seu email"
              label="E-mail*"
            />
            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              label="Senha*"
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
