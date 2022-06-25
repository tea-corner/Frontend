<template>
  <div class="container selectionContainer">
    <div class="blockHabbit">
      <h4 class="blockName">Привычки</h4>

      <div class="blockNewList" id="elementBlock">
        <button class="btnBlockAdd">Добавить привычку</button>

        <div class="scrollText">
          <ul class="listBlockHabbit">
            <li class="itemBlockHabbit">Привет</li>
            <li class="itemBlockHabbit">Привет</li>
  
          </ul>
        </div>
      </div>
    </div>

    <div class="blockHabbit">
      <h4 class="blockName">Ежедневные дела</h4>

      <div class="blockNewList HardBtn" id="elementBlock">
        <button class="btnBlockAdd" >Добавить ежедневную задачу</button>

        <div class="scrollText">
          <ul class="listBlockHabbit">
            <li class="itemBlockHabbit">Привет</li>
            <li class="itemBlockHabbit">Привет</li>
  
          </ul>
        </div>
      </div>
    </div>


    <div class="blockHabbit">
      <h4 class="blockName">To-Do</h4>

      <div class="blockNewList" id="elementBlock">
        <button class="btnBlockAdd"> Добавить задачу</button>

        <div class="scrollText">
          <ul class="listBlockHabbit">
            <li class="itemBlockHabbit">Привет</li>
            <li class="itemBlockHabbit">Привет</li>
  
          </ul>
        </div>
      </div>
    </div>


    <div class="blockHabbit">
      <h4 class="blockName">Инвентарь</h4>

      <div class="blockNewList" id="elementBlock">


        <div class="scrollText">
          <ul class="listBlockHabbit">
            <li class="itemBlockHabbit">
            <InventoryItem> </InventoryItem>
            </li>
            <li class="itemBlockHabbit">
            <InventoryItem> </InventoryItem>
            </li>

            <li class="itemBlockHabbit">
            <InventoryItem> </InventoryItem>
            </li>

            <li class="itemBlockHabbit">
            <InventoryItem> </InventoryItem>
            </li>
  
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InventoryItem from '@/components/UI/InventoryItem.vue'

export default {
  components: {
    InventoryItem
  }
}
</script>

<style scoped>
.selectionContainer {
  display: flex;
}
.listBlockHabbit {
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

::-webkit-scrollbar {
  width: 0;
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