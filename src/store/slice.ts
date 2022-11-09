import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./types";
import { IProduct } from "../types/product.interfase";

const initialState: IInitialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, {payload}: PayloadAction<IProduct>) => {
            state.products = [...state.products, payload]
        },
        removeProductFromCart: (state, {payload}: PayloadAction<number>) => {
            state.products = state.products.filter(item => item.id !== payload)
        }
    }
})