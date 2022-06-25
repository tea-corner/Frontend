<template>
  <button class="taskButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: "task-button",
};
</script>

<style>
.taskButton {
    background-color: #006970;
    width: 29px;
    height: 48px;
    color: white;
    font-size: 30px;
    font-family: 'Blender Pro';
}
</style>