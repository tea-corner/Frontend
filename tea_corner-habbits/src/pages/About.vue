<template>
  <div>
    <hero-menu></hero-menu>
    <hero></hero>
  </div>
</template>

<script>
import HeroMenu from "@/components/HeroMenu";
import Hero from "@/components/Hero";
import TaskButton from "@/components/UI/TaskButton";

export default {
  components: {
    HeroMenu,
    Hero,
    TaskButton,
  },
};
</script>

<style>
</style>