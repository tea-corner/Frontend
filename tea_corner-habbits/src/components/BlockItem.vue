<template>
  <div class="container selectionContainer">
    <div class="blockHabbit">
      <h4 class="blockName">Привычки</h4>

      <div class="blockNewList" id="elementBlock">
        <button class="btnBlockAdd">Добавить привычку</button>

        <div class="scrollText">
          <ul
            v-for="task in taskItems"
            :key="task.description"
            class="listBlockTask"
          >
            <task-item :text="task.description"></task-item>
          </ul>
        </div>
      </div>
    </div>

    <div class="blockDaily">
      <h4 class="blockName">Ежедневные дела</h4>

      <div class="blockNewList HardBtn" id="elementBlock">
        <button class="btnBlockAdd">Добавить ежедневную задачу</button>

        <div class="scrollTextDaily">
          <ul
            class="listBlockTask"
            v-for="task in taskItems"
            :key="task.description"
          >
            <task-item :text="task.description"></task-item>
          </ul>
        </div>
      </div>
    </div>

    <div class="blockTodo">
      <h4 class="blockName">To-Do</h4>

      <div class="blockNewList" id="elementBlock">
        <button class="btnBlockAdd">Добавить задачу</button>

        <div class="scrollText">
          <ul
            class="listBlockTask"
            v-for="task in taskItems"
            :key="task.desciption"
          >
            <task-item :text="task.description"></task-item>
          </ul>
        </div>
      </div>
    </div>

    <div class="blockHabbit">
      <h4 class="blockName">Инвентарь</h4>

      <div class="blockNewListInventory" id="elementBlock">
        <div class="scrollTextInventory">
          <ul class="listBlockHabbitInventory">
            <li 
              v-for="itemInventory in inventoryItems"
              :key="itemInventory.description"
            >
              <inventory-item :weaponName="itemInventory.description"></inventory-item>
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
      taskItems: [
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
        {
          description: "Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1Lala1",
        },
      ],

      inventoryItems: [
        {description: "Uzi1"},
        {description: "Uzi2"},
        {description: "Uzi3"},
        {description: "Uzi4"},
        {description: "Uzi5"},
        {description: "Uzi6"},
        {description: "Uzi1"},
        {description: "Uzi2"},
        {description: "Uzi3"},
        {description: "Uzi4"},
        {description: "Uzi5"},
        {description: "Uzi6"},
        {description: "Uzi1"},
        {description: "Uzi2"},
        {description: "Uzi3"},
        {description: "Uzi4"},
        {description: "Uzi5"},
        {description: "Uzi6"}
      ]
    };
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
  height: 398px;
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
  margin-right: 165px;
  margin-bottom: 10px;
  margin-left: 16px;
  white-space: nowrap;
  font-family: "Blender Pro";
}
.blockHabbit {
  height: 650px;
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
  width: 348px;
  height: 500px;

  margin-left: 8px;
  border: 0;
  overflow: auto;
  background: url("../../public/svg/svgBlock.svg");
}
.blockNewListInventory {
  width: 348px;
  height: 500px;

  margin-left: 10px;
  border: 0;
  overflow: auto;

  background: url("../../public/svg/svgBlock.svg");
  text-align: center;
  flex-wrap: wrap;
  display: flex;
}
</style>