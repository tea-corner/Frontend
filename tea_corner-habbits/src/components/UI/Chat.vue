<template>
  <div class="chatContainer">
    <a href="" class="btnChatIcon">
      <img src="svg/comment.svg" alt="teaIcon" class="logoImg" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.chatContainer {
  display: flex;
  justify-content: center;
  margin-right: 0;
  margin-left: 20px;
}

.chatContainer:hover {
  opacity: 0.5;
  transition: 0.5s;
}

.logoImg {
  display: flex;
  padding-right: 0;
}

.btnChatIcon {
  pointer-events: none;
}
</style>