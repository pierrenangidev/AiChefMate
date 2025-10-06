<script setup>
    import Button from '../Button.vue';

    const props = defineProps({
        blogImage: String,
        blogImage2x: String,
        blogTitle: String
    })
</script>

<template>
    <div class="blog">
        <img 
            :src="blogImage" 
            :srcset="`${blogImage} 1x, ${blogImage2x} 2x`"
        />
        <h3>{{ props.blogTitle }}</h3>
        <Button variant="secondary" label="Read Article" :icon="true" />
    </div>
</template>

<style lang="stylus" scoped>
    @import '../../../stylesheets/variables.styl'

    .blog 
        display flex 
        flex-direction column
        align-items flex-start
        gap 33px
        padding 30px
        width 473px

        img 
            object-fit cover
            width 100%
            height 473px
            border-radius 28px

        h3
            font h3Size syne
            
</style>