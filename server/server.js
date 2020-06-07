const path = require('path');
const express = require('express');
const app = express();
const compression = require('compression');

const router = express.Router();
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
router.use(awsServerlessExpressMiddleware.eventContext());

app.use(compression());

app.set('views', path.join(path.join(__dirname, '..'), '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

app.use('/', require('./router/main'));

module.exports = app;