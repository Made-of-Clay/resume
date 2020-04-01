<template>
    <section>
        <h1>
            <v-icon v-text="section.icon" />
            <template v-if="$vuetify.breakpoint.width < 400">
                {{section.heading}}
            </template>
            <template v-else>
                Research &amp; Development
            </template>
        </h1>

        <div class="multipleColumns">
            <p>As indicated in the <a>About</a> section, I love learning. I have research this section to point out what technologies and web &amp; tech topics are on my horizon to study and learn more about. The following is a list of interests I have in learning about more:</p>

            <ul>
                <li><b><x-link href="https://www.docker.com/" v-text="'Docker'" /></b> - containerization is an awesome concept and we began using it at Rosenboom before I was laid off during the covid-19 outbreak. I want to learn more about this powerful tool.</li>
                <li><b>Atomic/Utility-first CSS</b> - initially suspicious of atomic CSS, I see value in it now after having used Vuetify's utility and helper classes. As with any potentially great tool, it must be carefully used so as not to create the exact problems it is often criticized over. Upon a fuller version of my website, I am planning on using <x-link href="https://tailwindcss.com/" v-text="'Tailwind CSS'" /> to scratch this itch.</li>
                <li><b>Data Visualization</b> - I gained some experience with this at Rosenboom when needing to display Employee performance data as well as a plant's current labor on the floor. More about the "Floorboard" application is covered in <a>Highlights</a>.</li>
                <li><b>AI/Machine Learning</b> - this admittedly-ambitious desire aims to fill the gap in my understanding of how AI/ML works and what practical use cases it has on whatever scale I am working at. I have gone through some courses/videos at <x-link href="https://stackskills.com/" v-text="'Stack Skills'" /> and simply need to continue learning and experimenting.</li>
                <li><b>AWS/Cloud Computing</b> - with serverless culture and the JAM stack paradigm available today, robust, fast websites can be created without having to manage an entire back-end framework or CMS. As a developer preferring to work on the front-end, this is highly appealing to me. I know back-end and can set up the environment when necessary, but most personal projects do not require such robust solutions. AWS, Firebase, and Microsoft Azure offer awesome cloud services and I want to know more about them to utilize said awesomeness. In fact, the contact form on my website uses <x-link href="https://aws.amazon.com/lambda/" v-text="'AWS Lambda'" />.</li>
            </ul>

            <p class="mt-4">
                There is always more to learn and this list will likely update as time goes on.
            </p>
        </div>
    </section>
</template>

<script>
import sectionMixin from './section.mixin.js';

export default {
    mixins: [
        sectionMixin,
    ],

    data: () => ({
        section: {
            heading: 'R & D',
            icon: 'mdi-book-open-page-variant',
            id: 'research-development',
        },
    }),
};
</script>