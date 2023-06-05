import { Main } from "./style";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Register = () => {
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
          <form >
            <h3>Registrar</h3>
              <Input
                name="name"
                type="text"
                placeholder="Digite seu nome completo"
                label="Nome*"
               
              />
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
              <Input
                name="tel"
                type="tel"
                placeholder="Digite seu telefone"
                label="Telefone*"
              />
              <Button type="submit" name="Enviar" />
          </form>
        </div>
      </Main>
    </>
  );
};
