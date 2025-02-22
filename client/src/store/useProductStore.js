import { create } from "zustand";
import axios from 'axios'
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:8001/api"

export const useProductStore = create((set, get) => ({
    products : [],
    productsLoading : false,

    formData : {
        name : "",
        price : "",
        image : ""
    },

    setFormData : ((formData) => set({formData})),
    resetFormData : () => set({formData : {name : "", price : "", image : ""}}),

    addProduct : async (e) => {
        e.preventDefault()
        set({productsLoading : true})
        try {
            const {formData} = get()
           await axios.post(`${BASE_URL}/products`,formData) 
           await get().fetchProducts()
           await get().resetFormData()

           toast.success("Product Added")
        } catch (error) {
            console.log("Error in adding product",error);
            toast.error("Error in adding product");
        } finally{
            set({productsLoading : false})
        }
    },
    
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
    },

    deleteProduct : async (id) => {
        try {
            await axios.delete(`${BASE_URL}/products/${id}`)
            set(prev => ({products : prev.products.filter(product => product.id !== id)}))
            toast.success("Deleted Item")
        } catch (error) {
            console.log("Error in deleting product",error);
            toast.error("Error in deleting product")
        }
    }
}))