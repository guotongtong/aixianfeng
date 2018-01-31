<template>
  <div id="app">
    
    <router-view/>
    <div class="nav">
        <router-link to="/home"><span class="glyphicon glyphicon-user"></span>首页</router-link>
        <router-link to="/shopping"><span class="glyphicon glyphicon-user"></span>闪送超市</router-link>
        <router-link to="/shop"><span class="glyphicon glyphicon-user"></span>购物车</router-link>
        <router-link to="/mine"><span class="glyphicon glyphicon-user"></span>我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
#app .nav{
  width: 10rem;
  height: 1.595745rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: red;
  font-size: .390071rem;
}
a{
  text-decoration: none;
}
</style>
