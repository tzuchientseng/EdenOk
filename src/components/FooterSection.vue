<template>
  <div class="NavBar">
    <div class="logo-container">
      Eden<span class="highlight">Ok</span>
      <div class="logo-subtext">Tutorial</div>
    </div>

  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sansita:wght@701&display=swap');

.NavBar {
  /* background-color: white; */
  display: flex;
  align-items: center;
  height: auto;
  padding: 10px 20px;
}

.logo-container {
  display: inline-block;
  font-family: 'Sansita', sans-serif;
  /* font-size: 48px; */
  font-size: clamp(7px, 2vw, 12px); /* 最小 7px，最大 12px，隨視窗調整 */
  text-align: center;
  color: white;
  padding: 10px 17px;
  margin-top: 10px;
  border: 3px solid white;
  border-radius: 10px;
  position: relative;
}

.highlight {
  color:#0099A1;
  font-weight: bold;
}

.highlight::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background-color: gold;
  margin: 2px auto;
}

.logo-subtext {
  display: block;
  font-size: clamp(2px, 2vw, 7px);
  letter-spacing: 2px;
  color: white;
  text-align: center;
  margin-top: 4px;
}
</style>
