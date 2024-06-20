import { createReducer,on } from "@ngrx/store";
import { addToCart } from "./item.action";
import { CartItem } from "../interfaces/cart.interface";

export const initialState: CartItem[] = [];

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state, { id, category }) => {
        const itemIndex = state.findIndex(item => item.id === id && item.category === category);
  
        if (itemIndex !== -1) {
            return state.map(item =>
                item.id === id && item.category === category ? { ...item, count: item.count + 1 } : item
            );
        } else {
            return [...state, { id, category, count: 1 }];
        }
    })
);

