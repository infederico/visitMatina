import { createSlice } from '@reduxjs/toolkit';

function guardar(products) {
  localStorage.setItem('products', JSON.stringify(products));
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    payment: '',
  },
  reducers: {
    addProduct: (state, action) => {
      let id = action.payload.id;
      let find = state.products.find((p) => p.id === Number(id));
      if (find) {
        find.quantity = find.quantity + 1;
        find.amount.value = find.quantity * find.unit_price;
        state.quantity = state.quantity + 1;
        state.total = state.total + Number(find.unit_price);
        guardar(state.products);
        return;
      }
      state.products = [action.payload, ...state.products];
      state.quantity = state.quantity + 1;
      state.total =
        state.total +
        Number(action.payload.unit_price) * action.payload.quantity;
      guardar(state.products);
    },
    addItem: (state, action) => {
      let id = Number(action.payload);
      let find = state.products.find((p) => p.id === Number(id));
      if (find) {
        find.quantity = find.quantity + 1;
        find.amount.value = find.quantity * Number(find.unit_price);
        state.quantity = state.quantity + 1;
        state.total = state.total + Number(find.unit_price);
        guardar(state.products);
        return;
      }
    },
    delItem: (state, action) => {
      let id = action.payload;
      let find = state.products.find((p) => p.id === Number(id));
      if (find) {
        find.quantity = find.quantity - 1;
        find.amount.value = find.quantity * Number(find.unit_price);
        state.quantity = state.quantity - 1;
        state.total = state.total - Number(find.unit_price);
        guardar(state.products);
        return;
      }
    },
    delProduct: (state, action) => {
      console.log(action.payload);
      let find = state.products.find((p) => p.id === Number(action.payload));
      console.log(find);
      let filteredProducts = state.products.filter(
        (p) => p.id !== Number(action.payload)
      );
      state.products = filteredProducts;
      state.quantity = state.quantity - find.quantity;
      state.total = state.total - Number(find.unit_price) * find.quantity;
      guardar(state.products);
    },
    restoreCart: (state, action) => {
      let products = action.payload;
      let total = 0;
      let quantity = 0;

      products.map((p) => {
        total = p.unit_price * p.quantity;
        quantity = quantity + p.quantity;
      });

      state.products = action.payload;
      state.quantity = quantity;
      state.total = total;
    },
    cleanCart: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      localStorage.removeItem('products');
    },
    pay: (state, action) => {
      return { ...state, payment: action.payload };
    },
  },
});

export const {
  addProduct,
  delProduct,
  addItem,
  delItem,
  restoreCart,
  cleanCart,
  pay,
} = cartSlice.actions;
export default cartSlice.reducer;
