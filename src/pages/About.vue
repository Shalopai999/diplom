<template>
    <div class="about content">
        <div class="container">
            <div class="about__content">
                <div class="about__content__section">
                    <h1 class="about__content__section__title">Реквизиты</h1>
                    <p class="about__content__section__text">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ЛОМБАРД БРАТ"</p>
                </div>
                <div class="about__content__item">
                    <div class="about__content__item__drop" v-for="card in cards" :key="card.id">
                        <p class="about__content__item__drop__key">{{ card.key }}</p>
                        <p class="about__content__item__drop__value">
                            {{ card.value }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    id: 0,
                    key: 'ОГРН',
                    value: '1201900001830',
                },
                {
                    id: 1,
                    key: 'ИНН',
                    value: '1901144401',
                },
                {
                    id: 2,
                    key: 'КПП',
                    value: '190101001',
                },
                {
                    id: 3,
                    key: 'ОКПО',
                    value: '44715214',
                },
                {
                    id: 4,
                    key: 'Код ОКОГУ',
                    value: '4210014',
                },
                {
                    id: 5,
                    key: 'Код ОКОПФ',
                    value: '12300',
                },
                {
                    id: 6,
                    key: 'Код ОКФС',
                    value: '16',
                },
                {
                    id: 7,
                    key: 'Код ОКАТО',
                    value: '95401000000',
                },
                {
                    id: 8,
                    key: 'Код ОКТМО',
                    value: '95701000001',
                },
                {
                    id: 9,
                    key: 'Код КЛАДР',
                    value: '190000010000097',
                },
                {
                    id: 10,
                    key: 'Юридический адрес',
                    value: '655001, республика Хакасия, г. Абакан, ул. Крылова, д. 106, корп. 2, кв. 31',
                },
            ]
        };
    },
}

</script>

<style scoped lang="scss">
.about {
    background-image: url("@/assets/img/68.png");

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            &__drop {
                display: flex;
                width: 80%;
                border-bottom: 1px solid rgb(92, 92, 92);
                margin-bottom: 14px;

                &__key {
                    font-size: 20px;
                    width: 250px;
                    color: #ededed;
                }

                &__value {
                    font-size: 20px;
                    color: #ededed;
                }
            }
        }

        &__section {
            display: flex;
            align-items: center;
            flex-direction: column;
            max-width: 812px;
            margin-top: 80px;

            &__title {
                font-size: 50px;
                font-weight: 400;
                line-height: 63px;
                letter-spacing: 0.02em;
                text-align: center;
                margin-bottom: 24px;
            }

            &__text {
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.01em;
                text-align: center;
                margin-bottom: 68px;
            }
        }
    }

}
</style>