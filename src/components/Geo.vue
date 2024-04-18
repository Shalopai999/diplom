<template>
    <div class="geo__box">
        <div class="banner"></div>
        <div class="geo">
            <div class="geo__text">
                <h1 class="geo__text__h1">Мы находимся напротив рынка "Северный"</h1>
                <h1 class="geo__text__h1">г. Абакан, ул. Кати Перекрещенко, 18а к2</h1>
                <a class="page" href="tel:+79832584649">+7 (983) 258 4649</a>
            </div>
            <iframe class="map"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A54c1f528c07ddd9290c8ff1f1cc3a8e8419d4d65fec6e5b009c53a836d8659c6&amp;source=constructor"
                width="50%" height="700" frameborder="0">
            </iframe>


        </div>

    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.geo__box {
    background-image: url("@/assets/img/68.png");
}

.geo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        padding-right: 24px;
        flex-direction: column;
        align-items: flex-end;

        &__h1 {
            font-weight: 400;
            font-size: 24px;
            display: flex;
            align-items: end;
            margin-bottom: 16px;
        }
    }
}

.page {
    font-weight: 400;
    font-family: "Jost", sans-serif;
    font-size: 32px;
    color: goldenrod;
    margin-top: 36px;
}

a:hover {
    color: gold;
}

@media (max-width: 1200px) and (min-width: 768px) {
    .geo {
        &__text {
            padding: 24px;
            align-items: flex-start;
        }
    }

    .map {
        height: 600px;
    }
}

@media (max-width: 767px) and (min-width: 320px) {

    .articlesNews__cards {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .geo {
        flex-direction: column;

        &__text {
            align-items: center;
            width: 100%;
            padding: 28px 12px 12px 12px;

            &__h1 {
                font-size: 18px;
            }
        }
    }

    .map {
        height: 400px;
        width: 100%;
    }

    .page {
        margin-top: 0px;
        font-size: 24px;
    }
}
</style>