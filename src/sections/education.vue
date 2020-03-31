<template>
    <section>
        <h1>
            <v-icon v-text="section.icon" />
            {{section.heading}}
        </h1>
        Schooling history (BFA and current Masters)
        Talk about take-aways and good-sounding "moral of the story"
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
            heading: 'Education',
            icon: 'mdi-school',
            id: 'education',
        },
    }),
    computed: {
    },
};
</script>

<style>

</style>