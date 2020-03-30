<template>
    <section>
        <h1>{{section.heading}}</h1>
        FORM - sends to cloud lambda to send the email
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
            heading: 'Contact',
            icon: 'mdi-email',
            id: 'contact',
        },
    }),
    computed: {
    },
};
</script>

<style>

</style>