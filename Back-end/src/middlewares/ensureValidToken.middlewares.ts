import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors'
import jwt from 'jsonwebtoken'

export const ensureValidToken = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const token = request.headers.authorization?.split(" ")[1]

    if (!token) {
        throw new AppError('Missing bearer token', 401)
    }

    jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            throw new AppError(error.message, 401)
        }

        request.client = {
            id: Number(decoded.sub),
        }

        return next()
    })

}
