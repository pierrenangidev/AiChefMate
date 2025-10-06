<script setup>
    const props = defineProps({
        feedbackQuote: String,
        feedbackQuoteIcon: String,
        person: String,
        imgPerson: String,
        imgPerson2x: String
    })
</script>

<template>
    <div class="testimonial">
        <div class="quote-container">
            <q class="testimonial-quote">
                {{ props.feedbackQuote }}
            </q>

            <img 
                class="quote-icon" 
                :src="props.feedbackQuoteIcon" 
            />
        </div>

        <div class="testimonial-person">
            <img 
                :src="props.imgPerson"
                :srcset="`${props.imgPerson} 1x, ${props.imgPerson2x} 2x`"
            />
            <span>
                {{ props.person }}
            </span>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    @import '../../../stylesheets/variables.styl'

    .testimonial
        width 395px
        padding 60px 50px
        display flex
        flex-direction column
        border-radius 24px
        background-color backgroundLight
        gap 15px

    .quote-container
        display flex
        flex-direction column
        align-items flex-start
        gap: 15px

    .testimonial-quote
        quotes none

    .quote-icon
        align-self flex-end

    .testimonial-person
        display flex
        justify-content flex-start
        align-items center
        gap 15px

        img
            width 60px
            height 60px
            border-radius 33px
</style>