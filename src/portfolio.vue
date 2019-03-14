<template>
    <article>
        Portfolio component: foo {{foo}}
        <h1>Portfolio</h1>

        <div>chevron arrows and drop down (select) of project names</div>
        <!-- <project-select /> -->

        <section class="portfolio__projText">
            <h2>Project names</h2>
            <p>Project Desc/caption</p>
            <p>(desc scrolls vert if needed</p>
        </section>

        <section class="portfolio__projPics">
            carousel? no timing
            images saved to media lib w/ cat: "Whatever" under parent "Portfolio"
            click big thumb to expand (dialog?)
            /portfolio/:project/:thumb-n/
        </section>
    </article>
</template>

<script>
export default {
    data: () => ({
        foo: 'bar',
    }),
}
</script>

<style>

</style>
