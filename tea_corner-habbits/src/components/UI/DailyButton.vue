<template>
  <div>
    <a class="dailyButton">
      <img src="svg/daily-btn.svg" alt="dailyButton" />
    </a>
  </div>
</template>

<script>
export default {
  name: "daily-button",
};
</script>

<style scoped>
.dailyButton:hover {
  opacity: 0.5;
  transition: 0.5s;
}
</style>