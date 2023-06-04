import { DeepPartial } from 'typeorm';
import { z } from 'zod'
import { requestContactSchema, contactSchema } from '../../schemas/contacts/contacts.schemas';

export type IContact = z.infer<typeof contactSchema>

export type IContactRequest = z.infer<typeof requestContactSchema>

export type IUpdateContactRequest = DeepPartial<IContactRequest>