<template>
    <div class="page-contacts">
        <div class="page-contacts__container">
            <h2 class="page-contacts__title">Контакты</h2>

            <p class="page-contacts__text">
                Адрес:
                <span class="page-contacts__text-italic"
                    >г. Томск, Пушкина 65/1</span
                >
            </p>
            <p class="page-contacts__text">
                Телефон:
                <span class="page-contacts__text-italic">+7 499 350 0730</span>
            </p>
            <p class="page-contacts__text">
                Email:
                <span class="page-contacts__text-italic"
                    >[email protected]</span
                >
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.page-contacts {
    &__container {
        .container();
        margin-top: 20px;
    }

    &__title {
        margin-bottom: 15px;
        color: @light_orange;
    }

    &__text {
        margin-top: 5px;
        font-weight: 700;
    }

    &__text-italic {
        font-style: italic;
        font-weight: 400;
        margin-left: 5px;
    }
}
</style>
