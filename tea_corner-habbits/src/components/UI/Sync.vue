<template>
  <a href="" @click="$router.push('/')" class="btnSyncIcon">
    <img src="svg/sync.svg" />
  </a>
</template>

<script>
export default {};
</script>

<style>
.btnSyncIcon {
  display: flex;
  border: 0;
  margin-right: 0px;
  margin-left: 20px;
}

.btnSyncIcon:hover {
  opacity: 0.5;
  transition: 0.5s;
}
</style>