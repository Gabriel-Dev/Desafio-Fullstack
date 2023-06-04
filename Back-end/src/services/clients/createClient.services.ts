import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { IClientRequest, IClientWithoutPassword } from '../../interfaces/clients/clients.interfaces';
import { withoutPasswordClientSchema } from '../../schemas/clients/clients.schemas';

export const createClientService = async (ClientData: IClientRequest): Promise<IClientWithoutPassword> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client = clientRepository.create(ClientData)

    await clientRepository.save(client)

    return withoutPasswordClientSchema.parse(client)

}