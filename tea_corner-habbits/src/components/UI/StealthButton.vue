<template>
        
    <div>
        <button class="stealthButton">
            <slot></slot>
        </button>
    </div>

</template>

<script>

export default {
    name: 'stealth-button',
    
    props: {
        name: String
    }
}

</script>

<style scoped>

.stealthButton {
    margin-top: 4rem;
    margin-bottom: 2rem;
    padding: 1rem;
    padding-left: 10rem;
    padding-right: 10rem;
    border: 0rem;
    font-family: "Blender Pro";
    font-size: 2.4rem;
    font-weight: 700;
    color: black;
    background: url("../../../public/svg/buttonBorder.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: auto;
    height: auto;
    cursor: pointer;
}

</style>