import "reflect-metadata";
  
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import csp from 'helmet-csp';
var path = require('path');
import { 
    rootRouter 
} from "./api/router"
const cors = require('cors');
const app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine','ejs');

app.use('/js', express.static(__dirname + '../node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '../node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '../node_modules/bootstrap/dist/css')); // redirect CSS


app.use('/public',express.static('public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', rootRouter);


export default app;

