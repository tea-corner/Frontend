<template>
        
    <div>
        <button class="redButton">
            <slot></slot>
        </button>
    </div>

</template>

<script>

export default {
    name: 'my-button',
    
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
    padding-left: 11rem;
    padding-right: 11rem;
    border: 0rem;
    font-family: "Blender Pro";
    font-size: 2.4rem;
    font-weight: 700;
    color: white;
    background: url("../../../public/images/Red_buttom_SVG.svg");
    background-size: cover;
    background-position: center center;
    width: auto;
    height: auto;
    cursor: pointer;
}

</style>