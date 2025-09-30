<script setup>
    import { computed } from 'vue'
    import { Images } from '../../scripts/images'
    import Button from './Button.vue'
    // import { Data } from '../../scripts/datas'

    const props = defineProps({
        frameImage: {type: String, required: true },
        frameImage2x: {type: String, required: false },
        description: String
    })
    
    const frameStyle = computed(() => {
        if (props.frameImage2x) {
            return {
                backgroundImage: `-webkit-image-set(
                    url(${props.frameImage}) 1x,
                    url(${props.frameImage2x}) 2x
                )`,
                backgroundImage: `image-set(
                    url(${props.frameImage}) 1x,
                    url(${props.frameImage2x}) 2x
                )`
            }
        } else {
            return {
                backgroundImage: `url(${props.frameImage})`
            }
        }
    })
</script>

<template>
    <div class="frame-container">
        <div class="frame" >
            <div class="frame-picture" :style="frameStyle">
                <img 
                    class="player-img"
                    :src="Images.main.demo.player" 
                    :srcset="`${Images.main.demo.player} 1x, ${Images.main.demo.player2x} 2x`"
                />
            </div>
        </div>
        <div class="side-frame">
            <blockquote class="frame-description">
                <p>
                    {{ props.description }}
                </p>
            </blockquote>
            

            <Button label="Get Support" variant="secondary" />
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    @import '../../stylesheets/variables.styl';

    .frame-container
        display flex
        justify-content space-between
        align-items center
        gap 49px
        padding 0 207px 0 38px
        width 1850px
        height 748px
        border-top 2px solid primaryGreen
        border-bottom 2px solid primaryGreen
        border-left 2px solid primaryGreen
        border-radius 1000px 0 0 1000px

    .frame
        width 1129px
        height 678px
        border 2px solid primaryGreen
        border-radius 1000px
        display flex
        justify-content center
        align-items center
        padding 34px 42px

    .frame-picture
        width 100%
        height 100%
        display flex
        justify-content center
        align-items center
        border-radius 1000px
        background-size cover
        background-position center
        cursor pointer

    .player-img
        width 82px
        height 82px
    

    .side-frame
        .btn
            display: none
            align-self flex-start

    .frame-description
        width 427px
        
</style>
        
        