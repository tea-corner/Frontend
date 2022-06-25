<template>
  <div class="taskItem">
    <task-button>+</task-button>
    <div class="desciption">{{ this.text }}</div>
    <task-button>-</task-button>
  </div>
</template>

<script>
import TaskButton from "@/components/UI/TaskButton";

export default {
  components: { TaskButton },

  props: {
    text: String,
    required: Boolean,
  },
};
</script>

<style>
.taskItem {
  display: flex;
  width: 329px;
  text-align: center;
  margin-top: 10px;
}

.desciption {
  background: #00b8c4;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-all;
}
</style>