<script setup>
import { Data } from "../../../scripts/datas.js";

import Heading from "../ui/Heading.vue";

import Testimonial from "../specific/testimonials/Testimonial.vue";

// Raccourci pour un accès plus propre aux données dans le template
const heading = Data.content.main.sections.testimonials;
const content = Data.content.main.sections.testimonials.content;
</script>

<template>
  <div class="testimonials-container">
    <Heading :title="heading.title" :sub-title="heading.subtitle" />

    <div class="testimonials">
      <!-- Emily R -->
      <Testimonial
        :feedback-quote="content.testimonial1.feedback"
        :feedback-quote-icon="content.images.feedbackIcon"
        :img-person="content.images.emily_r"
        :img-person2x="content.images.emily_r2x"
        :person="content.testimonial1.name"
      />

      <!-- Mark T -->
      <Testimonial
        :feedback-quote="content.testimonial2.feedback"
        :feedback-quote-icon="content.images.feedbackIconAlt"
        :img-person="content.images.mark_t"
        :img-person2x="content.images.mark_t2x"
        :person="content.testimonial2.name"
      />

      <!-- Sarah J -->
      <Testimonial
        :feedback-quote="content.testimonial3.feedback"
        :feedback-quote-icon="content.images.feedbackIcon"
        :img-person="content.images.sarah_j"
        :img-person2x="content.images.sarah_j2x"
        :person="content.testimonial3.name"
      />

      <!-- Rebecca S -->
      <Testimonial
        :feedback-quote="content.testimonial4.feedback"
        :feedback-quote-icon="content.images.feedbackIcon"
        :img-person="content.images.rebecca_s"
        :img-person2x="content.images.rebecca_s2x"
        :person="content.testimonial4.name"
      />
    </div>
  </div>
</template>

<style lang="stylus">
@import '../../../stylesheets/variables.styl';

.testimonials-container
    display flex
    flex-direction column
    gap 100px
    margin-top 200px
    margin-bottom 200px


    .heading
        align-self flex-start
        padding 0

.testimonials
    display inline flex
    gap 20px

    .testimonial:nth-child(2)
        background-color primaryGreen
        color beige

        span
            color #F8F5EF
</style>
