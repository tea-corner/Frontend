<template>
  <section class="sectionBlocks">
    <div class="container selectionContainer">
      <ul class="iii">
        <li>
          <h4 class="blockName">Привычки</h4>
          <div class="blockNewList">
            <button class="btnBlockAdd">Добавить привычку</button>
          </div>
        </li>

        <li>
          <h4 class="blockName">Привычки</h4>
          <div class="blockNewList">
            <button class="btnBlockAdd">Добавить привычку</button>
          </div>
        </li>

        <li>
          <h4 class="blockName">Привычки</h4>
          <div class="blockNewList">
            <button class="btnBlockAdd">Добавить привычку</button>
          </div>
        </li>

        <li>
          <h4 class="blockName">Привычки</h4>
          <div class="blockNewList">
            <button class="btnBlockAdd">Добавить привычку</button>
          </div>
        </li>
      </ul>

    </div>
  </section>
</template>

<script>
</script>

<style scoped>
.iii {
  display: flex;
}
.btnBlockAdd {
  width: 100%;
  background-color: #00f0ff;
}

.sectionBlocks {
  height: 810px;
}

.selectionContainer {
  height: 100%;
}

.blockName {
  margin-right: 203px;
  margin-bottom: 10px;
  margin-left: 16px;
}

.blockNewList {
  padding-bottom: 500px;
  margin-left: 12px;
  background-color: #00f0ff;
  margin-right: 24px;
  width: 308px;
  border: 4px solid black;
  display: flex;
}
</style>