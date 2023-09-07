"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose_1.Schema({
    city_mpg: { type: Number, required: true },
    class: { type: String, required: true },
    combination_mpg: { type: Number, required: true },
    cylinders: { type: Number, required: true },
    displacement: { type: Number, required: true },
    drive: { type: String, required: false },
    fuel_type: { type: String, required: true },
    highway_mpg: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    transmission: { type: String, required: true },
    year: { type: Number, required: true },
    img: { type: String, required: false }
});
// 3. Create a Model.
const Car = (0, mongoose_1.model)('cars', userSchema);
exports.default = Car;
