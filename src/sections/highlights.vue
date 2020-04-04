<template>
    <section>
        <h1>
            <v-icon v-text="section.icon" />
            {{section.heading}}
        </h1>

        <v-row class="highlights__gallery">
            <v-col cols="12" class="order-1">
                <v-tabs v-model="current.group" class="mb-4">
                    <v-tab v-for="highlight in highlights" :key="`tab-${highlight.id}`">
                        {{highlight.name}}
                    </v-tab>
                </v-tabs>
                <p v-if="highlighted.id === 'kona'">
                    KONA is the project I have been working on for the last 5 years. It is a web application used internally at Rosenboom for tracking jobs &amp; parts, activity on the shop floor, employee performance, etc.... My role is primarily front-end development, but frequently included back-end development, especially when updating apps from our jQuery/CodeIgniter setup to the newer Vue/Phalcon paradigm. We wrote the back-end as a REST API and digested it from the server.
                </p>
                <p v-else-if="highlighted.id === 'marvel'">
                    One of my more dorky past times is playing roleplating games a la Dungeons &amp; Dragons. This particular web app is used in a Marvel roleplaying game where roll results are percentile (1-100) and success levels are compared against a chart. I found myself thinking a calculator would not only be more visually meaningful for me but would also be good practice for whatever technology I would be using at the time. The third version can be viewed <x-link href="http://marvel.adamleis.com" v-text="'here'" /> and its source is available on <x-link href="https://github.com/Made-of-Clay/marvel-calculator" v-text="'GitHub'" />. White results are failures, green to red indicate level of success where green is a moderate success and red is a critical success. (This is well-known among the users, so more information is not needed.)
                </p>
                <p v-else-if="highlighted.id === 'wedding'">
                    This little project has stood up decently to the test of time, as far as interactions go. <x-link href="http://adamandsarah.adamleis.com" v-text="'My wedding website'" /> was a fun little project done over 5 years ago. It houses one of my favorite projects: a CSS 3D interactive cube telling the story of my wife and me meeting and falling in love. It was a fun and informative project. While I'm not thrilled with reading back through how I wrote my code back then, who is? It also adds the handy feature of keeping track of how long we have been married, which was an accidental feature I noticed in the jQuery countdown plugin which is now counting up from the wedding date.
                </p>
            </v-col>
            <v-col cols="12" md="6" class="order-1 order-md-2">
                <div class="highlights__interface">
                    <small class="d-flex justify-center">
                        ({{current.image+1}} of {{highlighted.images.length}})
                    </small>
                    <div class="highlights__thumbnails mb-2">
                        <v-sheet
                            v-for="(image, index) in highlighted.images"
                            :key="`${highlighted.id}-image-${index}`"
                            tag="figure"
                            height="100"
                            width="100"
                            elevation="1"
                            class="highlighted__thumbnail pa-2 ma-2 d-inline-flex align-center justify-center"
                            :class="current.image === index ? 'primary lighten-5' : 'accent'"
                            @click="current.image = index"
                        >
                            <img :src="image.src" alt="">
                        </v-sheet>
                    </div>
                    <template v-if="highlighted.id === 'kona'">
                        <p v-if="highlightedImage.id === 'applistDesktop'">
                            The applist showed all of the apps that a user had access to. The apps were grouped alphabetically and a filter is available for quickly finding apps. Apps could be saved by a given user into groups as a sibling tab of the applist.
                        </p>
                        <p v-if="highlightedImage.id === 'applistMobile'">
                            Responsive design is important in KONA. People used it on phones, tablets, terminals, and office computers. Most apps were fully usable no matter the device with only a few exceptions.
                        </p>
                        <p v-if="highlightedImage.id === 'blueprints'">
                            Blueprints were available through KONA as well for engineer and shop worker alike. Existing as PDFs, they were opened in iframes. Preview thumbnails were available and would process the PDF into an image on the fly.
                        </p>
                        <p v-if="highlightedImage.id === 'calendarPanel'">
                            A calendar component was developed for some who needed to know ordinal dates throughout the year. This eventually served as a perfect place to include company holidays.
                        </p>
                        <p v-if="highlightedImage.id === 'empPeek'">
                            Various "peek" components were created to display useful data at a glance. This peek is an employee peek. It would display the employee photo, name, and employee ID (for those who had access). Peeks show on hovering trigger text.
                        </p>
                        <p v-if="highlightedImage.id === 'fbContext'">
                            Floorboard was my largest contribution besides the general UI of KONA. It displayed live data for the floor, specific workcenter locations, labor at each workcenter, and timeliness of each labor. Objects could be tagged as well for quick reference. Data is updated via websockets using <x-link href="https://socket.io/" v-text="'socket.io'" />.
                        </p>
                        <p v-if="highlightedImage.id === 'fbLayers'">
                            Floorboard also showed a number of other layers of data. Phones, terminals, printers, serial IP converters, etc... Each would display when one lost connection and for how long, as well as their IP addresses. Visibility and draggability could also be toggled for users with permission. Objects could be searched for and removed. All of Floorboard is interactive with pan/zoom features, thanks to <x-link href="https://d3js.org/" v-text="'d3'" /> &amp; SVGs.
                        </p>
                        <p v-if="highlightedImage.id === 'notification'">
                            Some apps would utilize a notification feature to send relevant users updates on tasks that required their attention. This also used websockets and behaved much like mobile device push notifications.
                        </p>
                        <p v-if="highlightedImage.id === 'partPeek'">
                            Another example of a frequently-used peek, the part peek would be available wherever part numbers were displayed and offered brief information on the part as well as quick "open with" links to other apps. Blueprints were also checked and displayed availability for a given part.
                        </p>
                        <p v-if="highlightedImage.id === 'partTree'">
                            The Part application is very robust, offering many tabs of information. The BOM (Bill of Material) Tree tab displayed hierarchical information for a given part, relevant job data, quantities, etc.... More complex jobs had larger trees, so being able to see the relationships eased a conceptual burdon. (Note that this view is mobile landscape.)
                        </p>
                        <p v-if="highlightedImage.id === 'userPanel'">
                            The user panel housed account-specific controls and navigation, as well as the ability to switch between plants. When one's plant is changed, all instances of KONA immediately updated via websocket events to prevent stale data and confusion. Logging out and locking one's screen also affected all user instances. Vuex was invaluable in keeping things up-to-date and simple to change across KONA.
                        </p>
                    </template>
                </div>
            </v-col>
            <v-col cols="12" md="6" class="order-1">
                <v-sheet
                    tag="figure"
                    elevation="1"
                    color="accent"
                    class="highlights__imageWrapper pa-2 d-flex align-center justify-center"
                >
                    <img :src="highlightedImage.src" alt="" class="highlights__image">
                </v-sheet>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import sectionMixin from './section.mixin.js';
