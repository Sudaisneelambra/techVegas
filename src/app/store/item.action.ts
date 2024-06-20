import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
    '[Cart] Add To Cart',
    props<{ id: number,category:string }>()
  );

  export const removeFormCart = createAction(
    '[Cart] Remove From Cart',
    props<{ id: number,category:string }>()
  );