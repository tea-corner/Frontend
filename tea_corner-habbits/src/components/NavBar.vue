<template>
  <div class="navbar">
    <div class="container">
      <div class="leftContainer">
        <logo></logo>
        <a href="" class="logoText" @click="$router.push('/about')"
          >Tea Corner
          
        </a>
        <a href="" class="navLink" @click="$router.push('/')">Главная</a>
        <a href="" class="navLink" @click="$router.push('/login')">Данжи</a>
        <a href="" class="navLink" @click="$router.push('/users')">Инвентарь</a>
      </div>

      <div class="rightContainer">
        <balance :balance="balance" class="balance"></balance>
        <chat></chat>
        <sync></sync>
        <profile></profile>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/UI/Logo";
import Balance from "@/components/UI/Balance";
import Sync from "@/components/UI/Sync";
import Chat from "@/components/UI/Chat";
import Profile from "@/components/UI/Profile";

export default {
  components: {
    Logo,
    Balance,
    Sync,
    Chat,
    Profile,
  },

  data() {
    return {
      balance: 0,
    };
  },
};
</script>

<style scoped>
.navbar {
  height: 62px;
  background: #2c3c4e;
  color: white;
  margin-bottom: 0;
  align-items: center;
  font-size: 30px;

  font-family: "Blender Pro";
  font-style: normal;
}

.container {
  height: 62px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
}

.navLink {
  margin-right: 15px;
  text-decoration: none;
  color: inherit;
}

.logoText {
  margin-right: 15px;
  text-decoration: none;
  color: inherit;
}

.rightContainer {
  align-items: center;
  display: flex;
  height: 62px;
}

.leftContainer {
  height: 62px;
  align-items: center;
  display: flex;
  margin-right: auto;
  margin-bottom: 0;
}

</style>