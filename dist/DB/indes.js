import dataSource from "./dataSource.js";
const init = dataSource.initialize().then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});
export { init };
