<template>
    <BannerHomepage />
    <div class="articlesNews content">
        <div class="container">
            <div class="articlesNews__content">
                <div class="articlesNews__section">
                    <h1 class="articlesNews__content__title">Услуги нашего ломбарда</h1>
                    <p class="articlesNews__content__text">В нашем ломбарде Вы сможете оценить залог, взять в прокат
                        инструмент, продать или купить интересующий Вас товар</p>
                </div>
            </div>
            <div class="articlesNews__cards">
                <LittleCard :quantity="4"></LittleCard>
            </div>
        </div>
    </div>
    <Rental />
    <Geo />
</template>

<script>



import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import BannerHomepage from '@/components/BannerHomepage.vue';
import LittleCard from '@/components/LittleCard.vue';
import Geo from '@/components/Geo.vue';
import Rental from '@/components/Rental.vue';

export default {
    name: 'Homepage',
    components: {
        Header,
        Footer,
        BannerHomepage,
        LittleCard,
        Geo,
        Rental,
    },
}

</script>

<style scoped lang="scss">
.articlesNews__content__title {
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: center;
    margin-bottom: 24px;
    font-family: jost;
}

.articlesNews__content__text {
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: center;
}

.articlesNews__section {
    max-width: 812px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 52px;
    margin-top: 64px;
}

.articlesNews__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.articlesNews {
    background-image: url("@/assets/img/68.png");
    min-height: 700px;
}

.articlesNews__cards {
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    justify-content: space-between;
}

@media (max-width: 1200px) and (min-width: 768px) {
    
    .articlesNews__cards {
        display: grid;
        grid-template-columns: 48% 48%;
        grid-template-rows: 48% 48%;
        justify-content: space-between;
        justify-content: center;
        justify-items: center;
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    
    .articlesNews__cards {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .articlesNews__content__title {
        font-size: 26px;
    }

    .articlesNews__content__text {
        font-size: 16px;
    }

    .articlesNews__section {
        margin-top: 44px;
    }
}
</style>