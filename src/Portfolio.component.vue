<template>
    <main id="portfolio-body" class="main-body main-container-layout">
        <!-- portfolio at xlarge has viewer and thumbs side-by-side
        portfolio at large may move beneath viewer (or just shrink row count of thumbs)
        portfolio at medium moves thumbs beneath preview and shrinks preview dims some
        portfolio at small has thumbs beneath preview and scrolling horizontally
        portfolio at xsmall has thumbs beneath preview and scrolling horizontally -->
        
        <img src="./assets/logo.png" alt="">

        <p>- gallery here -</p>
        <p>large image here</p>
        <p>thumbnails here</p>

        <div v-for="entry in info" style="border-bottom:1px solid">
            Title: {{entry.title}} <br>
            Desc: <span v-html="entry.desc"></span><br>
            <a :href="entry.link">Link</a> <br>
            <img :src="entry.src" :alt="entry.title">
        </div>
    </main>
</template>

<script>
import info from './portfolio-info.js';

export default {
    name: 'Portfolio',
    data() {
        return {
            info,
            foo: 'bar'
        };
    },
};
</script>