<template>
    <main>
        <header id="site-header" class="main-header">
            <canvas></canvas>
            <nav>
                <a
                    v-for="section in sectionLinks"
                    :href="`#${section}`"
                    class="section-link"
                    @click.prevent="scrollTo(section)"
                >
            </nav>
        </header>

        welcome, small about, big photo background?
        <section id="welcome">
            content from wordpress page goes here?
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
export default {
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
</style>
