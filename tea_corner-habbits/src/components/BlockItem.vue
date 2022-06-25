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
          <ul class="listBlockTask"
          v-for="task in taskItems"
          :key="task.description">
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
        <div class="scrollText">
          <ul class="listBlockTaskInventory">
            <li class="itemBlockHabbitInventory">Привет</li>
            <li class="itemBlockHabbitInventory">Привет</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from "@/components/TaskItem";

export default {
  components: {
    TaskItem
  },

  data() {
    return {
      taskItems: [
        {
          description:
            "Lala1",
        },
        {
          description:
            "Lala2",
        },
        {
          description:
            "Lala3",
        },
        {
          description:
            "Lala4",
        },
        {
          description:
            "Lala5",
        },
        {
          description:
            "Lala6",
        },
        {
          description:
            "Lala1",
        },
        {
          description:
            "Lala2",
        },
        {
          description:
            "Lala3",
        },
        {
          description:
            "Lala4",
        },
        {
          description:
            "Lala5",
        },
        {
          description:
            "Lala6",
        },
      ],
    };
  },
};
</script>

<style scoped>
.selectionContainer {
  display: flex;
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
  height: 416px;
}

.scrollTextDaily {
  padding-top: auto;
  margin-top: 12px;
  margin-left: 10px;
  margin-bottom: 10px;
  overflow: auto;
  height: 374px;
}

.btnBlockAdd {
  width: 35px;
  margin-top: 10px;

  margin-left: 10px;
  width: 340px;

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

.blockNewListInventory {
  width: 360px;
  height: 530px;
  margin-left: 15px;
  border: 0;
  overflow: auto;
  background: url("../../public/svg/svgBlock.svg");
}
.blockNewList {
  width: 360px;
  height: 530px;
  margin-left: 15px;
  border: 0;
  overflow: auto;
  background: url("../../public/svg/svgBlock.svg");
}
</style>