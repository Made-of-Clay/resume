<template>
    <div>
        <section id="welcome">
            content from wordpress page goes here? (http://api.adamleis.com/wp-json/wp/v2/pages/)
            TODO: write service for fetching data from wp api
        </section>


        <section id="portfolio">
            <router-link to="/portfolio">
                PORTFOLIO
            </router-link>
        </section>

        <section id="blog">
            <ul class="blog-posts">
                <!-- <li
                    v-for="post in recentPosts"
                    v-if="recentPosts.length"
                    class="blog-post"
                    :data-postid="post.id"
                >
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
                </li> -->
            </ul>
        </section>

        
        <section id="contact">
            CONTACT
        </section>
    </div>
</template>

<script>
export default {
    
}
</script>
