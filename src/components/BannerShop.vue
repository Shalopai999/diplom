<template>
    <!-- <div class="banner__bg"> -->
    <div class="banner">
        <div class="banner__info">
            <h1 class="banner__info__title">Наш магазин на Avito</h1>
            <a href="https://www.avito.ru/user/76b005576a948c0adf1f537a3d441d11/profile?src=fs&page_from=from_favorite_sellers"
                class="banner__info__btn">Перейти в магазин
            </a>
        </div>
    </div>

</template>

<script>

</script>

<style scoped lang="scss">

.banner {
    background-image: url("@/assets/img/banner1.jpg");
    height: 566px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-size: cover;

    &__info {
        display: flex;
        background: #fff;
        padding: 28px 48px;
        border-radius: 36px 36px 0 0;
        flex-direction: column;
        align-items: center;
        opacity: 80%;
        height: 250px;
        width: 800px;


        &__btn {
            color: #292F36;
            font-family: Lato;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            width: 212px;
            height: 48px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #292F36;
            border-radius: 15px;
            margin-top: 20px;
        }

        &__btn:hover {
            background-color: #292F36;
            color: white;
            transition: all 0.3s;
        }

        &__title {
            font-family: 'TildaSans', Arial, sans-serif;
            font-size: 46px;
            font-weight: 400;
            line-height: 62.5px;
            text-align: center;
            color: #292F36;
            margin-top: 32px;
        }
    }
}
</style>