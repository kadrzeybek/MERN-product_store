// const express = require('express');
import express from 'express';
import { connectDB } from './config/db.js';
import path from 'path';
import productRoutes from './routes/product.route.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000

const __dirname = path.resolve();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use('/api/products',productRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:",PORT)
})

