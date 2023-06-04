import { z } from "zod";
import { withoutPasswordClientSchema } from "../clients/clients.schemas";

export const contactSchema = z.object({
  id: z.number().int(),
  name: z.string().max(150),
  email: z.string().max(150).email(),
  tel: z.string().max(20),
  created_at: z.string(),
});

export const allContactSchema = z.array(contactSchema);

export const requestContactSchema = contactSchema.omit({
  id: true,
  created_at: true,
  client: true
});

export const updateContactSchema = requestContactSchema.partial();
