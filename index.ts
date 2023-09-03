import express from 'express'
import  RouteUser  from './routes/User.js'
import db from './DB/indes.js';
import { json } from 'stream/consumers';

var app = express();
const PORT = 3000
app.use(express.json())

app.use('/user' , RouteUser);
app.listen(PORT, () => {
    db.init();
    console.log(`App is listening on port ${PORT}`);
});