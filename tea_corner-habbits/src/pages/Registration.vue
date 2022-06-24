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

            <div class="registrationBlock">
            <div class="regBlockBG">
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
                    
                    <div class="registrButton">
                        <input type="submit" name="regButton" id="" value="Продолжить">
                    </div>
                </form>
            </div>

                    
                
                

                



            </div>



        </main>








    </body>



</html>
</div>

</template>

<script>

export default {

}

</script>

<style>

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
    width: 100%;
}

@media (min-width: 950px) and (max-width: 1441px){
    body {
        background-image: url("../../public/images/YellowCityFullWithBlackLine_1920-930.png");
        background-position: center center;
        background-attachment: fixed;
        background-size: contain;
        background-repeat: no-repeat;
        font-family: "Blender Pro";
        font-weight: bold;
        font-size: 2rem;
        
    }

    main {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: "leftCol centerCol rightCol";
        
    }

    .registrationBlock {
        grid-area: centerCol;
        justify-items: center ;
        align-items: center ;
        text-align: center;
        margin-top: 50%;
    }

    .regBlockBG{
        background-image: url("../../public/svg/BlueBorder.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        padding: 0%;
    }

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
    
    }

    .registrButton {

        color: black;
        margin-top: 2rem;
        /* margin-bottom: 2rem; */
        padding: 1rem;
        padding-left: 5rem;
        padding-right: 5rem;
        border: 0px rgba(0, 0, 0, 0);
        font-family: "Blender Pro";
        font-size: 2.4rem;
        font-weight: 700;        
        background-color: rgba(0, 0, 0, 0);
        background: url("../../public/svg/buttonBorder.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        width: auto;
        height: auto;
        cursor: pointer;
    }


}

</style>