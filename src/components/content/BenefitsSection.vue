<script setup>
import Heading from "./Heading.vue";
import { Data } from "../../scripts/datas";

import BenefitsCard from "./benefits/BenefitsCard.vue";

// Raccourci pour un accès plus propre aux données dans le template
const content = Data.content.main.sections.benefits.content;
</script>

<template>
  <div class="benefits-container">
    <Heading
      :title="Data.content.main.sections.benefits.title"
      :sub-title="Data.content.main.sections.benefits.subtitle"
    />

    <div class="benefits-cards-container">
      <!-- Carte 1 : Deux blocs de texte simples. -->
      <BenefitsCard
        :variant="1"
        :title1="content.benefit1.title"
        :description1="content.benefit1.description"
        :title2="content.benefit2.title"
        :description2="content.benefit2.description"
      />

      <!-- Carte 2 : Image en fond et un bloc de texte. -->
      <BenefitsCard
        :variant="2"
        :card_image="{
          '1x': content.images.groceryBag,
          '2x': content.images.groceryBag2x,
        }"
        :title3="content.benefit3.title"
        :description3="content.benefit3.description"
      />

      <!-- Carte 3 : Ordre inversé et couleurs personnalisées. -->
      <BenefitsCard
        :variant="3"
        :title4="content.benefit4.title"
        :description4="content.benefit4.description"
        :title5="content.benefit5.title"
        :description5="content.benefit5.description"
      />

      <!-- Carte 4 : Un bloc de texte et une image ronde. -->
      <BenefitsCard
        :variant="4"
        :title6="content.benefit6.title"
        :description6="content.benefit6.description"
        :roundImage="{
          '1x': content.images.vegetablesBag,
          '2x': content.images.vegetablesBag2x,
        }"
      />
    </div>
  </div>
</template>

<style lang="stylus">
@import "../../stylesheets/variables.styl"

.benefits-container
    display flex
    flex-direction column
    align-items flex-start
    gap 100px
    margin-top 183px
    margin-bottom 220px

    .heading
        padding 0

.benefits-cards-container
    display inline-flex
    gap 21px
</style>
