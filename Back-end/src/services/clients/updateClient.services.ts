import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { AppError } from '../../errors';
import { IUpdateClientRequest, IClientWithoutPassword } from '../../interfaces/clients/clients.interfaces';
import { withoutPasswordClientSchema } from '../../schemas/clients/clients.schemas';

export const updateClientService = async (clientData: IUpdateClientRequest, id: number): Promise<IClientWithoutPassword> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    if (!Object.keys(clientData).length) {
        throw new AppError('At least one of those keys: [name, email, password, tel] must be send.')
    }

    await clientRepository.update(id, clientData)

    const client = await clientRepository.findOne({
        where: {
            id: id
        }
    })

    return withoutPasswordClientSchema.parse(client)
} 