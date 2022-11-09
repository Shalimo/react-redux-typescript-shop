import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slice'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

const persistConfig: PersistConfig<any> = {
    key: 'cart',
    storage
}

const cartReducer = combineReducers({
    cart: cartSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)

export type CartState = ReturnType<typeof cartReducer>