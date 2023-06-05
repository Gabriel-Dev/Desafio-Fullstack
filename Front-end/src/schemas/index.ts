import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const createClientSchema = yup.object().shape({
  name: yup.string().required("Nome do usuário obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("Email invalido"),
  password: yup.string().required("Senha obrigatório"),
  tel: yup.string().required("Telefone obrigatório"),
});

export const createContactSchema = yup.object().shape({
  name: yup.string().required("Nome do usuário obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("Email invalido"),
  tel: yup.string().required("Telefone obrigatório"),
});
