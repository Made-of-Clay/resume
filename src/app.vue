<template>
    <main>
        <fancy-header id="site-header" class="main-header">
            <nav>
                <a
                    v-for="section in sectionLinks"
                    :href="`#${section}`"
                    class="section-link"
                    @click.prevent="scrollTo(section)"
                    v-text="section"
                ></a>
            </nav>
        </fancy-header>

        welcome, small about, big photo background?
        <section id="welcome">
            content from wordpress page goes here? (http://api.adamleis.com/wp-json/wp/v2/pages/)
            TODO: write service for fetching data from wp api
        </section>

        <section id="portfolio">
            ;
        </section>

        <section id="blog">
            ;
        </section>

        
        <section id="contact">
            ;
        </section>
    </main>
</template>

<script>
import fancyHeader from './fancy-header';

export default {
    components: {
        fancyHeader,
    },

    data() {
        return {
            sectionLinks: [
                'welcome',
                'portfolio',
                'blog',
                'contact',
            ],
        };
    },

    methods: {
        scrollTo(section) {
            // window scrollto logic
        },
    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.section-link {
    text-transform: capitalize;
}
</style>
