import express from 'express'
import { config } from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

import productRoutes from "../routes/product.route.js"
import { sql } from '../config/db.js'

config()

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())

const port = process.env.PORT

app.use("/api/products",productRoutes) 

const initDB = async () => {
    try {
        await sql `
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `

        console.log("DB initialzed succesfully");
        
    } catch (error) {
        console.log("Error in initDB",error);
    }
}

initDB().then(() => {
    app.listen(port,() => {
        console.log("Server is running ",port);
    })
})