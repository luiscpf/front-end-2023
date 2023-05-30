<template>
    <div>
      <h1 class="has-text-white">Buy Your Ticket Here</h1>
      <table>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td class="has-text-white"><strong class="has-text-white">Item:</strong> {{ item.name }}</td>
            <td class="has-text-white"><strong class="has-text-white">Price:</strong> {{ item.price }} euros</td>
            <td class="has-text-white">
              <button @click="decrementQuantity(index)" :disabled="item.quantity === 0">-</button>
              {{ item.quantity }}
              <button @click="incrementQuantity(index)">+</button>
            </td>
            <td class="has-text-white"><strong class="has-text-white">Total:</strong> {{ getTotal(item) }} euros</td>
          </tr>
        </tbody>
      </table>
      <h2 class="has-text-white">Total: {{ getTotalPrice() }} euros</h2>
    </div>
</template>
  
<script>
  import { defineComponent } from 'vue';
  //inside object propretys name, props, data, computed, methods, watch, mounted
  import { useCartStore } from '@/stores/CartStore';
  
  export default defineComponent({
    name: 'CartView',
    computed: {
      cartItems() {
        return useCartStore().cartItems;
      },
    },
    methods: {
      decrementQuantity(index) {
        useCartStore().decrementQuantity(index);
      },
      incrementQuantity(index) {
        useCartStore().incrementQuantity(index);
      },
      getTotal(item) {
        return item.price * item.quantity;
      },
      getTotalPrice() {
        return useCartStore().totalPrice;
      },
    },
  });
</script>