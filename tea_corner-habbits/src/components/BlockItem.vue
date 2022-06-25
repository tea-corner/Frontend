<template>
  <section class="sectionBlocks">
    <div class="container selectionContainer">
      <h4 class="blockName">Привычки</h4>
      <div class="blockNewList">
        <button class="btnBlockAdd">Добавить привычку</button>
        <div class="scrollText">
          <ul>
            <li>Привет</li>
            <li>Привет1</li>
            <li>Привет2</li>
            <li>Привет2</li>

            <li>Привет2</li>
            <li>Привет2</li>
          </ul>
        </div>
      </div>

      
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
.scrollText {
  overflow: auto;
  padding-top: auto;
  margin-left: 10px;
}
.btnBlockAdd {
  width: 35px;
  margin-top: 10px;

  margin-left: 10px;
  width: 392px;

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

.sectionBlocks {
  background: url('../../public/images/menuIMG.jpg');
  height: 890px;
  width: 1728px;
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
  height: 604px;

  width: 413px;
  margin-left: 12px;
  border: 0;
  overflow: auto;
  background: url("../../public/images/block.png");
}
</style>