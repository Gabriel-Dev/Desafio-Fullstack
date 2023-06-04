import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { IContact} from '../../interfaces/contacts/contacts.interfaces';
import { allContactSchema } from '../../schemas/contacts/contacts.schemas';

export const readContactsService = async (): Promise<IContact[]> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.find()

    return allContactSchema.parse(contacts)

}