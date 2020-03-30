<template>
    <v-app-bar
        color="primary"
        src="https://picsum.photos/1920/1080?random"
        app dark
        shrink-on-scroll
        fade-img-on-scroll
        clipped-left
    >
        <template v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(218, 30, 51, .7), rgba(25,32,72,.7)"
            />
        </template>

        <v-app-bar-nav-icon @click="toggleNavDrawer" />
        <v-toolbar-title>
            Adam Leis
        </v-toolbar-title>

        <v-spacer />

        <v-btn icon>
            <v-icon>mdi-facebook</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-linkedin</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    methods: {
        toggleNavDrawer() {
            const drawerOpen = this.$store.state.drawerOpen;
            this.$store.commit('openDrawer', !drawerOpen);
        },
    },
};
</script>

<style>

</style>