<template>
  <div>
    <hero-menu></hero-menu>
    <hero></hero>
    <add-button></add-button>
  </div>
</template>

<script>
import HeroMenu from '@/components/HeroMenu'
import Hero from '@/components/Hero'
import AddButton from '@/components/UI/AddButton'

export default {
  components: {
    HeroMenu,
    Hero,
    AddButton
  }
}
</script>

<style>
</style>