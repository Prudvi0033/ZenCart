import { create } from "zustand";
import axios from 'axios'

const BASE_URL = "http://localhost:8001/api"

export const useProductStore = create((set, get) => ({
    products : [],
    productsLoading : false,
    
    fetchProducts : async () => {
        set({productsLoading : true})
        try {
           const response = await axios.get(`${BASE_URL}/products`)
           set({products : response.data.prods}) 
           
        } catch (error) {
            console.log("Error in fetching products", error);
        } finally {
            set({productsLoading : false})
        }
    }
}))