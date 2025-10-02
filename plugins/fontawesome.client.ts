import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import the icons you need
import { faLocationDot, faCalendarDays, faGlobe, faRobot, faArrowUpRightFromSquare, faLockOpen, faCubesStacked, faDollarSign, faPuzzlePiece, faSackDollar } from '@fortawesome/free-solid-svg-icons'

library.add(faLocationDot, faGlobe, faCalendarDays, faRobot, faArrowUpRightFromSquare, faLockOpen, faCubesStacked, faDollarSign, faPuzzlePiece, faSackDollar)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})