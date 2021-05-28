import express from 'express';

import controller from "../controller/user.controller.js"

var route = express.Router();

route.get('/' , controller.index)
route.get('/search', controller.search )
route.get('/create', controller.create)
route.get('/:id', controller.getUserById)
route.post('/create', controller.postCreate)

export default route;

