# MERN - Product Store

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-darkgreen?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue)

A simple **backend project** built with **Node.js** and **MongoDB**.  
This API provides basic CRUD operations (Create, Read, Update, Delete) for managing products.  

---

## Features
- Add a new product  
- Get all products 
- Update a product by ID  
- Delete a product by ID  
- MongoDB integration with Mongoose  
- Tested with Postman  

---

## Tech Stack
- **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)  
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)  
- **Testing:** [Postman](https://www.postman.com/)  

---

## Installation & Setup

1. Clone the repository  
    `git clone https://github.com/kadrzeybek/MERN-product_store.git`

2. Install dependencies
    `npm install`

3. Create a .env file in the root directory
    ```
    MONGO_URI=mongodb://localhost:27017/example
    PORT=5000
    ```
   
4. Start The Server
    `npm run dev`
