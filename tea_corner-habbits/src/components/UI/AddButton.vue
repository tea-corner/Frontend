<template>
  <div>
    <a class="addButton">
      <img src="svg/add-btn.svg" alt="addButton" />
    </a>
  </div>
</template>

<script>
export default {
  name: "add-button",

  props: {
    name: String,
  },
};
</script>

<style scoped>
.addButton:hover {
  opacity: 0.5;
  transition: 0.5s;
}
</style>