<template>
  <div class="balance">
    <p class="balanceText">{{ this.balance }}</p>
    <img src="/svg/dollar.svg" alt="dollarIcon" class="dollarIcon" />
  </div>
</template>

<script>
export default {
  props: {
    balance: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.balance {
  display: flex;
  justify-content: center;
}

.balanceText {
  display: flex;
  font-family: "Blender Pro";
  font-style: normal;
  color: #00f0ff;
}

.balanceText:hover {
  opacity: 0.5;
  transition: 0.5s;
}

.dollarIcon {
  display: flex;
}

.dollarIcon:hover {
  opacity: 0.5;
  transition: 0.5s;
}
</style>