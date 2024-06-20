import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFormCart } from './item.action';
import { CartItem } from '../interfaces/cart.interface';

export const initialState: CartItem[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { id, category }) => {
    const itemIndex = state.findIndex(
      (item) => item.id === id && item.category === category
    );

    if (itemIndex !== -1) {
      return state.map((item) =>
        item.id === id && item.category === category
          ? { ...item, count: item.count + 1 }
          : item
      );
    } else {
      return [...state, { id, category, count: 1 }];
    }
  }),
  on(removeFormCart, (state, { id, category }) => {
    const itemIndex = state.findIndex(
      (item) => item.id === id && item.category === category
    );

    if (itemIndex !== -1) {
      if (state[itemIndex].count > 1) {
        return state.map((item) =>
          item.id === id && item.category === category
            ? { ...item, count: item.count - 1 }
            : item
        );
      } else {
        const one = state.filter((item) => item.id !== id )
        console.log(one);
        return state.filter((item) => item.id !== id );
      }
    } else {
      return state;
    }
  })
);
    