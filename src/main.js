// Importation de la fonction pour créer l'app Vue et du composant racine
import { createApp } from 'vue'
import App from '@/App.vue'

// Importation des styles globaux Stylus pour toute l'application
import '@/stylesheets/App.styl'

// Importation de Font Awesome et des icônes utilisées
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'

// Ajout des icônes à la bibliothèque Font Awesome
library.add(faUser, faCoffee)

// Création de l'application Vue
const app = createApp(App)

// Déclaration globale du composant FontAwesomeIcon pour l'utiliser partout
app.component('fontAwesomeIcon', FontAwesomeIcon)

// Montage de l'application sur l'élément #app du HTML
app.mount('#app')
