<template>
    <main class="list-articles">
        <div class="list-articles__container">
            <div class="list-articles__list">
                <CardArticle
                    v-for="item in news"
                    :key="item.id"
                    :id="item.id"
                    :title="item.title"
                    :description="item.body"
                    class="list-articles__card"
                />
            </div>
        </div>
    </main>
</template>

<script>
import CardArticle from "./CardArticle.vue";

export default {
    components: {
        CardArticle,
    },
    data() {
        return {
            news: [],
        };
    },
    methods: {
        getNews() {
            this.$axios("https://jsonplaceholder.typicode.com/posts")
                .then(response => {
                    if(response){
                        this.news = response.data.map((item) => {
                            item.description = item.body;
                            //delete item.body;
                            return item;
                        });
                    }
                });
        },
    },
    created() {
        this.getNews();
    }
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
