<template>
  <div class="containerCreateItem">
    <div class="createItem">
      <habbit-button
        v-if="habbitButtonVisited"
        @click="openModalWindow"
      ></habbit-button>
      <daily-button v-if="dailyButtonVisited" @click="openModalWindowDAILY" ></daily-button>
      <todo-button v-if="todoButtonVisited" 
        @click="openModalWindowTODO"
      >></todo-button>
      <add-button v-show="addButtonVisited" @click="selectActive"></add-button>
    </div>
    <ModalWindow v-if="isInfoPopupVisible" @closePopupInfo="closePopupInfo" />
    <modal-todo v-if="isInfoPopupVisibleTODO" @closePopupInfoTODO="closePopupInfoTODO"></modal-todo>
    <daily-modal v-if="isInfoPopupVisibleDAILY" @closePopupInfoDAILY="closePopupInfoDAILY"> </daily-modal>
  </div>
</template>

<script>
import AddButton from "@/components/UI/AddButton";
import DailyButton from "@/components/UI/DailyButton";
import TodoButton from "@/components/UI/ToDoButton";
import HabbitButton from "@/components/UI/HabbitButton";
import ModalWindow from "@/components/modalWindowAddTask";
import modalTodo from "@/components/modalTodo";
import dailyModal from "@/components/dailyModal";



export default {
  components: {
    AddButton,
    DailyButton,
    TodoButton,
    HabbitButton,
    ModalWindow,
    modalTodo,
    dailyModal

  },

  name: "create-item",

  data() {
    return {
      addButtonVisited: true,
      dailyButtonVisited: false,
      todoButtonVisited: false,
      habbitButtonVisited: false,
      isInfoPopupVisible: false,
      isInfoPopupVisibleTODO: false,
      isInfoPopupVisibleDAILY: false,
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

    openModalWindowTODO() {
      this.isInfoPopupVisibleTODO = true;
    },
    closePopupInfoTODO() {
      this.isInfoPopupVisibleTODO = false;
    },
    openModalWindowDAILY() {
      this.isInfoPopupVisibleDAILY = true;
    },
    closePopupInfoDAILY() {
      this.isInfoPopupVisibleDAILY = false;
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
  margin-top: 0px;
}
</style>