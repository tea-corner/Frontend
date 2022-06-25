<template>
  <div>
    <a class="todoButton">
      <img src="svg/to-do-btn.svg" alt="todoButton" />
    </a>
  </div>
</template>

<script>
export default {
  name: "todo-button",
};
</script>

<style scoped>
.todoButton:hover {
  opacity: 0.5;
  transition: 0.5s;
}
</style>