// import highlightKona from './highlight-kona';
// kona images
import applistDesktop from '../assets/applist-desktop.png';
import applistMobile from '../assets/applist-mobile.png';
import blueprints from '../assets/blueprints-desktop.png';
import calendarPanel from '../assets/calendar-panel-desktop.png';
import empPeek from '../assets/emp-peek-mobile.png';
import fbContext from '../assets/floorboard-desktop-contextmenu.png';
import fbLayers from '../assets/floorboard-desktop-layers.png';
import notification from '../assets/notification-panel-mobile.png';
import partPeek from '../assets/part-peek-desktop.png';
import partTree from '../assets/part-tree-mobile.png';
import userPanel from '../assets/user-panel-mobile.png';
// marvel images
import marvelCalcRed from '../assets/marvel-calc-red.png';
import marvelCalcYlw from '../assets/marvel-calc-yellow.png';
import marvelCalcChart from '../assets/marvel-calc-chart.png';
// wedding image
import wedding from '../assets/wedding.png';

export default {
    components: {
        // highlightKona,
    },

    mixins: [
        sectionMixin,
    ],

    data: () => ({
        section: {
            heading: 'Highlights',
            icon: 'mdi-marker',
            id: 'highlights',
        },
        current: { group: 0, image: 0 },
        highlights: [{
            id: 'kona',
            name: 'KONA',
            images: [
                { src: applistDesktop, id: 'applistDesktop' },
                { src: applistMobile,  id: 'applistMobile' },
                { src: userPanel,      id: 'userPanel' },
                { src: notification,   id: 'notification' },
                { src: calendarPanel,  id: 'calendarPanel' },
                { src: blueprints,     id: 'blueprints' },
                { src: empPeek,        id: 'empPeek' },
                { src: partPeek,       id: 'partPeek' },
                { src: partTree,       id: 'partTree' },
                { src: fbContext,      id: 'fbContext' },
                { src: fbLayers,       id: 'fbLayers' },
            ],
            link: null,
        }, {
            id: 'marvel',
            name: 'Marvel Calculator',
            images: [
                { src: marvelCalcYlw,   id: 'yellow' },
                { src: marvelCalcRed,   id: 'red' },
                { src: marvelCalcChart, id: 'chart' },
            ],
            link: 'http://marvel.adamleis.com',
        }, {
            id: 'wedding',
            name: 'Wedding Website',
            images: [{src: wedding, id: 'wedding'}],
            link: 'adamandsarah.adamleis.com',
        }],
    }),
    computed: {
        highlighted: vm => vm.highlights[vm.current.group],
        highlightedImage: vm => vm.highlighted.images[vm.current.image],
    },
};
</script>

<style lang="scss">
%highlights-image {
    max-height: 100%;
    max-width: 100%;
}
.highlights__image {
    @extend %highlights-image;
}
.highlighted__thumbnail {
    cursor: pointer;
    vertical-align: top;

    > img {
        @extend %highlights-image;
    }
}
.highlights__thumbnails {
    overflow-x: auto;
    white-space: nowrap;
}
</style>