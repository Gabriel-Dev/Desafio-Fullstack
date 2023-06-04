import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { IClientWithoutPassword } from '../../interfaces/clients/clients.interfaces';
import { withoutPasswordClientSchema } from '../../schemas/clients/clients.schemas';

export const retriveClientService = async (id: number): Promise<IClientWithoutPassword> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where:{
            id:id
        },
        relations:['contacts']
    })

    return withoutPasswordClientSchema.parse(client)
}