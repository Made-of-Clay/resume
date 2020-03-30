<template>
    <v-app>
        <!-- my red: #da1e33 -->
        <!-- my gray: #626366 -->
        <!-- TODO replace src w/ my resume black background image tile (and keep always?) -->
        <!-- might also do pic w/ red/gray? gradient then change when scrolled... dunno yet -->
        <site-header />

        <site-nav-drawer />

        <site-content />
    </v-app>
</template>

<script>
import siteHeader from './site-header';
import siteContent from './site-content';
import siteNavDrawer from './site-nav-drawer';

export default {
    name: 'AdamLeis',

    components: {
        siteHeader,
        siteContent,
        siteNavDrawer,
    },
};
</script>
