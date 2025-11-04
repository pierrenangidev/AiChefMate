<script setup>
import Navbar from "./header/Navbar.vue";
import MealTimeSection from "./header/MealTimeSection.vue";
</script>

<template>
  <header>
    <Navbar />
    <MealTimeSection />
    <div class="knob"></div>
  </header>
</template>

<style lang="stylus" scoped>
@import '../stylesheets/variables.styl'

header
    width 100%
    padding 70px 140px 140px 140px
    display flex
    flex-direction column
    align-items center
    background backgroundLight
    gap 100px
    position relative

    .knob
        width 687px
        height 203px
        background backgroundLight
        border-radius 960px 0 0 960px
        position absolute
        bottom calc(-203px/2)
        right 0
</style>
