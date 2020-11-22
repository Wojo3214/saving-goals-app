<template>
  <div class="new">
    <h1>Create a new goal to save money</h1>
    <new-goal></new-goal>
  </div>
</template>

<script>
import NewGoal from '@/components/NewGoal.vue';

export default {
  name: 'New',
  components: {
    NewGoal
  }
};
</script>
