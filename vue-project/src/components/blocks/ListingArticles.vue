<template>
    <main class="list-articles">
        <div class="list-articles__container">
            <div class="list-articles__list">
                <CardArticle
                    v-for="item in news"
                    :key="item.id"
                    :title="item.title"
                    :description="item.description"
                    class="list-articles__card"
                />
            </div>
        </div>
    </main>
</template>

<script>
import CardArticle from "./CardArticle.vue";
import news from "@/json/news.json";

export default {
    components: {
        CardArticle,
    },
    data() {
        return {
            news: news,
        };
    },
};
</script>

<style lang="less">
.list-articles {
    &__container {
        .container();
    }
    &__card {
        margin-bottom: 15px;
    }
}
</style>
