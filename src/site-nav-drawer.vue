<template>
    <v-navigation-drawer
        ref="drawer"
        v-model="drawer"
        app clipped
    >
        <v-subheader>Sections</v-subheader>
        <v-list dense>
            <v-list-item
                v-for="section in sections"
                :key="section.id"
                @click="goToSection(section.id)"
            >
                <v-icon class="mr-2" v-text="section.icon" />
                {{section.heading}}
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
    }),
    computed: {
        drawer: {
            get() {
                return this.$store.state.drawerOpen;
            },
            set(value) {
                this.$store.commit('openDrawer', value);
            },
        },
        sections: vm => vm.$store.state.sections,
    },

    methods: {
        goToSection(id) {
            this.$vuetify.goTo(`#${id}`);
        },
    },
};
</script>

<style>

</style>