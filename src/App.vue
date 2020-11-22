<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/new">Create new goal</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

#nav {
  padding: 20px 25px;
  width: 70%;
  position: fixed;
  bottom: 10px;
  border-radius: 10px;
  left: 50%;
  background-color: #fff;
  z-index: 99999;
  transform: translateX(-50%);
  -webkit-box-shadow: 5px 5px 16px -3px rgba(0,0,0,0.44);
  -moz-box-shadow: 5px 5px 16px -3px rgba(0,0,0,0.44);
  box-shadow: 5px 5px 16px -3px rgba(0,0,0,0.44);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(78, 175, 255);
}

.container{
  width: 90%;
  margin: 15px auto 20px auto;
  padding: 15px 0;
  -webkit-box-shadow: 5px 5px 16px -3px rgba(0,0,0,0.44);
  -moz-box-shadow: 5px 5px 16px -3px rgba(0,0,0,0.44);
  box-shadow: 5px 5px 16px -3px rgba(0,0,0,0.44);
  border-radius: 10px;
  position: relative;
}

input{
  width: 90%;
  background-color: rgb(235, 235, 235);
  margin-top: 10px;
  padding: 10px 15px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
}

button{
  width: 50%;
  background-color: rgb(78, 175, 255);
  margin-top: 30px;
  padding: 10px 15px;
  box-sizing: border-box;
  border: none;
  border-radius: 100px;
  color: #fff;
}

.minmax{
  margin-bottom: 20px;
}

label{
  text-align: center;
}
</style>
