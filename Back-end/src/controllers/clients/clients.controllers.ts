import { Request, Response } from 'express'
import { createClientService } from '../../services/clients/createClient.services'
import { deleteClientService } from '../../services/clients/deleteClient.services'
import { readClientsService } from '../../services/clients/readClients.services'
import { updateClientService } from '../../services/clients/updateClient.services'
import { retriveClientService } from '../../services/clients/retriveClient.services'


export const createClientController = async (request: Request, response: Response): Promise<Response> => {
    console.log(9,request)
    const newClient = await createClientService(request.body)

    return response.status(201).json(newClient)
}

export const readClientsController = async (request: Request, response: Response): Promise<Response> => {

    const clients = await readClientsService()

    return response.json(clients)
}

export const retriveClientController = async (request: Request, response: Response): Promise<Response> => {
    
    const client = await retriveClientService(Number(request.params.id))

    return response.json(client)
}

export const updateClientController = async (request: Request, response: Response): Promise<Response> => {

    const client = await updateClientService(request.body, Number(request.params.id))

    return response.json(client)
}

export const deleteClientController = async (request: Request, response: Response): Promise<Response> => {

    await deleteClientService(Number(request.params.id))

    return response.status(204).send()
}