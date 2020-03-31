<template>
    <section>
        <h1>
            <v-icon v-text="section.icon" />
            {{section.heading}}
        </h1>
        fancy animated dots (make skill component that takes value, total & dances a little on hover)
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
            heading: 'Skills',
            icon: 'mdi-toolbox',
            id: 'skills',
        },
    }),
    computed: {
    },
};
</script>

<style>

</style>