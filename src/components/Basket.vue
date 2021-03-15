<template>
  <div id="basket">
    <h3 id="menu">Menu:</h3>
    <ul>
      <li v-for="item in itemsSelected" v-bind:key="item">
        {{ item[0] }} x {{ item[1] }}
      </li>
      <br />
    </ul>
    <button id="calcbutton" v-on:click="sendOrder()">
      Add Order
    </button>
  </div>
</template>

<script>
import database from "../firebase.js";

export default {
  props: {
    itemsSelected: Array,
    item: Array,
  },
  data() {
    return {
      orders: [],
    };
  },
  watch: {
    subtotal: function() {
      this.grandtotal = (this.subtotal * 1.07).toFixed(2);
    },
  },
  methods: {
    calculate: function() {
      this.subtotal = 0;
      var i;
      for (i = 0; i < this.itemsSelected.length; i++) {
        this.subtotal += this.itemsSelected[i][1] * this.itemsSelected[i][2];
      }
    },
    sendOrder: function() {
      var food = {
        "Prawn omelette": 0,
        "Dry Beef Hor Fun": 0,
        "Sambal KangKung": 0,
        "Pork Fried Rice": 0,
        "Mapo Tofu": 0,
        "Cereal Prawn": 0,
      };
      this.itemsSelected.forEach((element) => {
        food[element[0]] = element[1];
      });
      database
        .collection("orders")
        .add(food)
        .then(() => location.reload());
    },
  },
};
</script>

<style scoped>
#menu {
  font-size: 30px;
}
#calcbutton {
  background-color: grey;
  width: 140px;
  border-radius: 10px;
  padding: 8px;
  text-align: center;
  font-size: 15px;
}
</style>
