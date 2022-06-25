<template>
  <div class="v-popup">
    <div class="v-popup_header">
      <span>Popup Name</span>
      <span></span>
    </div>
    <div class="v-popup_content">
      <slot> </slot>
    </div>
    <div class="v-popup_footer">
      <button class="close_modal" @click="closePopup">Close</button>
      <button class="submit_btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {},
  data() {
    return {};
  },
  methods: {
     closePopup() {
      this.$emit('closePopup')
     }
  }
};
</script>

<style >
.v-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  border: 6px solid red;
  width: 400px;
}
.v-popup_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-popup_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-popup_content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit_btn {
  padding: 8px;
  color: white;
  background: red;
}

.close_modal {
  padding: 8px;
  color: white;
  background: blueviolet;
}
</style>ue