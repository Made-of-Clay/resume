<template>
    <v-app>
        <!-- my red: #da1e33 -->
        <!-- my gray: #626366 -->
        <!-- TODO replace src w/ my resume black background image tile (and keep always?) -->
        <!-- might also do pic w/ red/gray? gradient then change when scrolled... dunno yet -->
        <v-app-bar
            color="#da1e33"
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

        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item>
                    Section w/ icon jumps to section on page
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-content>
            <v-container>
                <a href="https://google.com">Testing a link</a>

                <ul>
                    <li
                        v-for="(section, i) in sections"
                        :key="i"
                        v-text="section"
                    />
                </ul>

                <site-section
                    v-for="(section, i) in sections"
                    :key="i"
                    v-text="section"
                >
                    <h1>{{section}}</h1>
                    <lipsum single-paragraph />
                </site-section>

                <h5>Filler content</h5>
                <lipsum />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import lipsum from './lipsum';
import siteSection from './site-section';

export default {
    name: 'AdamLeis',

    components: {
        lipsum,
        siteSection,
    },

    data: () => ({
        sections: [
            'contact form (sends to some AWS/Firebase lambda)',
            'bio/about',
            'relevant experience (w/ job context)',
            'personal projects (description and git link?)',
            'github site source link',
            'education',
            'social links',
        ],
        drawer: false,
    }),

    created() {
    },

    methods: {
        toggleNavDrawer() {
            this.drawer = !this.drawer;
        },
    },
};
</script>

<style lang="scss">
a {
    color: #da1e33;
}
</style>
