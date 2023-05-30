import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [
      { name: 'Premium Ticket', price: 120, quantity: 0 },
      { name: 'Spice Ticket', price: 60, quantity: 0 },
      { name: 'Ticket', price: 25, quantity: 0 },
    ],
  }),
  //Getters are used to derive computed values from the state of the store.
  getters: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  //Actions are used to perform asynchronous or synchronous operations that modify the state of the store
  actions: {
    incrementQuantity(index) {
      this.cartItems[index].quantity++;
    },
    decrementQuantity(index) {
      if (this.cartItems[index].quantity > 0) {
        this.cartItems[index].quantity--;
      }
    },
  },
});