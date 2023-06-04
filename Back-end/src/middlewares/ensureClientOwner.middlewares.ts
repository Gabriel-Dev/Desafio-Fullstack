import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors'

export const ensureClientOwner = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const authClient = request.client

    const id: number = Number(request.params.id)

    if (authClient.id !== id) {
        throw new AppError('Insufficient permission', 403)
    }

    return next()
}