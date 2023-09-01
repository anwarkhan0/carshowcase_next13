import { Request, Response, Router } from 'express';
const carRoutes = Router();

import { 
  fetchCars, 
  addCar, 
  deleteCar } from '../controllers/carControllers';

carRoutes.get('/', (_: Request, res: Response) => {
  res.send('carshow case home');
});


carRoutes.get('/cars', fetchCars);
carRoutes.delete('/cars/:id', deleteCar);
carRoutes.post('/cars/add', addCar);


export default carRoutes;
