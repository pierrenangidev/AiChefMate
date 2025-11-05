<script setup>
import { computed } from "vue";

const props = defineProps({
  // Le type de carte (1, 2, 3, ou 4) pour choisir le style
  variant: {
    type: Number,
    required: true,
  },

  // --- Props pour la Variante 1 ---
  title1: {
    type: String,
  },
  description1: {
    type: String,
  },
  title2: {
    type: String,
  },
  description2: {
    type: String,
  },

  // --- Props pour la Variante 2 ---
  card_image: {
    type: Object, // Attendu: { '1x': 'url', '2x': 'url' }
  },
  title3: {
    type: String,
  },
  description3: {
    type: String,
  },

  // --- Props pour la Variante 3 ---
  title4: {
    type: String,
  },
  description4: {
    type: String,
  },
  title5: {
    type: String,
  },
  description5: {
    type: String,
  },

  // --- Props pour la Variante 4 ---
  title6: {
    type: String,
  },
  description6: {
    type: String,
  },
  roundImage: {
    type: Object, // Attendu: { '1x': 'url', '2x': 'url' }
  },
});

// Classes CSS dynamiques pour le conteneur principal
const containerClass = computed(() => [
  "benefits-card-container",
  `variant-${props.variant}`, // Ajoute .variant-1, .variant-2, etc.
]);

// Styles en ligne pour les images de fond
const card1Style = computed(() => {
  if (!props.card_image || !props.card_image["1x"]) {
    return {};
  }
  // Utilise image-set pour les images responsives, comme dans Frame.vue
  return {
    backgroundImage: `-webkit-image-set(
      url(${props.card_image["1x"]}) 1x,
      url(${props.card_image["2x"]}) 2x
    )`,
    backgroundImage: `image-set(
      url(${props.card_image["1x"]}) 1x,
      url(${props.card_image["2x"]}) 2x
    )`,
  };
});

const roundImageStyle = computed(() => {
  if (!props.roundImage || !props.roundImage["1x"]) {
    return {};
  }
  // Utilise image-set pour les images responsives, comme dans Frame.vue
  return {
    backgroundImage: `-webkit-image-set(
      url(${props.roundImage["1x"]}) 1x,
      url(${props.roundImage["2x"]}) 2x
    )`,
    backgroundImage: `image-set(
      url(${props.roundImage["1x"]}) 1x,
      url(${props.roundImage["2x"]}) 2x
    )`,
  };
});
</script>

<template>
  <div :class="containerClass">
    <div class="benefit-card" :style="card1Style">
      <!-- Contenu pour Variante 1 -->
      <template v-if="variant === 1">
        <h3>{{ title1 }}</h3>
        <p>{{ description1 }}</p>
      </template>
      <!-- Contenu pour Variante 3 -->
      <template v-if="variant === 3">
        <h3>{{ title5 }}</h3>
        <p>{{ description5 }}</p>
      </template>
      <!-- Contenu pour Variante 4 -->
      <template v-if="variant === 4">
        <h3>{{ title6 }}</h3>
        <p>{{ description6 }}</p>
      </template>
    </div>

    <!-- Le bloc de texte n'est pas affiché pour la variante 4 -->
    <div v-if="variant !== 4" class="benefit-texts">
      <!-- Contenu pour Variante 1 -->
      <template v-if="variant === 1">
        <h3>{{ title2 }}</h3>
        <p>{{ description2 }}</p>
      </template>
      <!-- Contenu pour Variante 2 -->
      <template v-if="variant === 2">
        <h3>{{ title3 }}</h3>
        <p>{{ description3 }}</p>
      </template>
      <!-- Contenu pour Variante 3 -->
      <template v-if="variant === 3">
        <h3>{{ title4 }}</h3>
        <p>{{ description4 }}</p>
      </template>
    </div>

    <!-- La div ronde est affichée UNIQUEMENT pour la variante 4 -->
    <div
      v-if="variant === 4"
      class="round-image"
      :style="roundImageStyle"
    ></div>
  </div>
</template>

<style lang="stylus" scoped>
@import "../../../../stylesheets/variables.styl"

// ==========================================================================
// STYLES DE BASE
// Ces styles s'appliquent à toutes les variantes du composant.
// ==========================================================================

// Conteneur principal qui englobe les deux blocs de la carte.
.benefits-card-container
    display flex
    flex-direction column
    justify-content space-between

    // Style de base pour tous les titres h3 dans ce composant.
    h3
        font h3Size syne

// Styles communs aux blocs internes (.benefit-card, .benefit-texts, .round-image).
// C'est la base sur laquelle les variantes ajoutent leurs spécificités.
.benefit-card, .benefit-texts, .round-image
    display flex
    flex-direction column
    align-items center
    justify-content center
    padding 64px 50px
    gap 40px
    background-size cover
    background-position center

// Styles communs pour les textes (titres et paragraphes) à l'intérieur des blocs.
.benefit-card h3, .benefit-card p, .benefit-texts h3, .benefit-texts p
    width 294px
    text-align start

// ==========================================================================
// STYLES DES VARIANTES
// Chaque classe .variant-X surcharge les styles de base pour créer une
// apparence unique, comme défini dans les props du composant.
// ==========================================================================

// --- Variante 1 : Deux blocs de texte simples. ---
.variant-1
    .benefit-card
        padding 140px 50px
        align-items flex-start
        background-color secondaryGreen
        border-radius 240px
    .benefit-texts
        padding 64px 50px
        background-color transparent
        border-radius 24px

// --- Variante 2 : Un bloc image (sans texte) en haut, un bloc texte en bas. ---
.variant-2
    .benefit-card // Ce bloc reçoit l'image de fond via les props.
        width 394px
        height 546px
        border-radius 240px
        // Le texte est masqué car ce bloc ne sert qu'à afficher l'image.
        h3, p
            display none
    .benefit-texts
        padding 64px 50px
        background-color transparent
        border-radius 24px

// --- Variante 3 : Ordre des blocs inversé et couleurs personnalisées. ---
.variant-3
    flex-direction column-reverse // Le .benefit-texts passe avant le .benefit-card.
    .benefit-card
        padding 140px 50px
        align-items flex-start
        border-radius 240px
        background-color primaryGreen
        h3
            color secondaryGreen
        p
            color white
    .benefit-texts
        padding 64px 50px
        background-color transparent
        border-radius 24px

// --- Variante 4 : Un bloc texte en haut, une image ronde en bas. ---
.variant-4
    .benefit-card
        width 394px
        height 546px
        padding 140px 50px
        align-items flex-start
        border-radius 240px
        background-color backgroundLight
        h3, p
            color primaryGreen
    .round-image // Remplace le .benefit-texts.
        border-radius 50%
        height 394px
        width 394px
        padding 0
        align-self center
</style>
