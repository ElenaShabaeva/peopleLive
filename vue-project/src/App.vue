<template>
    <div class="app">
        <PageHeader />
        <RouterView />
    </div>
</template>

<script>
import PageHeader from "@/components/blocks/PageHeader.vue";

export default {
    components: {
        PageHeader,
    },
};
</script>
