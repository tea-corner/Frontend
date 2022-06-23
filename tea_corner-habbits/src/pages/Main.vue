<template>
    <div>
        <nav-bar></nav-bar>

        <html lang="ru">

        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tea Corner</title>
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/index.css">
        </head>

        <body>
        <header class="header">

            <div class="container">

            <img src="/svg/money.svg" alt="moneyIcon" class="moneyIcon">

            <img src="/svg/dollar.svg" alt="dollarIcon" class="dollarIcon">

            <button class="btnSyncIcon">
                <img src="/svg/sync.svg" alt="syncIcon" class="syncIcon">
            </button>

            <button class="btnCommentIcon">
                <img src="/svg/comment.svg" alt="commentIcon" class="commentIcon">
            </button>

            <button class="btnUserIcon">
                <img src="/svg/user.svg" alt="userIcon" class="userIcon">
            </button>

            </div>

        </header>

        <main>

            <section class="sectionMenuHero">

            <div class="container">
                <img src="/img/image 3.png" alt="photo" class="sectionMenuPhoto">

                <h4 class="sectionMenuName">
                Божедомов Даниил
                @id 531h7kgkh15321ks
                </h4>

                <div class="resourceHealth">
                <img src="/svg/health.svg" alt="healthIcon" class="healthIcon">
                <progress value="45" max="50" class="progressHealth"></progress>
                <h6 class="dataHealth">45/50</h6>
                </div>
                
                <div class="resourceExperience">
                <img src="/svg/experience.svg" alt="experienceIcon" class="experienceIcon">
                <progress value="11" max="50" class="progressExperience"></progress>
                <h6 class="dataExperience">11/50</h6>
                </div>

                <p class="menuHeroText">
                Испытай себя, приняв челлендж от других игроков
        Открой доску испытаний и выбери задание твоего уровня. Или может решишь испытать себя, выбрав что-нибудь посложнее?
                </p>

                <button class="btnMenuHero">
                Открыть доску
                </button>
            </div>

            </section>

            <section class="sectionBlocks">
            <div class="container">
                <ul class="blocksList">
                <li class="blockItem">
                    <h4 class="blockName">Привычки</h4>
                    <div class="blockNewList">
                    <button class="btnBlockAdd"> Добавить привычку </button>
                    </div>
                </li>
                <li class="blockItem">
                    <h4 class="blockName">Ежедневные дела</h4>
                    <div class="blockNewList">
                    <button class="btnBlockAdd"> Добавить ежедневную задачу </button>
                    </div>
                </li>
                <li class="blockItem">
                    <h4 class="blockName">To-Do</h4>
                    <div class="blockNewList">
                    <button class="btnBlockAdd"> Добавить задачу </button>
                    </div>
                </li>
                <li class="blockItem">
                    <h4 class="blockName">Инвентарь</h4>
                    <div class="blockNewList">
                    
                    </div>
                </li>
                </ul>
            </div>
            </section>
        </main>

        </body>

        </html>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Logo from '../components/UI/Logo.vue';

export default {
    
    components: {
        NavBar,
        Logo
    }

}

        NavBar</script>

<style>

</style>