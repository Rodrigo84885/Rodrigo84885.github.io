const app = require('../server');
const controllerUser = require('./user.controller');

app.post('/teste', controllerUser.save);
