<template>
  <div class="hello">
    <h1>Check your savings</h1>
    <article v-for="goal in goals" :key="goal.id">
      
      <div class="container">
        <div class="delete" v-on:click="deleteGoal(goal.id)">&#x02A2F;</div>
        <h2>{{goal.name}}</h2>
        <div class="minmax">
            <span class="currently">{{goal.current}} kr - </span><span class="aim">{{goal.limit}} kr</span>
            <div></div>
        </div>
        <div class="percent" >{{goal.kupa}}</div>

        <form v-if="goal.current <= goal.limit">
          <label class="input-label" for="top-up">Want to top up some money?</label>
          <input type="number" class="inputField" name="top-up" v-model="goal.topUp" placeholder="Put your money here">
          <button type="button" v-on:click="updateTopUp(goal.id, goal.name, goal.limit, goal.topUp, goal.current)">Top-up money</button>
        </form>
        <form v-else-if="goal.current >= goal.limit"></form>

        <p class="congratz" v-if="goal.current >= goal.limit">Congratulations! Now you can {{goal.name}}! <iframe src="https://giphy.com/embed/C5cDXxEgBGNjy" width="90%" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/money-spongebob-shittyreactiongifs-C5cDXxEgBGNjy"></a></p>
      </div>
    </article>
    
  </div>
</template>

<script>
import {goalRef} from "../firebase-db"

export default {
  data(){
    return {
      goals: {
        limit:0,
        name: "",
        topUp:0,
        current: 0,
        kupa: (this.current / this.limit) * 100
      }
    };
  },
  firestore: {
    goals: goalRef
  },
  state: 'default',

  props: {
    goal:Object
  },
  methods: {
    //topUpMoney(){
      //let currentMoney = this.goal.topUp;
      //console.log(currentMoney);
      //goalRef.doc(this.go.id).set({
       // topUp: currentMoney + this.go.topUp
     // })
    //}
    deleteGoal(id){
      goalRef.doc(id).delete();
    },
    
    showPercent(limit, current){
      let currentMoney = current;
      let limitMoney = limit;

      console.log(currentMoney / limitMoney * 100);
      let sum = currentMoney / limitMoney * 100;

      document.querySelector(".percent").innerHTML = sum;
    },

    updateTopUp(id, name, limit, topUp, current){
      let currentMoney = current;
      let topUpMoney = topUp;
      let sum = +currentMoney + +topUpMoney;
      let sum2 = (+currentMoney / +limit) * 100;
      console.log("Current money is: " + sum);

      document.querySelector(".percent").innerHTML = sum2 + "%";

      goalRef.doc(id).set({
        topUp: topUpMoney,
        current: sum,
        name: name,
        limit: limit
      });
      this.$router.push('/');
    }/*
    showPercent: function(){
      console.log((this.goals.current + this.goals.topUp) / this.goals.limit * 100)
      
    },
    updateTopUp() {
      //let sum = (+this.goal.current + +this.goal.topUp) / +this.goal.limit *100
      goalRef.doc(this.goal.id).set({
        topUp: this.goal.topUp
      });

      this.$router.push("/");
      /*
      for (const goal of this.goals) {
        let sum = (+goal.current + +goal.topUp) / +goal.limit *100
        console.log(sum);

        
        document.querySelector(".percent").innerHTML = sum;
      } */
    }
    
  };
  

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
  color: #42b983;
}

.congratz{
  color: #28a06a;
  font-weight: 800;
}

.delete{
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

span{
  font-size: 22px;
}

</style>
