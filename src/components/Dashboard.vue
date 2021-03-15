<template>
  <div id="dash">
    <h3 id="barchart">Bar Chart</h3>
    <bar-chart></bar-chart>
    <h3 id="barchart">Line Chart</h3>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from "./charts/BarChart.vue";
import LineChart from "./LineChart.vue";

export default {
  name: "dashboard",
  components: {
    BarChart,
    LineChart,
  },
};
</script>

<style scoped>
#barchart {
  background-color: lightblue;
  text-align: center;
  font-size: 70px;
  color: white;
}
</style>
