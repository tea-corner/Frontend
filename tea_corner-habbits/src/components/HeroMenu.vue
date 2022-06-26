<template>
  <div class="nav-barANDHeromenu">
    <div class="heroMenu">
        <nav-bar :balance="user.balance"></nav-bar>
        <hero :user="user"></hero>
        <create-item></create-item>
        
    </div>
      </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import CreateItem from '@/components/CreateItem'
import ModalWindow from "@/components/modalWindowAddTask";

export default {
    components: {
        NavBar,
        Hero,
        CreateItem,
        ModalWindow,
        CreateItem
    },
    
    props: ['user'],
}
</script>

<style scoped>
.heroMenu {
  background-image: url("../../public/images/hero_menu.png");
  height: 307px;
}
</style>