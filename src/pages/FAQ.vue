<template>
    <div class="faq content">
        <div class="container">
            <div class="faq__content">
                <div class="faq__content__section">
                    <h1 class="faq__content__section__title">Часто задаваемые вопросы</h1>
                    <p class="faq__content__section__text">Здесь Вы можете посмотреть наши ответы на часто задаваемые
                        вопросы</p>
                </div>
                <div class="faq__item" v-for="card in cards" :key="card.id">
                    <div class="dropdown">
                        <h3 @click="selectCard(card)" class="dropbtn">{{ card.question }}</h3>
                        <div v-show="currentCard === card" class="dropdown-content">
                            {{ card.answer }}
                        </div>
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
            currentCard: null,
            cards: [
                {
                    id: 0,
                    question: 'Какие предметы можно заложить в ломбард?',
                    answer: 'Мы принимаем в залог различные ценности, включая ювелирные изделия, электронику, антиквариат, художественные произведения, технику и многое другое. Для уточнения списка предметов обратитесь к нам по контактным данным.',
                },
                {
                    id: 1,
                    question: 'Какой процесс залога в вашем ломбарде?',
                    answer: 'Процесс залога включает оценку предмета, согласование условий займа, оформление необходимых документов и получение денег.',
                },
                {
                    id: 2,
                    question: 'Какие документы требуются для получения займа?',
                    answer: 'Обычно для получения займа необходим паспорт и документы, подтверждающие право собственности на залоговый предмет. Однако, подробные требования могут различаться в зависимости от конкретной ситуации.',
                },
                {
                    id: 3,
                    question: 'Каковы сроки и условия возврата займа?',
                    answer: 'Сроки и условия возврата займа обсуждаются индивидуально с каждым клиентом. Мы готовы предложить гибкие условия, учитывая вашу финансовую ситуацию.',
                },
                {
                    id: 4,
                    question: 'Какие виды оплаты принимаются в ломбарде?',
                    answer: 'Мы принимаем наличные, банковские переводы и другие формы оплаты в соответствии с действующими правилами и регуляциями.',
                },
                {
                    id: 5,
                    question: 'Как я могу получить дополнительную информацию о вашем ломбарде?',
                    answer: 'Для получения дополнительной информации вы можете связаться с нами по телефону, электронной почте или заполнить форму обратной связи на нашем сайте.',
                },
                {
                    id: 6,
                    question: 'Как я могу быть уверен(а), что мои данные в безопасности?',
                    answer: 'Мы обеспечиваем конфиденциальность и безопасность ваших данных в соответствии с действующим законодательством о защите персональной информации.',
                },
                {
                    id: 7,
                    question: 'Что произойдет, если я не смогу вернуть займ вовремя?',
                    answer: 'Если у вас возникли проблемы с возвратом займа, пожалуйста, свяжитесь с нами, и мы постараемся найти вариант решения ситуации, который будет удовлетворительным для всех сторон.',
                },
            ]
        };
    },

    methods: {
        selectCard(card) {
            if (this.currentCard === card) {
                this.currentCard = null
            } else {
                this.currentCard = card;
            }
        },
    },
}

</script>

<style scoped lang="scss">
.faq {
    background-image: url("@/assets/img/68.png");

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

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

.faq__item {
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dropbtn {
    background-color: #454545;
    color: white;
    padding: 16px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    margin-bottom: 16px;
    width: 600px;
}

.dropbtn:hover,
.dropbtn:focus {
    background-color: goldenrod;
}

.dropdown {
    display: inline-block;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dropdown-content {
    background-color: #292F36;
    width: 600px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 16px;
    margin-bottom: 16px;
    color: #ededed;
}
</style>