import { Request, Response } from 'express'
import { createContactService } from '../../services/contacts/createContact.services'
import { deleteContactService } from '../../services/contacts/deleteContact.services'
import { readContactsService } from '../../services/contacts/readContacts.services'
import { updateContactService } from '../../services/contacts/updateContact.services'
import { retriveContactService } from '../../services/contacts/retriveContacts.services'


export const createContactController = async (request: Request, response: Response): Promise<Response> => {
    const id: number = request.client.id
    console.log("aqui",id)
    const newContact = await createContactService(request.body, id)

    return response.status(201).json(newContact)
}

export const readContactsController = async (request: Request, response: Response): Promise<Response> => {

    const contacts = await readContactsService()

    return response.json(contacts)
}

export const updateContactController = async (request: Request, response: Response): Promise<Response> => {

    const contact = await updateContactService(request.body, Number(request.params.id))

    return response.json(contact)
}

export const retriveContactController = async (request: Request, response: Response): Promise<Response> => {
    
    const client = await retriveContactService(Number(request.params.id))

    return response.json(client)
}

export const deleteContactController = async (request: Request, response: Response): Promise<Response> => {

    await deleteContactService(Number(request.params.id))

    return response.status(204).send()
}