<template>
  <div class="navbar">
    <div class="container">
      <div class="leftContainer">
        <logo></logo>
        <a href="" 
        class="logoText glitch" 
        data-glitch="Tea Corner"
        @click="$router.push('/about')"
          >Tea Corner
          
        </a>
        <a href="" 
        class="navLink glitch"
        data-glitch="Главная"
        @click="$router.push('/')"
        >Главная</a>
        <a href="" 
        class="navLink glitch" 
        data-glitch="Данжи"
        @click="$router.push('/login')"
        >Данжи</a>
        <a href="" 
        class="navLink glitch"
        data-glitch="Инвентарь"
        @click="$router.push('/users')">Инвентарь</a>
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

  props: {balance: Number},
  
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

.glitch {
  
  
  /* top: 50%;
  left: 50%; */
  transform: translate(0%, 0%);
  text-transform: uppercase;
  
}
.glitch:before, .glitch:after {
  display: block;
  content: attr(data-glitch);
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.8;
}
.glitch:after {
  color: #f0f;
  z-index: -2;
}
.glitch:before {
  color: #0ff;
  z-index: -1;
}
.glitch:hover:before {
  -webkit-animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both 5;
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both 5;
}
.glitch:hover:after {
  animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both 5;
}


@-webkit-keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-5px, 5px);
  }
  40% {
    transform: translate(-5px, -5px);
  }
  60% {
    transform: translate(5px, 5px);
  }
  80% {
    transform: translate(5px, -5px);
  }
  to {
    transform: translate(0);
  }
}
@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-5px, 5px);
  }
  40% {
    transform: translate(-5px, -5px);
  }
  60% {
    transform: translate(5px, 5px);
  }
  80% {
    transform: translate(5px, -5px);
  }
  to {
    transform: translate(0);
  }
}

</style>