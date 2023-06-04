import { z } from 'zod'
import { allContactSchema } from '../contacts/contacts.schemas'

export const clientSchema = z.object({
    id: z.number().int(),
    name: z.string().max(150),
    email: z.string().max(150).email(),
    password: z.string().max(150),
    tel: z.string().max(20),
    created_at: z.string(),
    contacts: allContactSchema.nullish(),
})

export const withoutPasswordClientSchema = clientSchema.omit({ password: true })

export const allWithoutPasswordClientSchema = z.array(withoutPasswordClientSchema)

export const requestClientSchema = clientSchema.omit({ id: true, created_at: true, contacts: true })

export const updateClientSchema = requestClientSchema.partial()
