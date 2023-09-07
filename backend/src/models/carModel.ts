import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface ICar {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive?: string;
    fuel_type: string;
    highway_mpg: number;
    manufacturer: string;
    model: string;
    transmission: string;
    year: number;
    img: String
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<ICar>({
    city_mpg: {type: Number, required: true},
    class: {type: String, required: true},
    combination_mpg: {type: Number, required: true},
    cylinders: {type: Number, required: true},
    displacement: {type: Number, required: true},
    drive: {type: String, required: false},
    fuel_type: {type: String, required: true},
    highway_mpg: {type: Number, required: true},
    manufacturer: {type: String, required: true},
    model: {type: String, required: true},
    transmission: {type: String, required: true},
    year: {type: Number, required: true},
    img: {type: String, required: false}
});

// 3. Create a Model.
const Car = model<ICar>('cars', userSchema);

export default Car;
