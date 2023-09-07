"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carRoutes = (0, express_1.Router)();
carRoutes.get('/cars', (req, res) => {
    res.send('Hello, cars!');
});
exports.default = carRoutes;
