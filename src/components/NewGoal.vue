<template>
  <div class="hello">
    <article>
      <div class="container">
        <form>
          <input type="text" class="inputField" v-model="goal.name" placeholder="What's your goal?" required>
          <input type="number" class="inputField" v-model="goal.limit" placeholder="How much wanna save?" required>
          <input type="number" class="inputField" v-model="goal.current" placeholder="Wanna top-up moeny now?">
          <button type="button" v-on:click="createNewGoal">Create new goal</button>
        </form>
      </div>
    </article>
    
  </div>
</template>

<script>
import {goalRef} from "../firebase-db"

export default {
  name: 'create',
  data(){
    return{
      goal: {
        limit: "",
        name: "",
        topUp: "",
        current: "",
      }
    }
  },
  methods: {
    createNewGoal(){
      goalRef.add(this.goal)
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(78, 175, 255);;
}
</style>
