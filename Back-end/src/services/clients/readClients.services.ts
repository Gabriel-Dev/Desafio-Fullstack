import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { IClientWithoutPassword } from '../../interfaces/clients/clients.interfaces';
import { allWithoutPasswordClientSchema } from '../../schemas/clients/clients.schemas';

export const readClientsService = async (): Promise<IClientWithoutPassword[]> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const clients = await clientRepository.find({
        relations:['contacts']
    })

    return allWithoutPasswordClientSchema.parse(clients)

}