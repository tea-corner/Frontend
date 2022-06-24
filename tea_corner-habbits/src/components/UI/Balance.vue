<template>
  <div class="balance">
    <p class="balanceText"> {{ this.balance }} </p>
    <img src="/svg/dollar.svg" alt="dollarIcon" class="dollarIcon">
  </div>
</template>

<script>
export default {
    props: {
        balance: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>

.balance {
    display: flex;
    justify-content: center;
    
}

.balanceText { 
    display: flex;
    font-family: 'Blender Pro';
    font-style: normal;
    color: #00F0FF;
}

.dollarIcon {
    display: flex;
    margin-right: 15px;
}

</style>