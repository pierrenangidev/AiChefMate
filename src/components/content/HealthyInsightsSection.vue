<script setup>
import { Data } from "../../scripts/datas.js";
import Heading from "./Heading.vue";
import Blog from "./heathlyInsights/Blog.vue";

// Raccourci pour un accès plus propre aux données dans le template
const heading = Data.content.main.sections.healthyInsights;
const healthyInsights = Data.content.main.sections.healthyInsights;
</script>

<template>
  <div class="hi-container">
    <div class="hi-content">
      <Heading :title="heading.title" :sub-title="heading.subtitle" />
      <div class="blogs-container">
        <Blog
          v-for="blog in healthyInsights.content.blogs"
          :key="blog.id"
          :blog-image="blog.image"
          :blog-image2x="blog.image2x"
          :blog-title="blog.title"
        />
      </div>
    </div>
    <div class="knob"></div>
  </div>
</template>

<style lang="stylus">
@import '../../stylesheets/variables.styl'

.hi-container
    background-color backgroundLight
    width 100%
    display flex
    flex-direction column
    align-items center
    padding 100px 140px 140px 140px
    margin 242px 0 200px 0
    position relative

    .heading
      padding 0

.hi-content
    display flex
    gap 100px
    flex-direction column
    align-items flex-start


.blogs-container
    display inline flex
    gap 21px

    .blog:nth-child(2) h3
        width 448px

.knob
    width 687px
    height 203px
    background backgroundLight
    border-radius 0 960px 960px 0
    position absolute
    top calc(-203px/2)
    left 0
</style>
