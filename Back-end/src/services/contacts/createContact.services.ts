import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { IContactRequest, IContact } from "../../interfaces/contacts/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts/contacts.schemas";

export const createContactService = async (contactData: any, id: number): Promise<IContact> => {
  const contactRepository: Repository<Contact> =AppDataSource.getRepository(Contact);
  const clientRepository: Repository<Client> =AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id: id,
    },
  });

  contactData = {
    ...contactData,
    client: client!
  }
  const contact = contactRepository.create(contactData);

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};
