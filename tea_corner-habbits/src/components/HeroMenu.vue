<template>
  <div class="nav-barANDHeromenu">


    <div class="heroMenu">
        <nav-bar></nav-bar>
        <hero></hero>
        <create-item></create-item>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import CreateItem from '@/components/CreateItem'

export default {
    components: {
        NavBar,
        Hero,
        CreateItem
    }
}
</script>

<style scoped>
.heroMenu {
  background-image: url("../../public/images/hero_menu.png");
  height: 307px;
}
</style>