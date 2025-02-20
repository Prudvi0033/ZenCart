import {sql} from "../config/db.js"

export const getProducts = async (req, res) => {
    try {
        const products = await sql `
            SELECT * FROM products
        `

        res.json({products})
    } catch (error) {
        console.log("Error in getting all products");
        
    }
}

export const createProducts = async (req, res) => {
    const {name, price, image} = req.body

    if(!name || !price || !image){
        res.status(411).json({
            msg : "Enter all the fields"
        })
    }

    try {
        const newProduct = await sql `
            INSERT INTO products (name, price, image)
            VALUES (${name},${price},${image})
            RETURNING *
        `

        res.json({newProduct})
    } catch (error) {
        console.log("Error in creating products",error);
    }
}

export const getProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await sql `
            SELECT * FROM products 
            WHERE id = ${id}
        `

        res.json({product})
    } catch (error) {
        console.log("Error in getting product",error);
    }
}

export const updateProduct = async (req, res) => {
    const id = req.params.id
    const {name, price, image} = req.body
    try {
        const updatedProduct = await sql `
            UPDATE products
            SET name = ${name}, price = ${price}, image = ${image}
            WHERE id = ${id} 
            RETURNING *
        `

        if(!updatedProduct){
            res.json(401).json({
                msg : "No Product Found"
            })
        }

        res.json({updatedProduct})
    } catch (error) {
        console.log("Error in updating product",error);
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id

    try {
        const deletedProduct = await sql `
            DELETE FROM prodcuts
            WHERE id = ${id}
            RETURNING *
        ` 

        if(!deletedProduct){
            res.json(401).json({
                msg : "No Product Found"
            })
        }

        res.json(deletedProduct)
    } catch (error) {
        console.log("Error in Deleting product",error);
    }
}