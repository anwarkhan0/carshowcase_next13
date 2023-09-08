"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carRoutes = (0, express_1.Router)();
const carControllers_1 = require("../controllers/carControllers");
carRoutes.get('/', (_, res) => {
    res.send('carshow case home');
});
carRoutes.get('/cars', carControllers_1.fetchCars);
carRoutes.delete('/cars/:id', carControllers_1.deleteCar);
carRoutes.post('/cars/add', carControllers_1.addCar);
exports.default = carRoutes;
