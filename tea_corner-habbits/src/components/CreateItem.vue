<template>
  <div class="containerCreateItem">
    <div class="createItem">
      <habbit-button
        v-if="habbitButtonVisited"
        @click="openModalWindow"
      ></habbit-button>
      <daily-button v-if="dailyButtonVisited"></daily-button>
      <todo-button v-if="todoButtonVisited"></todo-button>
      <add-button v-show="addButtonVisited" @click="selectActive"></add-button>
    </div>
    <ModalWindow v-if="isInfoPopupVisible" @closePopup="closePopupInfo" />
  </div>
</template>

<script>
import AddButton from "@/components/UI/AddButton";
import DailyButton from "@/components/UI/DailyButton";
import TodoButton from "@/components/UI/ToDoButton";
import HabbitButton from "@/components/UI/HabbitButton";
import ModalWindow from "@/components/modalWindowAddTask";

export default {
  components: {
    AddButton,
    DailyButton,
    TodoButton,
    HabbitButton,
    ModalWindow,
  },

  name: "create-item",

  data() {
    return {
      addButtonVisited: true,
      dailyButtonVisited: false,
      todoButtonVisited: false,
      habbitButtonVisited: false,
      isInfoPopupVisible: false,
    };
  },

  methods: {
    selectActive() {
      this.dailyButtonVisited = !this.dailyButtonVisited;
      this.todoButtonVisited = !this.todoButtonVisited;
      this.habbitButtonVisited = !this.habbitButtonVisited;
    },

    openModalWindow() {
      this.isInfoPopupVisible = true;
    },
    closePopupInfo() {
      this.isInfoPopupVisible = false;
    },
  },
};
</script>

<style scoped>
.containerCreateItem {
  position: relative;
    z-index:100;
}
.createItem {
  display: flex;

  flex-direction: row-reverse;
  top: 307px;
  margin-right: 30px;
  margin-top: 20px;
}
</style>