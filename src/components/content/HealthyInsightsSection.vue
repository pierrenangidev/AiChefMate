<script setup>
    import { Data } from '../../scripts/Datas.js'
    import Heading from './Heading.vue'
    import Blog from './heathlyInsights/Blog.vue';
</script>

<template>
    <div class="hi-container">
        <Heading 
            :title="Data.content.main.sections.healthyInsights.title" 
            :sub-title="Data.content.main.sections.healthyInsights.subtitle"
        />
        <div class="blogs-container">
            <Blog 
                v-for="blog in Data.content.main.sections.healthyInsights.content.blogs"
                :key="blog.id"
                :blog-image="blog.image"
                :blog-image2x="blog.image2x"
                :blog-title="blog.title"
            />
        </div>
    </div>
</template>

<style lang="stylus">
    @import '../../stylesheets/variables.styl';

    .hi-container
        display flex
        flex-direction column
        align-items flex-start
        gap 100px

    .blogs-container
        display inline flex

        .blog:nth-child(2) h3
            width 448px

</style>