<script setup>
// On importe uniquement 'Data' qui centralise tout le contenu.
import { Data } from "../../scripts/datas.js";
import Heading from "./Heading.vue";
import Frame from "./Frame.vue";

// On crée un alias pour les images pour garder le template fonctionnel sans le modifier.
const Images = {
  main: {
    needAssistance: Data.content.main.sections.needAssistance.content.images,
  },
};
</script>

<template>
  <div class="assistance-container">
    <Heading
      :title="Data.content.main.sections.needAssistance.title"
      :sub-title="Data.content.main.sections.needAssistance.subtitle"
    />
    <Frame
      :frame-image="Images.main.needAssistance.assistance"
      :frame-image2x="Images.main.needAssistance.assistance2x"
      :description="
        Data.content.main.sections.needAssistance.content.description
      "
    />
  </div>
</template>

<style lang="stylus">
@import "../../stylesheets/variables.styl"

.assistance-container
    align-self flex-end
    display flex
    flex-direction column
    gap 90px
    margin-top 200px
    margin-bottom 200px


    .frame-container
        gap 75px

        .frame

            .frame-picture
                cursor unset

                .player-img
                    display none

        .side-frame
            display: flex
            flex-direction: column
            align-items flex-start
            gap 50px

            .frame-description
                width 466px
                font h3Size workSans
                font-weight 400
                text-align start

            .btn
                display: block
                align-self flex-start


.heading
    padding 0 70px
</style>
