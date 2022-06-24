<template>
        
    <div>
        <button class="redButton">
            <slot></slot>
        </button>
    </div>

</template>

<script>

export default {
    name: 'red-button',
    
    props: {
        name: String
    }
}

</script>

<style scoped>

.redButton {
    margin-top: 4rem;
    margin-bottom: 2rem;
    padding: 1rem;
    padding-left: 10rem;
    padding-right: 10rem;
    border: 0rem;
    font-family: "Blender Pro";
    font-size: 2.4rem;
    font-weight: 700;
    color: white;
    background: url("../../../public/images/Red_buttom_SVG.svg");
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    width: auto;
    height: auto;
    cursor: pointer;
}

</style>