<script setup>
    import { Images } from '../../scripts/images';
</script>

<template>
    <section class="meal-time-section">
        <div class="meal-time-content">
            <h2 class="meal-time-heading">What would you like to cook today?</h2>
            <p class="meal-time-text">Discover recipes tailored to your preferences and dietary needs.</p>
            <Button label="Get Started" variant="primary" :icon="true" />
        </div>
    </section>
</template>

<style lang="stylus" scoped>
    @import "../../stylesheets/variables.styl"

    .meal-time-section
        padding 60px 0
        background-color lightGray

    .meal-time-content
        max-width 800px
        margin 0 auto
        text-align center

    .meal-time-heading
        font-size 2.5rem
        margin-bottom 20px

    .meal-time-text
        font-size 1.2rem
        margin-bottom 30px
</style>