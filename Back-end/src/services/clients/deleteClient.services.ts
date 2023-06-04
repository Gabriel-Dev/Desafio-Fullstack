import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';


export const deleteClientService = async (id: number): Promise<void> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    await clientRepository.delete({ id })

}