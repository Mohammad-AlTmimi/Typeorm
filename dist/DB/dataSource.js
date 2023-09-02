import { DataSource } from "typeorm";
import { User } from './entites/User.js';
const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'typeormproject',
    entities: [
        User
    ],
    synchronize: true
});
export default dataSource;
