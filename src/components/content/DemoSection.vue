<script setup>
    import { Images } from '../../scripts/images.js'
    import { Data } from '../../scripts/datas.js'
    import Heading from "./Heading.vue"
    import Frame from './Frame.vue'
</script>

<template>
    <div class="demo-container">
        <Heading :title="Data.content.main.sections.demo.title" :sub-title="Data.content.main.sections.demo.subtitle" /> 
        <Frame 
            :frame-image="Images.main.demo.demo"
            :frame-image2x="Images.main.demo.demo2x"
            :description="Data.content.main.sections.demo.content.description"
        />
    </div>
</template>


<style lang="stylus">
    @import "../../stylesheets/variables.styl"

    .demo-container
        align-self flex-end
        display flex
        flex-direction column
        gap 90px

        .frame-container
            .side-frame
                .frame-description
                    font h1Size syne
                    font-weight weight500
                    text-align end 

    .heading
        padding 0 70px
</style>