<script setup>
    import { Data } from '../../scripts/datas'

    const props = defineProps({
        title: String,
        subTitle: String
    });
</script>

<template>
    <!-- Bloc principal du header avec titre, séparateur et sous-titre -->
    <div class="heading">
        <h2>
            {{ props.title }}
        </h2>
        <div class="divider"></div>
        <p>
            {{ props.subTitle }}
        </p>
    </div>
</template>

<style lang="stylus" scoped>
@import "../../stylesheets/variables.styl"
// Import des variables de couleurs et polices

// Bloc principal du header
.heading
    display flex
    align-items center

// Style du titre
.heading h2
    font h2Size syne    // (supposé être une police, à vérifier)
    font-weight weight500

// Séparateur vertical entre le titre et le sous-titre
.divider
    width 1px
    height 100px
    border 1px solid primaryGreen
    margin 0 52px
    transform rotate(35deg)

.heading p
    width 435px
</style>

