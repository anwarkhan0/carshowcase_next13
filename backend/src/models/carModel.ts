import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface ICar {
    id: Number,
    manufacturer: String,
    year: Number,
    model: String,
    fuel: String,
    num_of_doors: String,
    engine: String,
    img: String
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<ICar>({
    id: Number,
    manufacturer: {type: String, required: true},
    year: {type: String, required: true},
    model: {type: String, required: true},
    fuel: {type: String, required: true},
    num_of_doors: {type: String, required: true},
    engine: {type: String, required: true},
    img: {type: String, required: true}
});

// 3. Create a Model.
const Car = model<ICar>('cars', userSchema);

export default Car;
