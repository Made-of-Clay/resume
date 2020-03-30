<template>
    <v-app>
        <!-- my red: #da1e33 -->
        <!-- my gray: #626366 -->
        <v-app-bar
            color="#da1e33"
            src="https://picsum.photos/1920/1080?random"
            app dark
            shrink-on-scroll
            fade-img-on-scroll
        >
            <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(218, 30, 51, .7), rgba(25,32,72,.7)"
                />
            </template>

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

        <v-sheet class="overflow-y-auto">
            <v-container style="margin-top:140px">
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
        </v-sheet>
    </v-app>
</template>

<script>
import lipsum from './lipsum';
import siteSection from './site-section';

export default {
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
    }),

    created() {
    },

    methods: {
    },
};
</script>

<style lang="scss">
</style>
