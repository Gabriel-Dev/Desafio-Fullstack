import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';

import { IClientWithoutPassword } from '../../interfaces/clients/clients.interfaces';
import { withoutPasswordClientSchema } from '../../schemas/clients/clients.schemas';
import { Contact } from '../../entities/contact.entity';

export const retriveContactService = async (id: number): Promise<IClientWithoutPassword> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOne({
        where:{
            id:id
        },
       
    })

    return withoutPasswordClientSchema.parse(contact)
}