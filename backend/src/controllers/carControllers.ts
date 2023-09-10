import CarModel from "../models/carModel";
import { Request, Response } from "express";

// fetch cars data
const fetchCars = async (req: Request, res: Response)=>{
  const { manufacturer, model, fuel, year, limit } = req.query;
  
  let filter: any = {};
  if (typeof manufacturer === 'string' && manufacturer.length > 0) {
    const firstCharacter = manufacturer.charAt(0);
    const capitalizedString = firstCharacter.toUpperCase() + manufacturer.slice(1);
    filter.manufacturer = capitalizedString;
  }
  if (typeof model === 'string' && model.length > 0) {
    const firstCharacter = model.charAt(0);
    const capitalizedString = firstCharacter.toUpperCase() + model.slice(1);
    filter.model = capitalizedString;
  }
  if(fuel) filter.fuel_type = fuel;
  try {
    const cars = await CarModel.find(filter).limit(Number(limit) || 10);
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
    return res.status(201).json({ message: "Created Successfully." });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await CarModel.deleteOne({ id: id });
    return res.status(200).json({ message: "Deleted Successfully." });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}

export { 
  addCar, 
  fetchCars,
  deleteCar
};
