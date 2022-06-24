<template>
    <div class="heroMenu">
        <nav-bar></nav-bar>
        <hero></hero>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'

export default {
    components: {
        NavBar,
        Hero
    }
}
</script>

<style>
.heroMenu {
    background-image: url("../../public/images/hero_menu.png");
    height: 307px;
}
</style>