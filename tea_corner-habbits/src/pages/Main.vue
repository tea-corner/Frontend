<template>
<body>
  <div class="mainPage">
    <hero-menu></hero-menu>
    <block-item> </block-item>
  </div>
</body>
  
</template>

<script>
import HeroMenu from "@/components/HeroMenu";
import Hero from "@/components/Hero";
import blockItem from "@/components/BlockItem";
export default {
  components: {
    HeroMenu,
    Hero,
    blockItem,
  },
};
</script>

<style>

.mainPage {
  font-size: 2.4rem;
  background: url("../../public/images/menuIMG.jpg") center;
  font-family: "Blender Pro";
  background-size: cover;
}

body {
  margin: 0;
}
</style>