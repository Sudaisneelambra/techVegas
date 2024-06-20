import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartItem } from '../interfaces/cart.interface';

export const selectCart = createFeatureSelector<CartItem[]>('cartt');

export const selectCartItems = createSelector(
  selectCart,
  (cart: CartItem[]) => cart
);
