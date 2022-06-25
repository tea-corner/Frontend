<template>
  <div class="createItem">
    <habbit-button v-if="habbitButtonVisited"></habbit-button>
    <daily-button v-if="dailyButtonVisited"></daily-button>
    <todo-button v-if="todoButtonVisited"></todo-button>
    <add-button
        v-show="addButtonVisited"
        @click="selectActive"
    ></add-button>
  </div>
</template>

<script>
import AddButton from "@/components/UI/AddButton";
import DailyButton from "@/components/UI/DailyButton";
import TodoButton from "@/components/UI/ToDoButton";
import HabbitButton from "@/components/UI/HabbitButton";

export default {
  
  components: {
    AddButton,
    DailyButton,
    TodoButton,
    HabbitButton,
  },
  
  name: "create-item",

  data() {
    return {
        addButtonVisited: true,
        dailyButtonVisited: false,
        todoButtonVisited: false,
        habbitButtonVisited: false,
    }
  }, 

  methods: {
    selectActive() {
        this.dailyButtonVisited = !this.dailyButtonVisited;
        this.todoButtonVisited = !this.todoButtonVisited;
        this.habbitButtonVisited = !this.habbitButtonVisited;
    }
  }
  
};
</script>

<style scoped>

.createItem {
  display: flex;
  flex-direction: row-reverse;
  top: 307px;
  margin-right: 30px;
  margin-top: 20px;
}

</style>