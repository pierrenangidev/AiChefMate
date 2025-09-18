<script setup>
    // Importation de computed pour les classes dynamiques et du composant icône
    import { computed } from 'vue';
    import RightArrowIcon  from '@/components/Content/Arrows/RightArrowIcon.vue';

    // Définition des props pour personnaliser le bouton
    // - variant : style principal du bouton (ex: primary, secondary, etc.)
    // - icon : affiche l'icône à droite du texte si true
    // - iconOnly : affiche uniquement l'icône, masque le texte si true
    // - label : texte du bouton
    const props = defineProps({
        variant: { type: String, default: 'primary' },
        icon: { type: Boolean, default: false },
        iconOnly: { type: Boolean, default: false },
        label: { type: String, default: 'Button' }
    });

    // Génère dynamiquement les classes CSS selon les props
    // Toujours 'btn', puis la classe de variante, puis 'icon-only-btn' si iconOnly
    const btnClass = computed(() => [
        'btn',
        `${props.variant}-btn`,
        { 'icon-only-btn': props.iconOnly }
    ])
</script>

<template>
    <!-- Bouton stylisé avec classes dynamiques -->
    <button :class="btnClass">
        <!-- Affiche le texte sauf si iconOnly -->
        <span v-if="!props.iconOnly">{{ props.label }}</span>
        <!-- Affiche l'icône si icon ou iconOnly est vrai -->
        <RightArrowIcon v-if="props.icon || props.iconOnly" />
    </button>
</template>

<style lang="stylus" scoped>
@import "../../stylesheets/variables.styl"
// Variables et couleurs importées

// Classe de base pour tous les boutons
.btn
    border none
    border-radius 50px
    padding 18px 40px
    cursor pointer
    font-weight weight500

// Styles pour chaque variante de bouton
.primary-btn
    background primaryGreen
    color white

.primary-btn:hover
    background darken(primaryGreen, 5%)
    color white

.transparent-primary-btn
    background transparent 
    color primaryGreen
    border 2px solid primaryGreen

.transparent-primary-btn:hover
    background darken(black, 5%)
    color primaryGreen

.secondary-btn
    background secondaryGreen
    color primaryGreen

.bordered-arrow-secondary-btn
    background secondaryGreen
    color primaryGreen
    border 2px solid primaryGreen

.no-bordered-arrow-secondary-btn
    background secondaryGreen
    color primaryGreen
    border none

// Style spécial pour masquer le texte si iconOnly
.icon-only-btn
  span
    display none
</style>


