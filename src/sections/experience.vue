<template>
    <section>
        <h1>
            <v-icon v-text="section.icon" />
            {{section.heading}}
        </h1>
        work history, past jobs (title, context/work done)
        maybe use timeline?
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
            heading: 'Experience',
            icon: 'mdi-check-circle',
            id: 'experience',
        },
    }),
    computed: {
    },
};
</script>

<style>

</style>