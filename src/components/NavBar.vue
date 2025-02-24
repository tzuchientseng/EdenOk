<template>
  <div class="NavBar">


    <font-awesome-icon :icon="['fas', 'coins']" style="color: gold; font-size: 30px;" />
    <font-awesome-icon :icon="['fas', 'user']" style="color: white; font-size: 24px;" />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sansita:wght@701&display=swap');

.NavBar {
  /* background-color: white; */
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 20px;
}

</style>
