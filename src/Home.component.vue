<template>
    <main id="home-body" class="main-body main-container-layout">
        <h2>Welcome!</h2>
        <p>This is my personal website, portfolio, &amp; playground <br>
        Enjoy your visit!</p>

        <router-link to="/portfolio/web">portfolio</router-link>
        <router-link to="/">about</router-link>
        <router-link to="/">contact</router-link>

        <div>
            <h2>Portfolio Preview</h2>
            <router-link class="portfolio-link" to="/portfolio">all</router-link>
            <router-link class="portfolio-link" to="/portfolio/digital">digital</router-link>
            <router-link class="portfolio-link" to="/portfolio/analogue">analogue</router-link>
            <router-link class="portfolio-link" to="/portfolio/web">web</router-link>
        </div>

        <div>
            <p>if touch screen - use hamburger</p>
            <p>if !touch && screen width < 900 - use hamburger</p>
            <p>if !touch && screen width > 900 - use fancy thing</p>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {};
    }
};
</script>
