<template>
    <v-content>
        <v-container>
            <component
                v-for="section in sectionOrder"
                :key="`component-${section}`"
                :is="section"
                class="siteContent__section"
            />
        </v-container>
    </v-content>
</template>

<script>
import * as sections from './sections';

export default {
    components: {
        ...sections,
    },

    data: () => ({
    }),
    computed: {
        sectionOrder: vm => vm.$store.state.sectionOrder,
    },
};
</script>

<style lang="scss">
.siteContent__section {
    margin: 50vh 0;

    &:first-child {
        margin-top: 0;
    }
}
</style>