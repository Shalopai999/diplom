<template>
    <div ref="banner__bg" class="banner__bg content">
        <div ref="banner" class="banner"></div>
        <div class="banner__info">
            <h1 class="banner__info__title">Получите оценку залога</h1>
            <div class="t-input-block"
                style="border-radius: 10px; -moz-border-radius: 10px; -webkit-border-radius: 10px;">
                <h1>Укажите категорию</h1>
                <div class="t-select__wrapper"><select name="type" id="input_1496154453349"
                        class="t-select js-tilda-rule" data-tilda-req="1" aria-required="true"
                        style="color:#000000;background-color:#f0f0f0;border-radius: 10px; -moz-border-radius: 10px; -webkit-border-radius: 10px;">
                        <option value="Ювелирные изделия" style="color:#000000;background-color:#f0f0f0">Ювелирные
                            изделия</option>
                        <option value="Смартфоны, ноутбуки" style="color:#000000;background-color:#f0f0f0">
                            Смартфоны, ноутбуки</option>
                        <option value="Бытовая техника и электроника" style="color:#000000;background-color:#f0f0f0">
                            Бытовая техника и электроника</option>
                        <option value="Бензо - электроинструмент " style="color:#000000;background-color:#f0f0f0">
                            Бензо - электроинструмент </option>
                    </select></div>
                <div class="select">
                    <div class="select__left">
                        <h1>Введите номер телефона</h1>
                        <input class="t-select__wrapper" type="tel" placeholder=" 123-456-7890"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                    </div>
                    <div class="select__right">
                        <h1>Приложите фотографии</h1>
                        <a class="select__btn">Загрузить фотографии</a>
                    </div>
                </div>
                <button class="select__btn mt">Получить оценку</button>
                <div class="t-input-error" aria-live="polite" id="error_1496154453349"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "BannerHomepage",
    data: () => ({
        bgImg: "@/assets/img/banner1.jpg",
        friction: 1 / 1000
    }),
    methods: {
        qwer(e) {
            let bg = this.$refs.banner;
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            // console.log(x, y)
            bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        }
    },
    mounted() {
        // let bg = this.$refs.banner__bg;
        // console.log(e)
        // if (!bg) {
        //     return
        // }
        window.addEventListener('mousemove', this.qwer);
    },
    beforeUnmount() {
        // let bg = this.$refs.banner__bg;
        // console.log(e)
        // if (!bg) {
        //     return
        // }
        window.removeEventListener('mousemove', this.qwer);
    }
};



</script>

<style scoped lang="scss">
.t-input-block {
    width: 90%;
}

.t-select__wrapper {
    width: 100%;
    height: 60px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    border: 1px solid #292F36;
}

h1 {
    font-size: 22px;
    color: #6D4E01;
    margin-bottom: 12px;
}

.js-tilda-rule {
    padding: 14px;
    width: 100%;
    font-size: 24px;
}

.select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;

    &__left {
        width: 48%;
    }

    &__right {
        width: 48%;
    }

    &__btn {
        width: 100%;
        height: 60px;
        border-radius: 10px;

        color: #292F36;
        font-size: 20px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: #ffc940;
        cursor: pointer;
    }

    &__btn:hover {
        background-color: goldenrod;
        // color: white;
        transition: all 0.3s;
    }
}

.mt {
    margin-top: 28px;
    background-color: #292F36;
    color: #ededed;
}

.options {
    padding: 16px;
}

.banner__bg {
    height: 700px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.banner {
    background-image: url("@/assets/img/banner1.jpg");
    height: 700px;
    background-size: cover;
    top: 0px;
    position: absolute;
    width: 110%;
    height: 110%;

    &__info {
        display: flex;
        background: #fff;
        padding: 28px 48px;
        border-radius: 36px 36px 0 0;
        flex-direction: column;
        align-items: center;
        opacity: 80%;
        height: 470px;
        width: 800px;


        &__text {
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #4D5053;
        }

        &__title {
            font-family: 'TildaSans', Arial, sans-serif;
            font-size: 46px;
            font-weight: 400;
            line-height: 62.5px;
            text-align: center;
            color: #292F36;
            font-family: jost;
            margin-top: 36px;
        }
    }
}

@media (max-width: 767px) and (min-width: 320px) {

    .banner {

        &__info {
            padding: 8px;
            height: 540px;

            &__title {
                font-size: 26px;
            }
        }
    }

    .select {
        flex-direction: column;

        &__left {
            width: 100%;
        }

        &__right {
            width: 100%;
        }
    }

    .h1 {
        font-size: 18px;
    }

    .js-tilda-rule {
        padding: 14px;
        // width: 520px;
        width: 100%;
        // font-size: 16px;
    }

    .t-select__wrapper {
        margin-bottom: 12px;
    }
}
</style>