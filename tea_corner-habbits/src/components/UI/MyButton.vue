<template>
  <div>
    <button class="myButton">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "my-button",

  props: {
    name: String,
  },
};
</script>

<style scoped>
.myButton {
  margin-top: 4rem;
  margin-bottom: 2rem;
  padding: 1rem;
  padding-left: 7rem;
  padding-right: 7rem;
  border: 0rem;
  font-family: "Blender Pro";
  font-size: 2.4rem;
  font-weight: 700;
  color: white;
  background: url("../../../public/images/Red_buttom_SVG.svg") no-repeat;
  background-size: contain;
  background-position: center center;
  width: auto;
  height: auto;
  cursor: pointer;
  transition: 0.5s;
}

.myButton:hover {
  transition: 0.5s;

  transform: rotate(-17deg);
}
</style>