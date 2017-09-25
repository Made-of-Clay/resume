<template>
    <main id="portfolio-body" class="main-body main-container-layout">
        <h2>Portfolio</h2>

        <p>Category: {{category}}</p>

        <p>A bunch of cool pics are going to go here</p>
    </main>
</template>

<script>
export default {
    name: 'Portfolio',
    computed: {
        category() {
            return this.$route.params.category
        }
    },
    data() {
        return {};
    }
};
</script>