import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouters.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/testing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});