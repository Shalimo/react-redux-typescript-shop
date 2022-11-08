import axios from "axios"
import { IProduct } from "../types/product.interfase"
import { IResponse } from "../types/product.interfase"

axios.defaults.baseURL = 'https://dummyjson.com'

export const Products = {
    
    getProducts: async () => {
        const products = await axios.get<IResponse>('/products')
        
        return products.data
    },

    getProductByID: async (id: string) => {
        const product = await axios.get<IProduct>(`/products/${id}`)

        return product.data
    }
}