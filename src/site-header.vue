<template>
    <v-app-bar
        color="primary"
        :src="mastheadPhoto.src"
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
        <v-toolbar-title class="siteHeader__title mb-n2" @click="$vuetify.goTo(0)">
            <span class="display-1" v-text="'Adam Leis'" />
            <small class="title" v-text="' - Always Learning'" />
        </v-toolbar-title>

        <v-spacer />

        <v-tooltip bottom>
            <template v-slot:activator="{on}">
                <v-btn
                    icon
                    @click="navigate('https://www.facebook.com/people/Adam-Leis/20927251')"
                    v-on="on"
                >
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
            </template>
            <span>Go to Adam's Facebook</span>
        </v-tooltip>

        <v-tooltip bottom>
            <template v-slot:activator="{on}">
                <v-btn
                    icon
                    @click="navigate('https://www.linkedin.com/in/adam-leis-75018b23/')"
                    v-on="on"
                >
                    <v-icon>mdi-linkedin</v-icon>
                </v-btn>
            </template>
            <span>Go to Adam's LinkedIn</span>
        </v-tooltip>
    </v-app-bar>
</template>

<script>
import masthead1 from './assets/masthead1.jpg';
import masthead2 from './assets/masthead2.jpg';
import masthead3 from './assets/masthead3.jpg';
import masthead4 from './assets/masthead4.jpg';
import masthead5 from './assets/masthead5.jpg';

export default {
    data: () => ({
        photos: [
            { src: masthead1, kudos: 'Masthead Photo by Henry Be on Unsplash', link: 'https://unsplash.com/@henry_be?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge' },
            { src: masthead2, kudos: 'Masthead Photo by Jonas Jacobsson on Unsplash', link: 'https://unsplash.com/@jonasjacobsson?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge' },
            { src: masthead3, kudos: 'Masthead Photo by 🇸🇮 Janko Ferlič on Unsplash', link: 'https://unsplash.com/@itfeelslikefilm?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge' },
            { src: masthead4, kudos: 'Masthead Photo by Aaron Burden on Unsplash', link: 'https://unsplash.com/@aaronburden?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge' },
            { src: masthead5, kudos: 'Masthead Photo by Pono Lopez on Unsplash', link: 'https://unsplash.com/@ponolopez?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge' },
        ],
    }),
    computed: {
        mastheadPhoto: vm => vm.$store.state.masthead, // I know, we already have this, but this maintains "single source of truth" better
        // mastheadPhoto() {
        //     const randNum = Math.ceil((Math.random()*10) / 2); // 1-5
        //     const src = `masthead${randNum}`;
        //     // console.log('randNum', randNum);
        //     const found = this.photos.find(photo => photo.src.substr(0, 9) === src);
        //     // console.log('found', found);
        //     const photo = found || this.photos[0];
        //     // console.log('photo', photo);
        //     return photo;
        // },
    },

    created() {
        const randNum = Math.ceil((Math.random()*10) / 2); // 1-5
        const src = `masthead${randNum}`;
        // console.log('randNum', randNum);
        const found = this.photos.find(photo => photo.src.substr(0, 9) === src);
        // console.log('found', found);
        const photo = found || this.photos[0];
        // console.log('photo', photo);
        this.$store.commit('updateMasthead', photo);
    },

    methods: {
        toggleNavDrawer() {
            const drawerOpen = this.$store.state.drawerOpen;
            this.$store.commit('openDrawer', !drawerOpen);
        },

        navigate(url) {
            window.location = url;
        },
    },
};
</script>

<style lang="scss">
.siteHeader__title {
    cursor: pointer;

    > .title {
        opacity: 0.75;
    }
}
</style>