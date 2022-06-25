<template>
  <div class="sectionBlocks">
    <hero-menu></hero-menu>

    <block-item> </block-item>
  </div>
</template>

<script>
import HeroMenu from "@/components/HeroMenu";
import Hero from "@/components/Hero";
import TaskButton from "@/components/UI/TaskButton";
import blockItem from "@/components/BlockItem";

export default {
  components: {
    HeroMenu,
    Hero,
    TaskButton,
    blockItem,
  },
};
</script>

<style>
.sectionBlocks {
  font-size: 2.4rem;
  background: url("../../public/images/menuIMG.jpg") center;
  font-family: "Blender Pro";
  background-size: cover;
}

</style>