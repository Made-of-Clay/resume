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
                    v-text="section"
                ></a>
            </nav>
        </header>

        welcome, small about, big photo background?
        <section id="welcome">
            content from wordpress page goes here? (http://api.adamleis.com/wp-json/wp/v2/pages/)
            TODO: write service for fetching data from wp api
        </section>

        <section id="portfolio">
            ;
        </section>

        <section id="blog">
            <ul class="blog-posts">
                <li
                    v-for="post in recentPosts"
                    v-if="recentPosts.length"
                    class="blog-post"
                    :data-postid="post.id"
                >
                    <!-- img -->
                    <h1 class="blog-post__title">{{post.title.rendered}}</h1>
                    <div
                        class="blog-post__excerpt"
                        v-html="post.excerpt.rendered">
                    </div>
                    <time
                        :datetime="post.date"
                        class="blog-post__date"
                    >
                        post.date | postDate
                    </time>
                </li>
                <li
                    v-else
                    class="blog-post blog-post--no-posts"
                >
                    No posts are available at this time
                </li>
            </ul>
        </section>

        
        <section id="contact">
            ;
        </section>
    </main>
</template>

<script>
import BlogService from './services/BlogService';

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export default {
    filters: {
        postDate(dateTime) {
            const date = new Date(dateTime);
            return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        },
    },

    data() {
        return {
            sectionLinks: [
                'welcome',
                'portfolio',
                'blog',
                'contact',
            ],

            recentPosts: [],
        };
    },

    created() {
        this.getPosts();
    },

    methods: {
        scrollTo(section) {
            // window scrollto logic
        },

        getPosts() {
            const blog = new BlogService();
            blog.getPosts().then(posts => {
                // filter out "Welcome" post
                this.recentPosts = posts.filter(post => post.id !== 7);
            });
        },
    },
}
</script>

<style lang="scss">
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

.blog-posts {
    list-style: none;
    margin: 0;
    padding: 0;
}
.blog-post__date {
    &::before {
        content: 'Posted:';
        display: inline-block;
        margin-right: 0.5em;
    }
}
</style>
