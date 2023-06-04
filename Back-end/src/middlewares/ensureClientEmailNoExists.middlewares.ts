import { NextFunction, Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { AppError } from '../errors'
import { Client } from '../entities/client.entity'

export const ensureClientEmailNoExists = async (request: Request, response: Response, next: NextFunction) => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const findClient = await clientRepository.findOne({
        where: {
            email: request.body.email
        }
    })

    if (findClient && request.body.email) {
        throw new AppError('Email already exists', 409)
    }

    return next()

}