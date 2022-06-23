<template>
  <div class="navbar">
    <logo></logo>
    <a href="" class="logoText" @click="$router.push('/about')">Tea Corner</a>
    <a href="" class="navLink" @click="$router.push('/')">Главная</a>
    <a href="" class="navLink" @click="$router.push('/login')">Данжи</a>
    <a href="" class="navLink" @click="$router.push('/users')">Инвентарь</a>
  </div>
  
</template>

<script>
import Logo from './UI/Logo.vue'

export default {
  components: { Logo },

}
</script>

<style>

.navbar {
    height: 62px;
    background: #2C3C4E;
    display: flex;
    align-items: center;
    color:white;
}

.navLink {
    margin:15px;
    text-decoration:none;
    color:inherit;
}

.logoText {
    text-decoration:none;
    color:inherit; 
}

</style>