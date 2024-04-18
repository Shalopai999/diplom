<template>
    <!-- <LittleCard :quantity="3"></LittleCard> -->
    <div class="littleCard" v-for="card in cards" :key="card.id">
        <div class="littleCardImg">
            <img class="littleCardImg" :src="require('@/assets/img/' + card.imageurl)" alt="img">
            <a @click="changeURL(card.link)" class="littleCardDesign"
                href="https://www.avito.ru/user/76b005576a948c0adf1f537a3d441d11/profile?src=fs&page_from=from_favorite_sellers"
                id="link">{{ card.description }}</a>
        </div>
        <!-- <h2 class="littleCardTitle">{{ card.description }}</h2> -->
        <!-- <div class="littleCardMore">
            <p class="littleCardDate">{{ card.date }}</p>
            <a class="littleCardBtn" href= "https://www.avito.ru/user/76b005576a948c0adf1f537a3d441d11/profile?src=fs&page_from=from_favorite_sellers"><img src="@/assets/img/Vector2.svg" alt=""></img></a>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'LittleCard',
    props: ['quantity'],
    data() {
        return {
            currentCard: null,
            cards: [
                {
                    id: 0,
                    imageurl: 'gold.jpg',
                    link: 'https://api.whatsapp.com/send/?phone=79832584649&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%83+%D0%BC%D0%B5%D0%BD%D1%8F+%D0%B5%D1%81%D1%82%D1%8C+%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81&type=phone_number&app_absent=0',
                    description: 'Оценить',
                    date: 'Подробнее'
                },
                {
                    id: 1,
                    imageurl: 'iphone.jpg',
                    link: 'https://www.avito.ru/user/76b005576a948c0adf1f537a3d441d11/profile?src=fs&page_from=from_favorite_sellers',
                    description: 'Купить',
                    date: 'Подробнее'
                },
                {
                    id: 2,
                    imageurl: 'mac.jpg',
                    link: 'https://ya.ru/',
                    description: 'Продать',
                    date: 'Подробнее'
                },
                {
                    id: 3,
                    imageurl: 'ser.jpg',
                    link: 'https://ya.ru/',
                    description: 'Заложить',
                    date: 'Подробнее'
                },
            ]
        };
    },
    methods: {
        changeURL(link) {
            document.getElementById("link").href = link;
        },

    },
    computed: {
        // filterListCards() {
        //     return this.cards.filter((item) => item.id < this.quantity)
        // }
    }
}
</script>

<style scoped lang="scss">
.littleCard {
    max-width: 382px;
    border-radius: 20px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.littleCardImg {
    height: 284px;
    width: 284px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    position: relative;
}

.littleCardDesign {
    font-family: 'TildaSans', Arial, sans-serif;
    font-size: 20px;
    text-align: center;
    position: absolute;
    top: 228px;
    left: 132px;
    border-radius: 8px;
    padding: 12px 14px 12px 14px;
    color: #4d5053;
    color: 292F36;
    background-color: #ffc940;
    width: 140px;
}

// .littleCardTitle {
//     font-family: 'TildaSans', Arial, sans-serif;
//     font-size: 25px;
//     font-weight: 400;
//     line-height: 31px;
//     letter-spacing: 0.02em;
//     text-align: left;
//     max-width: 285px;
//     margin-bottom: 20px;
//     color: goldenrod;
// }

// .littleCardDate {
//     font-family: 'TildaSans', Arial, sans-serif;
//     font-size: 16px;
//     font-weight: 400;
//     line-height: 24px;
//     letter-spacing: 0.01em;
//     text-align: left;
//     color: goldenrod;
//     margin-right: 16px;
// }

// .littleCardMore {
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
// }


// .littleCardBtn {
//     width: 52px;
//     height: 52px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 26px;
//     border: none;
//     background-color: #F4F0EC;
// }

.littleCardDesign:hover {
    background-color: #daa520;
    /* color: #292F36; */
    transition: all 0.3s;
    cursor: pointer;
    color: #4d5053;
}
</style>