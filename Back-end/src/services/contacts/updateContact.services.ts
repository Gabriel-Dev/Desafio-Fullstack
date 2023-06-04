import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors';
import { IUpdateContactRequest, IContact } from '../../interfaces/contacts/contacts.interfaces';
import {contactSchema } from '../../schemas/contacts/contacts.schemas';

export const updateContactService = async (ContactData: IUpdateContactRequest, id: number): Promise<IContact> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    if (!Object.keys(ContactData).length) {
        throw new AppError('At least one of those keys: [name, email, password, tel] must be send.')
    }

    await contactRepository.update(id, ContactData)

    const contact = await contactRepository.findOne({
        where: {
            id: id
        }
    })

    return contactSchema.parse(contact)
} 