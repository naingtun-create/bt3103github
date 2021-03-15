<template>
  <div id="app">
    <h1 id="storename">Naing Tun's Zi Char</h1>
    <h1>{{ title }}</h1>
    <header>
      <ul id="home">
        <router-link to="/" exact>Home</router-link>
      </ul>

      <ul id="orders">
        <router-link to="/orders" exact>Orders</router-link>
      </ul>

      <ul id="dashboard">
        <router-link to="/dashboard" exact>Dashboard</router-link>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
header {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
#storename {
  background-color: pink;
  text-align: center;
  font-size: 40px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
#home {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
#orders {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
#dashboard {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
