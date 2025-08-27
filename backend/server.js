// const express = require('express');
import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use('/api/products',productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:",PORT)
})

