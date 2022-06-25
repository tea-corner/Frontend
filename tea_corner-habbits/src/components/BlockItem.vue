<template>
  <div class="container selectionContainer">
    <div class="blockHabbit">
      <h4 class="blockName">Привычки</h4>

      <div class="blockNewList" id="elementBlock">
        <button class="btnBlockAdd">Добавить привычку</button>

        <div class="scrollText">
          <ul v-for="item in habits" :key="item.name" class="listBlockTask">
            <task-item :text="item.name" 
              :isHabbit="true"
              :isDaily="false" 
              :isTodo="false"
              :user=user
            >
            </task-item>
          </ul>
        </div>
      </div>
    </div>

    <div class="blockDaily">
      <h4 class="blockName">Ежедневные дела</h4>

      <div class="blockNewList HardBtn" id="elementBlock">
        <button class="btnBlockAdd">Добавить ежедневную задачу</button>

        <div class="scrollTextDaily">
          <ul class="listBlockTask" v-for="daily in dailies" :key="daily.name">
            <task-item
              :text="daily.name"
              :isHabbit="false"
              :isDaily="true"
              :isTodo="false"
              :user=user
            >
            </task-item>
          </ul>
        </div>
      </div>
    </div>

    <div class="blockTodo">
      <h4 class="blockName">To-Do</h4>

      <div class="blockNewList" id="elementBlock">
        <button class="btnBlockAdd">Добавить задачу</button>

        <div class="scrollText">
          <ul class="listBlockTask" v-for="todo in todos" :key="todo.name">
            <task-item
              :text="todo.name"
              :isHabbit="false"
              :isDaily="false"
              :isTodo="true"
              :user=user
            ></task-item>
          </ul>
        </div>
      </div>
    </div>

    <div class="blockHabbit">
      <h4 class="blockName">Инвентарь</h4>

      <div class="blockNewListInventory" id="elementBlock">
        <div class="scrollTextInventory">
          <ul class="listBlockHabbitInventory">
            <li v-for="item in inventory" :key="item">
              <inventory-item :item="item"></inventory-item>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InventoryItem from "@/components/UI/InventoryItem.vue";
import TaskItem from "@/components/TaskItem";

export default {
  components: {
    TaskItem,
    InventoryItem,
  },

  data() {
    return {
      inventoryItems: [
        {
          description: "Uzi1",
          imageLink: "http://haits.tk/api/images/ak-47.png",
        },
        {
          description: "Uzi2",
          imageLink: "http://haits.tk/api/images/MP-5.png",
        },
        {
          description: "Uzi3",
          imageLink: "http://haits.tk/api/images/Uzi.png",
        },
        {
          description: "Uzi4",
          imageLink: "http://haits.tk/api/images/Бластер.png",
        },
        {
          description: "Uzi5",
          imageLink: "http://haits.tk/api/images/Чаша рамэна.png",
        },
        {
          description: "Uzi6",
          imageLink: "http://haits.tk/api/images/Онигири.png",
        },
        { description: "Uzi1" },
        { description: "Uzi2" },
        { description: "Uzi3" },
        { description: "Uzi4" },
        { description: "Uzi5" },
        { description: "Uzi6" },
        { description: "Uzi1" },
        { description: "Uzi2" },
        { description: "Uzi3" },
        { description: "Uzi4" },
        { description: "Uzi5" },
        { description: "Uzi6" },
      ],
    };
  },

  props: {
    habits: Array,
    required: Boolean,
    dailies: Array,
    todos: Array,
    inventory: Array,
    user: String,
  },
};
</script>

<style scoped>
.selectionContainer {
  display: flex;
}

.listBlockHabbitInventory {
  margin-bottom: 0;
  height: 126px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
}

.listBlockTask {
  text-align: center;
  margin: 0;
}
.HardBtn {
  white-space: wrap;
}
.scrollText {
  padding-top: auto;
  margin-top: 12px;
  margin-left: 10px;
  margin-bottom: 10px;
  overflow: auto;
  height: 396px;
}

.scrollTextInventory {
  padding-top: auto;
  margin-left: 4px;
  margin-top: 5px;
  overflow: auto;
  height: 465px;
}

.scrollTextDaily {
  padding-top: auto;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  overflow: auto;
  height: 370px;
}

.btnBlockAdd {
  width: 35px;
  margin-top: 10px;

  margin-left: 10px;
  width: 329px;

  color: #757575;
  border: 0;
  background-color: #00dcea;

  font-family: "Blender Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  align-items: center;
}

.blockName {
  margin-bottom: 10px;
  margin-left: 16px;
  white-space: nowrap;
  font-family: "Blender Pro";
}

.blockDaily {
  height: 650px;
}

.blockTodo {
  height: 650px;
}

::-webkit-scrollbar {
  width: 0;
}

.blockNewList {
  width: 351px;
  height: 500px;
  margin-right: 6px;

  border: 0;
  overflow: auto;
  background: url("../../public/svg/svgBlock.svg");
}
.blockNewListInventory {
  width: 351px;
  height: 500px;

  border: 0;
  overflow: auto;

  background: url("../../public/svg/svgBlock.svg");
  text-align: center;
  flex-wrap: wrap;
  display: flex;
}
</style>