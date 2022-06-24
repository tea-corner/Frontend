<template>
  <div class="navbar">
    <logo></logo>
    <a href="" class="logoText" @click="$router.push('/about')">Tea Corner</a>
    <a href="" class="navLink" @click="$router.push('/')">Главная</a>
    <a href="" class="navLink" @click="$router.push('/login')">Данжи</a>
    <a href="" class="navLink" @click="$router.push('/users')">Инвентарь</a>
    <balance :balance="balance" class="balance"></balance>
    <chat></chat>
    <sync></sync>
    <profile></profile>
  </div>
  
</template>

<script>

import Logo from '@/components/UI/Logo';
import Balance from '@/components/UI/Balance';
import Sync from '@/components/UI/Sync';
import Chat from '@/components/UI/Chat';
import Profile from '@/components/UI/Profile';

export default {
    components: {
      Logo, Balance, Sync, Chat,  Profile
    },
    
    data() {
      return {
        balance: 0
      }
    }
}
</script>

<style scoped>

.navbar {
    height: 62px;
    background: #2C3C4E;
    display: flex;
    align-items: center;
    color:white;
}

.navLink {
    margin-right:15px;
    text-decoration:none;
    color:inherit;
}

.logoText {
    margin-right:15px;
    text-decoration:none;
    color:inherit; 
}

</style>