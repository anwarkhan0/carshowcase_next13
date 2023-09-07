"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const carsRoutes_1 = __importDefault(require("./routes/carsRoutes"));
const app = (0, express_1.default)();
const port = 3001;
app.use(carsRoutes_1.default);
mongoose_1.default.connect('mongodb://127.0.0.1:27017/car_heaven').then(() => console.log('db connected')).
    catch(error => console.log(error));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
