<template>
  <div class="InventoryItem">
    <img :src="item.imageLink" alt="" class="weaponIcon" />
    <div class="weaponBlock">
      <h5 class="weaponName">{{this.item.description}}</h5>
    </div>
  </div>
</template>


<script>
export default {
  props: ['item'],
};
</script>


<style scoped>
.InventoryItem {

    height: 115px;
    background-color: #00DCEA;
    width: 100px;
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-left: 10px;
    margin-top: 9px;
    flex-wrap: wrap;
    
}

.weaponBlock {
    width: 100px;
    height:21px;   
    background-color: #00AEB9;
}

.weaponName {
    margin: 0;
    height: 21px;
    
}
.weaponIcon {
    margin-bottom: auto;
    width: 100px;
    height: 90px;

}
</style>
