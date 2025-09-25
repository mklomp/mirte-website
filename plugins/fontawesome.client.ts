import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import the icons you need
import { faUser, faCoffee, faLocationDot, faCalendarDays, faGlobe, faRobot } from '@fortawesome/free-solid-svg-icons'

library.add(faLocationDot, faGlobe, faCalendarDays, faRobot)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})