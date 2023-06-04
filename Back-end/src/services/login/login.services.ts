import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors';
import { ILogin } from '../../interfaces/login/login.interfaces';
import { Client } from '../../entities/client.entity';

export const loginService = async (loginData: ILogin): Promise<string> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: {
            email: loginData.email
        }
    })

    if (!client || !await compare(loginData.password, client.password)) {
        throw new AppError('Invalid credentials', 401)
    }

    const token = jwt.sign(
        {
            client: client
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: client.id.toString()
        }
    )

    return token
}
