<script setup>
    import Navbar from './header/Navbar.vue'
    import MealTimeSection from './header/MealTimeSection.vue'
</script>

<template>
    <header> 
        <Navbar />
        <MealTimeSection />
    </header>
</template>

<style lang="stylus" scoped>
    @import '../stylesheets/App.styl'

    header
        width 1640px
        display flex
        flex-direction column
        align-items center
        background backgroundLight
        gap 100px
</style>