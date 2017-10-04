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

        <div v-for="(entry, index) in info" style="border-bottom:1px solid">
            Title: {{entry.title}} <br>
            Desc: <span v-html="entry.desc"></span><br>
            <a :href="entry.link">Link</a> <br>

            <div id="preview-image">
                <img :src="entry.src" 
                    :id="buildID(index)"
                    :alt="entry.title"
                    @click="showImage(index)">
            </div>
        </div>

        <md-dialog ref="dialog"
            md-open-from="preview-image"
            md-close-to="preview-image">
            
            <md-dialog-title>{{selected.title}}</md-dialog-title>

            <md-dialog-content>
                <img id="full-image"
                    :src="selected.src"
                    :alt="selected.title">
            </md-dialog-content>
        </md-dialog>
    </main>
</template>

<script>
import info from './portfolio-info.js';

export default {
    name: 'Portfolio',
    data() {
        return {
            info,
            selectedIndex: -1
        };
    },
    computed: {
        selected() {
            let fakeSelected = {
                title: '',
                desc: '',
                link: '',
                src: ''
            };
            return (this.selectedIndex >= 0) 
                ? this.info[selectedIndex] 
                : fakeSelected;
        },
    },
    methods: {
        buildID(index) {
            if (isUndefined(index)) return '';

            return this.info[index].title.toLowerCase().replace(/ /g, '_');
        },
        showImage(index) {
            this.selectedIndex = index;
            this.$refs.dialog.open();
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