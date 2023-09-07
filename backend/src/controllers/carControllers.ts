import CarModel from "../models/carModel";
import { Request, Response } from "express";

// fetch cars data
const fetchCars = async (req: Request, res: Response)=>{
  
  try {
    const cars = await CarModel.find().limit(10);
    console.log(cars)
    return res.status(200).json(cars);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

}

// create car record
const addCar = async (req: Request, res: Response) => {
  try {
    const { id, manufacturer, year, model, fuel, num_of_doors, engine } = req.params;

    const car = new CarModel({
      id: parseInt(id),
      manufacturer,
      year: parseInt(year),
      model,
      fuel,
      num_of_doors,
      engine,
    });

    await car.save();
    res.status(201).json({ message: "Created Successfully." });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await CarModel.deleteOne({ id: id });
    res.status(200).json({ message: "Deleted Successfully." });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export { 
  addCar, 
  fetchCars,
  deleteCar
};
