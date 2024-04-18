<template>
    <div>
        <div class="logo__left">
            <div class="verticalLine">
            </div>
            <div class="logo__text">
                <a class="logo__text__lombard" href="/">ЛОМБАРД</a>
                <a class="logo__text__brat" href="/">БРАТ</a>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.logo__text {
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin-top: 3px;
    margin-left: 20px;

    &__lombard {
        color: goldenrod;
        font-size: 46px;
        font-family: JACKPORT;
        display: flex;
        justify-content: center;
    }

    &__brat {
        color: goldenrod;
        font-family: Versus;
        font-size: 46px;
        display: flex;
        justify-content: center;
    }
}

.logo__left {
    display: flex;
    align-items: center;
}

.verticalLine {
    border-left: 25px solid goldenrod;
    height: 90px;
}

@media (max-width: 1200px) and (min-width: 768px) {
    .links {
        flex-direction: column-reverse;

        &__right {
            margin-bottom: 24px;
        }
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .logo__text {
        font-weight: 400;
        display: flex;
        flex-direction: column;
        margin-top: 3px;
        margin-left: 10px;

        &__lombard {
            color: goldenrod;
            font-size: 26px;
            font-family: JACKPORT;
            display: flex;
            justify-content: center;
        }

        &__brat {
            color: goldenrod;
            font-family: Versus;
            font-size: 26px;
            display: flex;
            justify-content: center;
        }
    }

    .verticalLine {
        border-left: 15px solid goldenrod;
        height: 52px;
    }
}
</style>