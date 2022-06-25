<template>

<div>
<html>

    <head>
        <title> Войди в меня!</title>
    </head>

    <body>
        <main>
            <div class="loginPageGrey">
                <p> Начни создавать своё будущее уже сейчас</p>
            </div>

            <div class="loginBlock">
                
                <div class="entrance">
                    <p> Войти</p>
                </div>

                <form action="" method="post" name="loginForm" autocomplete="on">


                    <div class="loginArea">
                        <input type="text" name="login" id="login" placeholder="Логин">
                    </div>


                    <div class="passwordArea">
                        <input type="password" name="password" id="password" placeholder="Пароль">
                    </div>


                    <div class="loginButtom">
                        <red-button>Вход</red-button>
                    </div>

                </form>

                <div class="registrationBlock">
                    <p> Ещё не хакнул себя? <br> <router-link to="/Registration" class="rout_link">Регистрация</router-link></p>
                </div>


                <div class="warningBlock">
                    <p> <b>ВНИМАНИЕ</b> <br> Имеются последствия: вы можете стать слишком продуктивным и успешным</p>
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

<style scoped>
@import url("../assets/fonts/Blender_Pro/stylesheet.css");


body {
    margin: 0px;
    background-color: #F5EE00;
    background-image: url("../../public/images/YellowAndGreyLogin_FHD_s.png");
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Blender Pro";
    font-weight: bold;
    font-size: 2rem;
}

@media (min-width: 1024px) {
    html{
        overflow-y: hidden;

    }

    main {
        display: grid;
        
        grid-template-columns: 6fr 4fr;
        grid-template-areas: "GreyCol loginCol";

        width: 100vw;
        height: 100vh;
    }

    p {
        margin: 0px;
    }

    .loginPageGrey {
        text-align: center;
        font-size: 6.4rem;
        grid-area: GreyCol;
    }

    .loginPageGrey p {
        /* margin-left: 12.4rem; */
        color: #00F0FF;
        font-family: "Blender Pro", sans-serif;
    }

    .loginBlock {
        margin-top: 4rem;
        grid-area: loginCol;
        align-items: center;
        text-align: center;
        font-style: bold;
        margin-bottom: 26.7%;
    }

    .registrationBlock p {
        font-size: 2.4rem;
        font-weight: 700;
    }

    .registrationBlock .rout_link {
        text-decoration: none;
        color: #FF003C;
    }

    .warningBlock {
        margin-top: 5rem;
        align-self: flex-end;
        font-size: 1.6rem;
        margin-left: 13%;
        margin-right: 13%;
    }

    .warningBlock b {
        color: #FF003C;
    }

    .entrance {
        margin-top: 0;
        font-weight: 700;
        font-size: 6.4rem;
    }

    .loginArea input,
    .passwordArea input {
        background-color: rgba(0, 0, 0, 0);
        border: 0px;
        border-bottom: 0.2rem black solid;
        font-size: 2.4rem;
        margin-top: 3rem;
    }

    .loginArea input::placeholder,
    .passwordArea input::placeholder {
        font-family: "Blender Pro";
        font-weight: 700;
        color: black;
    }




}




</style>