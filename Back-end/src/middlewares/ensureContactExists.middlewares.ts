import { NextFunction, Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { AppError } from '../errors'
import { Contact } from '../entities/contact.entity'

export const ensureContactExists = async (request: Request, response: Response, next: NextFunction) => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOne({
        where: {
            id: Number(request.params.id)
        }
    })

    if (!findContact) {
        throw new AppError('User not found', 404)
    }

    return next()

}
