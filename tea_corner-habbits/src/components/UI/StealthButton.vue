<template>
        
    <div>
        <button class="stealthButton glitch" >
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
    padding-left: 7rem;
    padding-right: 7rem;
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

.glitch:hover {
    animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both 5
}


@keyframes glitch {
	0% {
		transform: translate(0);
        
	}
	20% {
		transform: translate(-5px, 5px);
        
	}
	40% {
		transform: translate(-5px, -5px);
    
	}
	60% {
		transform: translate(5px, 5px);
        
	}
	80% {
		transform: translate(5px, -5px);
        
	}
	to {
		transform: translate(0);
        
	}
}



</style>