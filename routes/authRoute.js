import express from 'express';

import controller from '../controller/authController.js'

var route = express.Router();

route.get('/login', controller.login)

export default route ;