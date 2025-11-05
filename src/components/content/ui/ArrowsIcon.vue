<!-- ArrowIcon.vue -->
<script setup>
import RightArrowIcon from "../specific/arrows/RightArrowIcon.vue";
import LeftArrowIcon from "../specific/arrows/LeftArrowIcon.vue";
import UpArrowIcon from "../specific/arrows/UpArrowIcon.vue";
import DownArrowIcon from "../specific/arrows/DownArrowIcon.vue";

// Définition de la prop "direction"
// - C’est une chaîne de caractères ("right", "left", "up", "down")
// - Valeur par défaut : "right"
// - validator : permet de bloquer les valeurs invalides (ex: "diagonal" ne sera pas accepté)
const props = defineProps({
  direction: {
    type: String,
    default: "right",
    validator: (val) => ["right", "left", "up", "down"].includes(val),
  },
});

// On fait un mapping (un objet associatif) entre le nom de la direction et le composant à utiliser
// Exemple : "right" → RightArrowIcon, "up" → UpArrowIcon
const iconsMap = {
  right: RightArrowIcon,
  left: LeftArrowIcon,
  up: UpArrowIcon,
  down: DownArrowIcon,
};
</script>

<template>
  <component :is="iconsMap[props.direction]" />
</template>
