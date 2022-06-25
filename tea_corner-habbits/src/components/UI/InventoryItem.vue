<template>
  <div class="InventoryItem">
    <img :src="getImageUrl(item.name)" alt="" class="weaponIcon" />
    <div class="weaponBlock">
      <h5 class="weaponName">{{this.item.name}}</h5>
    </div>
  </div>
</template>


<script>
export default {
  props: ['item'],

  data() {
    return {
      baseUrl: "http://haits.tk/api",
    }
  },

  methods: {
    getImageUrl(name) {
      return this.baseUrl + "/images/" + name + ".png";
    },
  }
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
