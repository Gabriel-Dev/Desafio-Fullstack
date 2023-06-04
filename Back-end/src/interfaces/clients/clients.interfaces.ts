import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  requestClientSchema,
  clientSchema,
  withoutPasswordClientSchema,
} from "../../schemas/clients/clients.schemas";

export type IClient = z.infer<typeof clientSchema>;

export type IClientWithoutPassword = z.infer<
  typeof withoutPasswordClientSchema
>;

export type IClientRequest = z.infer<typeof requestClientSchema>;

export type IUpdateClientRequest = DeepPartial<IClientRequest>;
