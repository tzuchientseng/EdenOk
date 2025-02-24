<template>
  <nav class="NavBar">
    <!-- Logo -->
    <div class="NavBar__logo">
      <font-awesome-icon :icon="['fas', 'house-chimney']" class="icon" aria-label="Home" />
      <p class="NavBar__brand">伊甸OK</p>
    </div>

    <!-- Menu -->
    <ul class="NavBar__menu">
      <li v-for="item in menuItems" :key="item.text">
        <a :href="item.link">{{ item.text }}</a>
      </li>
    </ul>

    <!-- Icons -->
    <div class="NavBar__icons">
      <font-awesome-icon :icon="['fas', 'coins']" class="icon gold-icon" aria-label="Coins" />
      <font-awesome-icon :icon="['fas', 'user']" class="icon" aria-label="User" />
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { text: "介紹", link: "#" }, // Purpose: 教學 傳承
        { text: "伯特利", link: "#" }, // Guitar
        { text: "畢士大池", link: "#" }, // Magic 
        { text: "客西馬尼園", link: "#" }, // 
        { text: "馬可樓", link: "#" },
        { text: "何烈山", link: "#" },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

.NavBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #181818;
  height: 70px;
  padding: 0 20px;
}

.NavBar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.NavBar__brand {
  font-family: "Audiowide", sans-serif;
  font-size: 20px;
  color: #0099a1;
}

.NavBar__menu {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.NavBar__menu li a {
  text-decoration: none;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  transition: opacity 0.3s ease;
}

.NavBar__menu li a:hover {
  opacity: 0.7;
}

.NavBar__icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon {
  font-size: 24px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  color: rgb(167, 167, 167);
}

.icon:hover {
  opacity: 0.7;
}

.gold-icon {
  color: gold;
  font-size: 30px;
}

/* RWD */
@media (max-width: 768px) {
  .NavBar {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }

  .NavBar__menu {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .NavBar__icons {
    margin-top: 10px;
  }
}
</style>
