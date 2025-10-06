<script setup>
    import { Data } from '../../scripts/Datas.js'

    import Heading from '../content/Heading.vue'

    import Testimonial from './testimonials/Testimonial.vue'
</script>

<template>
    <div class="testimonials-container">
        <Heading 
            :title="Data.content.main.sections.testimonials.title" 
            :sub-title="Data.content.main.sections.testimonials.subtitle"
        />

        <div class="testimonials">
            <!-- Emily R -->
            <Testimonial 
                :feedback-quote="Data.content.main.sections.testimonials.content.testimonial1.feedback"
                :feedback-quote-icon="Data.content.main.sections.testimonials.content.images.feedbackIcon"
                :img-person="Data.content.main.sections.testimonials.content.images.emily_r"
                :img-person2x="Data.content.main.sections.testimonials.content.images.emily_r2x"
                :person="Data.content.main.sections.testimonials.content.testimonial1.name"
            />

            <!-- Mark T -->
            <Testimonial 
                :feedback-quote="Data.content.main.sections.testimonials.content.testimonial2.feedback"
                :feedback-quote-icon="Data.content.main.sections.testimonials.content.images.feedbackIconAlt"
                :img-person="Data.content.main.sections.testimonials.content.images.mark_t"
                :img-person2x="Data.content.main.sections.testimonials.content.images.mark_t2x"
                :person="Data.content.main.sections.testimonials.content.testimonial2.name"
            />

            <!-- Sarah J -->
            <Testimonial 
                :feedback-quote="Data.content.main.sections.testimonials.content.testimonial3.feedback"
                :feedback-quote-icon="Data.content.main.sections.testimonials.content.images.feedbackIcon"
                :img-person="Data.content.main.sections.testimonials.content.images.sarah_j"
                :img-person2x="Data.content.main.sections.testimonials.content.images.sarah_j2x"
                :person="Data.content.main.sections.testimonials.content.testimonial3.name"
            />

            <!-- Rebecca S -->
            <Testimonial 
                :feedback-quote="Data.content.main.sections.testimonials.content.testimonial4.feedback"
                :feedback-quote-icon="Data.content.main.sections.testimonials.content.images.feedbackIcon"
                :img-person="Data.content.main.sections.testimonials.content.images.rebecca_s"
                :img-person2x="Data.content.main.sections.testimonials.content.images.rebecca_s2x"
                :person="Data.content.main.sections.testimonials.content.testimonial4.name"
            />
        </div>
    </div>
</template>

<style lang="stylus">
    @import '../../stylesheets/variables.styl';

    .testimonials-container
        display flex
        flex-direction column
        gap 100px

        .heading 
            align-self flex-start


    .testimonials
        display inline flex
        gap 20px

        .testimonial:nth-child(2)
            background-color primaryGreen
            color beige
            
            span
                color #F8F5EF
</style>