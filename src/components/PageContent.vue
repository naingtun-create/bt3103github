<template>
  <div>
    <ul id="itemsList">
      <li v-for="item in items" v-bind:key="item.id">
        <h2 id="itemName">{{ item.name }}</h2>
        <img v-bind:src="item.imageURL" alt="food" />
        <p id="price">${{ item.price }}</p>
        <counter v-on:counter="onCounter" v-bind:item="item"></counter>
      </li>
    </ul>
    <basket id="shoppingBasket" v-bind:itemsSelected="itemsSelected"> </basket>
  </div>
</template>

<script>
import QuantityCounter from "./QuantityCounter.vue";
import Basket from "./Basket.vue";
import database from "../firebase.js";

export default {
  components: {
    counter: QuantityCounter,
    basket: Basket,
  },
  data() {
    return {
      itemsSelected: [],
      items: [],
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    onCounter: function(item, count) {
      if (this.itemsSelected.length === 0 && count > 0) {
        this.itemsSelected.push([item.name, count, item.price]);
      } else {
        var inBasket = false;
        for (let i = 0; i < this.itemsSelected.length; i++) {
          const curr_item = this.itemsSelected[i];
          const item_name = curr_item[0];
          if (item_name == item.name && count > 0) {
            inBasket = true;
            this.$set(this.itemsSelected, i, [item.name, count, item.price]);
          } else if (item_name == item.name && count == 0) {
            inBasket = true;
            this.itemsSelected.splice(i, 1);
          }
        }
        if (!inBasket && count > 0) {
          this.itemsSelected.push([item.name, count, item.price]);
        }
      }
    },
    fetchItems: function() {
      database
        .collection("menu")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.items.push(doc.data());
          });
        });
    },
  },
};
</script>

<style scoped>
#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 23%;
  left: 78%;
}
</style>
