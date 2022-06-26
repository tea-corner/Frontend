<template>
  <div class="taskItem">
    <task-button 
    @click="updateDaily(this.text)">+</task-button>
    <div class="desciption">{{ this.text }}</div>
    <task-button v-if="isHabbit" @click="updateHabbit(false, this.text)">-</task-button>
  </div>
</template>

<script>
import TaskButton from "@/components/UI/TaskButton";

export default {
  components: { TaskButton },

  props: {
    text: String,
    required: Boolean,
    typeButton: String,
    isDaily: Boolean,
    isTodo: Boolean,
    user: String,

    isHabbit: {
      type: Boolean,

      default: function () {
        return true;
      },
    },
  },

  methods: {

    async updateHabbit(isCompleted, habbitName) {
      console.log("habb");
      let requestString =
        "http://haits.tk/api" + "/user/habits?nickname=" + this.user + "&";
      requestString += "name=" + habbitName;
      requestString += isCompleted ? "&completed=true" : "";

      let response = await fetch(requestString, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      let result = await response.json();
      console.log(result);
      
    },

    async updateDaily(dailyName) {

      let requestString =
       "http://haits.tk/api" + "/user/dailies?nickname=" + this.user + "&";
        requestString += "name=" + dailyName;

      let response = await fetch(requestString, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      let result = await response.json();
      console.log(result);

    },

     async updateTodo(todoName) {
      console.log("todoName");
      let requestString =
        "http://haits.tk/api" + "/user/todos?nickname=" + this.user + "&";
        requestString += "name=" + todoName;

      let response = await fetch(requestString, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      let result = await response.json();

      console.log(result);
      
    },

    update(isHabbit, isDaily, isTodo, text) {
      if (isHabbit) {
        updateHabbit(true, text);
      }

      if (isDaily) {
        updateDaily(text);
      }

      if(isTodo) {
        updateTodo(text);
      }
    },
    
  },
};
</script>

<style>
.taskItem {
  display: flex;
  width: 325px;
  justify-content: center;
  text-align: center;
  margin-left: 2px;
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

.taskItem:hover {
  opacity: 0.7;
  transition: 0.7s;
}
</style>