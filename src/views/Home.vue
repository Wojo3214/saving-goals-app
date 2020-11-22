<template>
  <div class="home">
    <current-goal></current-goal>
  </div>
</template>

<script>
// @ is an alias to /src
import CurrentGoal from "@/components/CurrentGoal.vue";

export default {
  name: "Home",
  components: {
    CurrentGoal
  }
};
</script>
<style scoped>
  .home{
    width: 90%;
    margin: 0 auto 80px auto;
  }
</style>
