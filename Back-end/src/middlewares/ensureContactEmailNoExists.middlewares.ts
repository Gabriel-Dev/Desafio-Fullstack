import { NextFunction, Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { AppError } from '../errors'
import { Contact } from '../entities/contact.entity'

export const ensureContactEmailNoExists = async (request: Request, response: Response, next: NextFunction) => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOne({
        where: {
            email: request.body.email
        }
    })

    if (findContact && request.body.email) {
        throw new AppError('Email already exists', 409)
    }

    return next()

}