import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                label: "Number of Orders",
                backgroundColor:["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","lightyellow"],
                data: []
              }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                    }
                }]
            },
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of Each Dish'
            },
            responsive: true,
            maintainAspectRatio: false
        },
    }
  },
  methods: {
      fetchItems: function() {
          database
          .collection('orders')
          .get()
          .then(querySnapShot => {
              var food = {};
              querySnapShot.forEach(doc => {
                  var order = doc.data()
                  for (var dish in order) {
                      if (food[dish]) {
                          food[dish] += order[dish]
                      } else {
                          food[dish] = order[dish]
                      }
                  }
              })
              for (var dish of Object.keys(food).sort()) {
                  this.datacollection.labels.push(dish)
                  this.datacollection.datasets[0].data.push(food[dish])
                }
                this.renderChart(this.datacollection, this.options)
          })
      }
  },
  created() {
      this.fetchItems()
  }
}
