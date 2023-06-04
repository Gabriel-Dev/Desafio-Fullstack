import app from './app';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
    console.log('Database is running!')
    app.listen(3000, async () => {
        console.log('Server is running!')
    })
}).catch((error) => {
    console.log(error)
})
