<template>
    <section>
        <h1>
            <v-icon v-text="section.icon" />
            {{section.heading}}
        </h1>
        about me blah blah blah - maybe a photo of the fam
        include overview-esque information (?)
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
            heading: 'About',
            icon: 'mdi-information',
            id: 'about',
        },
    }),
    computed: {
    },
};
</script>

<style>

</style>