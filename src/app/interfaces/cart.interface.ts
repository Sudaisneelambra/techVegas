export interface CartItem {
    id: number;
    category:string;
    count: number;
  }

  export const initialState: CartItem[] = [];