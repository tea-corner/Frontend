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
                        <my-button">Регистрация</my-button>
                    </div>

                </form>

                <div class="registrationBlock">
                    <p> Ещё не хакнул себя? <br> <a href="registration">Регистрация</a> </p>
                </div>

            </div>

            <div class="warningBlock">
                <p> <b>ВНИМАНИЕ</b> <br> Имеются последствия: вы можете стать слишком продуктивным и успешным</p>
            </div>

        </main>

    </body>

</html>
</div>

</template>

<script>
import MyButton from '../components/UI/MyButton.vue'

export default {
  components: { MyButton },
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
    font-size: 2rem;
    font-family: "Blender Pro";
    font-weight: bold;
}

main {
    display: grid;
    grid-template-columns: 12.4rem auto 40%;
    grid-template-rows: 20% auto 7% 16%;
    grid-template-areas: "start GreyCol overLoginCol" "start GreyCol loginCol" "start none warning";
}

p {
    margin: 0;
}

.loginPageGrey {
    display: flex;
    justify-content: flex-start;
    font-size: 6.4rem;
    grid-column-start: GreyCol;
}

.loginPageGrey p {
    /* margin-left: 12.4rem; */
    color: #00F0FF;
    font-family: "Blender Pro";
}

.loginBlock {
    grid-area: loginCol;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-style: bold;
}

.registrationBlock p {
    font-size: 2.4rem;
    font-weight: 700;
}

.registrationBlock a {
    text-decoration: none;
    color: #FF003C;
}

.warningBlock {
    margin-top: 8rem;
    grid-area: warning;
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    font-size: 1.6rem;
    margin-left: 10rem;
    margin-right: 10rem;
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

</style>