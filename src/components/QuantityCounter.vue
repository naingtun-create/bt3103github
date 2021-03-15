<template>
  <div>
    <button type="button" v-on:click="decrease">-</button>
    <p id="count">{{ counter }}</p>
    <button type="button" v-on:click="increase">+</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase: function() {
      if (this.counter >= 10) {
        alert("You cannot buy more than 10 items.");
      } else {
        this.counter++;
      }
      this.$emit("counter", this.item, this.counter);
    },
    decrease: function() {
      if (this.counter > 0) {
        this.counter--;
      }
      this.$emit("counter", this.item, this.counter);
    },
  },
};
</script>

<style scoped>
button {
  background-color: pink;
  width: 80px;
  padding: 12px;
  font-size: 30px;
  border-radius: 10px;
}
#count {
  display: inline;
  margin: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
