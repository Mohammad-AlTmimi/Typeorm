import { DataSource } from "typeorm";
import { User } from './entites/User.js';
const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'TypeormProject',
    entities: [
        User
    ],
    synchronize: true
});
dataSource.initialize().then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});
export default dataSource;
