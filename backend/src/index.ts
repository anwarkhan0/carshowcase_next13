import express from 'express';
import mongodb from 'mongodb';
import mongoose from 'mongoose';
import carRoutes from './routes/carsRoutes';

const app = express();
const port = 3001;

app.use(carRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/car_heaven').then(()=> console.log('db connected')).
  catch(error => console.log(error));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});