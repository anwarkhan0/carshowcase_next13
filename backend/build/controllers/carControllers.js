"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.fetchCars = exports.addCar = void 0;
const carModel_1 = __importDefault(require("../models/carModel"));
// fetch cars data
const fetchCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield carModel_1.default.find().limit(10);
        console.log(cars);
        return res.status(200).json(cars);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.fetchCars = fetchCars;
// create car record
const addCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, manufacturer, year, model, fuel, num_of_doors, engine } = req.params;
        const car = new carModel_1.default({
            id: parseInt(id),
            manufacturer,
            year: parseInt(year),
            model,
            fuel,
            num_of_doors,
            engine,
        });
        yield car.save();
        res.status(201).json({ message: "Created Successfully." });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.addCar = addCar;
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield carModel_1.default.deleteOne({ id: id });
        res.status(200).json({ message: "Deleted Successfully." });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteCar = deleteCar;
