<template>
    <section>
        <h1>
            <v-icon v-text="section.icon" />
            {{section.heading}}
        </h1>
        list off things you want to learn more about and experiment with (and maybe why)
    </section>
</template>

<script>
import sectionMixin from './section.mixin.js';

export default {
    mixins: [
        sectionMixin,
    ],

    data: () => ({
        section: {
            heading: 'R & D',
            icon: 'mdi-book-open-page-variant',
            id: 'research-development',
        },
    }),
    computed: {
    },
};
</script>

<style>

</style>