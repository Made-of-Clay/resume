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

        <figure id="preview-image"
            v-show="imageSelected">

            <img :src="selected.src"
                :alt="selected.caption"
                @click="showImage(selectedIndex)">
            <figcaption v-html="selected.desc"></figcaption>
        </figure>

        <div id="gallery-thumbs">
            <div v-for="(entry, index) in info" class="thumb">
                <img :src="entry.src"
                    :alt="entry.caption"
                    @click="focus(index)">
            </div>
        </div>

        <lightbox ref="lightbox"
            :images="info"
            :show-caption="true"
            :showLightBox="false"></lightbox>
    </main>
</template>

<script>
import info from './portfolio-info.js';
import Lightbox from 'vue-image-lightbox';

export default {
    name: 'Portfolio',
    components: {
        Lightbox,
    },
    data() {
        return {
            info,
            selectedIndex: -1
        };
    },
    computed: {
        selected() {
            let fakeSelected = {
                caption: '',
                desc: '',
                link: '',
                src: ''
            };
            return (this.imageSelected) 
                ? this.info[this.selectedIndex] 
                : fakeSelected;
        },
        imageSelected() {
            return this.selectedIndex > 0;
        },
    },
    methods: {
        buildID(index) {
            if (isUndefined(index)) return '';

            return this.info[index].caption.toLowerCase().replace(/ /g, '_');
        },
        showImage(index) {
            this.$refs.lightbox.showImage(index);
        },
        focus(index) {
            console.log("index", index);
            console.log("this.selectedIndex", this.selectedIndex);
            this.selectedIndex = index;
        },
    },
};

function isUndefined(value) {
    return typeof value === 'undefined';
}
function objectEmpty(obj) {
    return (Object.keys(obj)).length === 0;
}
function goodIndex(value) {
    return value > -1;
}
</script>

<style>
#gallery-thumbs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.thumb {
    display: block;
    margin: 0.25em;
    max-width: 100px;
}
.thumb > img {
    object-fit: contain;
}
</style>
