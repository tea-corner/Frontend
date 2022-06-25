<template>

<div>
<html>

    <head>
        <title>
            Ты впервые тут?
        </title>
        <meta lang="RU">
    </head>

    <body>
        <main>
            <div class="nameProject"> <img src="../../public/images/GamifyYourLife.png" alt="GamifyYourLife"></div>

            <div class="nameTeam"><img src="../../public/svg/TeaCorner.svg" alt=""></div>
            <div class="registrationBlock">
            
            
                <div class="text">Регистрация  </div>
                <form action="" 
                method="post" 
                name="registrationForm" 
                autocomplete="on">


                    <div class="loginArea">
                        <input type="text" name="regLogin" id="" placeholder="Логин">
                    </div>

                    <div class="passwordArea">
                        <input type="password" name="regPassword" id="" placeholder="Пароль">
                    </div>

                    <div class="passwordArea">
                        <input type="password" name="regPassword-2" id="" placeholder="Подтвердите пароль">
                    </div>   
                    
                    <stealth-button class="sButton">Продолжить</stealth-button>
                </form>
            </div>

                    
        </main>


    </body>



</html>
</div>

</template>

<script>
import StealthButton from '@/components/UI/StealthButton.vue';

export default {
    components: { StealthButton }
}

</script>

<style scoped>

@import url("../assets/fonts/Cyberpunk/stylesheet.css");

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    background-image: url("../../public/images/YellowCitypng.png");
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Blender Pro";
    font-weight: bold;
    font-size: 2rem;
    height: 100%;
    /* width: 100%; */
}





@media (min-width: 950px) and (max-width: 1441px){
    html {
        background-image: url("../../public/images/YellowCityFullWithBlackLineWithoutTitle_1920-930.png");
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;

    }
    body {
        background-image: url("../../public/images/YellowCityFullWithBlackLineWithoutTitle_1920-930.png");
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        font-family: "Blender Pro";
        font-weight: bold;
        font-size: 2rem;
        overflow: hidden;
        
    }

    main {
        display: grid; 
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr 2fr;
        grid-template-areas: "projectName projectName rightCol"
        "leftCol2 regBlock regBlock";
        height: 100vh;
        width: 100vw;
    }

    .registrationBlock {
        /* margin-top: 13%; */
        grid-area: regBlock; 
        display: flex;
        align-self: center;
        justify-content: center ;
        align-content: center ;
        text-align: center;
         background-image: url("../../public/svg/BlueBorder.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        flex-direction: column;
        
    } 

    /* .regBlockBG{
        background-image: url("../../public/svg/BlueBorder.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        height: 100%;
        display: flex;
        justify-content: center ;
        align-content: center ;
        text-align: center;
        flex-direction: column;
        /* padding-top: 10%; 
    } */

    .loginArea input,
    .passwordArea input{
        background-color: rgba(0, 0, 0, 0);
        border: 0px;
        border-bottom: 0.2rem black solid;
        font-size: 2rem;
        margin-top: 3rem;
    }

    .loginArea input::placeholder,
    .passwordArea input::placeholder {
        font-family: "Blender Pro";
        font-weight: 700;
        color: black;
    }

    .registrationBlock .text {
        font-size: 5rem;
        padding-top: 2%;
    }

    .sButton{
        padding: 0 0 0 0;
    }

    .nameProject{
        grid-area: projectName ;
        align-self: start;
        justify-self: center;
    }

    .nameProject img {
        width: 50vw;
    }

    .nameTeam{
        grid-area: rightCol;
        justify-self: end;
        align-self: start;
    }
}

</style>