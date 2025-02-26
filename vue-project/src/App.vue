<template>
    <div>
        <PageHeader />
        <ListingArticles />
    </div>
</template>

<script>
import PageHeader from "@/components/blocks/PageHeader.vue";
import ListingArticles from "./components/blocks/ListingArticles.vue";

export default {
    components: {
        PageHeader,
        ListingArticles,
    },
};
</script>
