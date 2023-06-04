import 'express-async-errors'
import express, { Application } from 'express'
import { handleErrors } from './errors'
import { clientRoutes } from './routes/clients/clients.routes'
import { contactRoutes } from './routes/contacts/contacts.routes'
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "../swagger.json"
import { loginRoutes } from './routes/login/login.routes'


const app: Application = express()
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/clients", clientRoutes)
app.use("/contacts", contactRoutes)
app.use("/login", loginRoutes)


app.use(handleErrors)

export default app