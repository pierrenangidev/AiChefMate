<script setup>
    import { Images } from "../../scripts/images.js" 
    import Button from "../Content/Button.vue"
</script>

<template>
    <nav class="navbar">
        <div class="logo">
            <!-- Meilleure image en fonction de la densité -->
            <img 
                :src="Images.navbar.logo"
                :srcset="`${Images.navbar.logo} 1x, ${Images.navbar.logo2x} 2x`" 
                alt="Logo AiChefMate" 
                class="logo-image" 
            />
        </div>
        <ul class="nav-links">  
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Customer support</a></li>
            
        </ul>
        <div class="auth-buttons">
            <a href="#">Log In</a>
            <Button label="Start For Free" variant="primary" />
        </div>
    </nav>
</template>

<style lang="stylus" scoped>
    @import "../../stylesheets/variables.styl"

    .navbar
        width 1360px
        display flex
        justify-content space-between
        align-items center
        border 1px solid red
        box-shadow 0 2px 4px rgba(0, 0, 0, 0.1)

    .nav-links
        list-style none
        display flex
        gap 80px
        margin 0
        padding 0

        li a
            text-decoration none
            color primaryGreen
            font-weight weight500

            &:hover
                color secondaryGreen

    .auth-buttons
        display flex
        align-items center
        gap 30px    
        list-style none

        a
            text-decoration none
            color primaryGreen
            font-weight weight500

            &:hover
                color secondaryGreen
</style>