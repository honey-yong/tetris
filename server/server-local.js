const app = require('./server');

const SERVER_PORT = 80;
app.listen(SERVER_PORT, () => console.log(`Express server started on port ${SERVER_PORT}.`));