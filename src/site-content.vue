<template>
    <v-content>
        <v-container>
            <ul>
                <li
                    v-for="(section, i) in sections"
                    :key="i"
                    v-text="section"
                />
            </ul>

            <!-- <section-contact class="siteContent__section" />
            <section-about class="siteContent__section" /> -->
            <component
                v-for="section in sectionComponents"
                :key="`component-${section}`"
                :is="section"
                class="siteContent__section"
            />

            <section
                v-for="(section, i) in sections"
                :key="i"
                class="siteContent__section"
            >
                <h1>dummy: {{section}}</h1>
                <lipsum single-paragraph />
            </section>

            <h5>Filler content</h5>
            <lipsum />
        </v-container>
    </v-content>
</template>

<script>
import lipsum from './lipsum';
import * as sections from './sections';

export default {
    components: {
        lipsum,
        ...sections,
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
    computed: {
        sectionComponents: vm => Object.keys(vm.$options.components).filter(compName => /^section/.test(compName)),
    },

    beforeCreate() {
        console.log(this.$store.state);
    },
};
</script>

<style>
.siteContent__section {
    margin: 50vh 0;
}
</style>