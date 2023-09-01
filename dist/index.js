import express from 'express';
import RouteUser from './routes/User.js';
var app = express();
const PORT = 3000;
app.use('/user', RouteUser);
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
