<template>
  <div>
    <div v-for="(quantity, food, index) in datapacket" v-bind:key="food">
      <p>{{ food }}: {{ quantity }}</p>
      <input :id="index" placeholder="0" type="number" min="0" />
    </div>
    <br />
    <button v-on:click="updateOrder">Update Order</button>
  </div>
</template>

<script>
import database from "../firebase.js";

export default {
  data() {
    return {
      datapacket: {},
    };
  },
  methods: {
    fetchItems: function() {
      database
        .collection("orders")
        .doc(this.$route.params.docID)
        .get()
        .then((doc) => {
          this.datapacket = doc.data();
        });
    },
    updateOrder: function() {
      var copy = Object.assign({}, this.datapacket);
      Object.entries(this.datapacket).forEach(([key], index) => {
        var quantity = document.getElementById(index).value;
        if (quantity != "") {
          copy[key] = parseInt(quantity);
        }
      });
      database
        .collection("orders")
        .doc(this.$route.params.docID)
        .update(copy)
        .then(() => {
          this.$router.push("orders");
        });
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>

<style scoped></style>
