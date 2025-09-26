import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import the icons you need
import { faLocationDot, faCalendarDays, faGlobe, faRobot, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faLocationDot, faGlobe, faCalendarDays, faRobot, faArrowUpRightFromSquare)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})