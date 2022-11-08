import axios from "axios"
import { IProduct } from "../types/product.interfase"


axios.defaults.baseURL = 'https://fakestoreapi.com'

export const Products = {
    
    getProducts: async () => {
        const products = await axios.get<IProduct>('/products?limit=6')
        
        return products.data
    }
}