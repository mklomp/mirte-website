<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({ 
  title: `${t('navbar.meet')} – MIRTE`,
  meta: [
    {
      name: 'description',
      content: 'An overview of all the event the MIRTE robots are and were present including recurring workshops.'
    }
  ]
})

// Sample data
const recurring = [
  { title: 'TechniekStudio - TU Delft Science Centre', location: 'Delft', language: 'NL', robot: 'Pioneer', recurrenceKey: 'meet.weekends', link: 'https://www.tudelft.nl/sciencecentre/ontdek/techniekstudio' },
  { title: 'Khaldon Araffa', location: 'Netherlands', language: 'EN/AR/UK', robot: 'Pioneer', recurrenceKey: 'meet.onrequest', link: 'https://khaldon-araffa.com/en/robotics-workshop' },
  { title: 'Pre-university Program - TU Delft', location: 'Delft', language: 'NL', robot: 'Pioneer', recurrenceKey: 'meet.annual', link: 'https://www.tudelft.nl/onderwijs/studievoorlichting/voorlichting-bachelor/tu-delft-pre-university-programme/pre-university-on-campus-tracks/robotica-voor-iedereen-bouw-en-programmeer-jouw-eigen-robot' },
  { title: 'NUVO', location: 'Tussen Amsterdam-Den Haag-Rotterdam', language: 'NL/EN', robot: 'Lite/Pioneer', recurrenceKey: 'meet.onrequest', link: 'https://www.de-nuvo.nl/' },
  { title: 'MIRTE lite workshop - TU Delft Science Centre', location: 'Delft', language: 'NL', robot: 'Lite', recurrenceKey: 'meet.onrequest', link: 'https://www.tudelft.nl/sciencecentre/educatie/groep-7-en-8/mirte-lite'}, 
]

const events = [
  { title: 'Highlight Delft', location: 'Delft, NL', startDate: '2026-02-11', endDate: '2026-02-14', link: 'https://www.highlightdelft.nl/' },
  { title: 'Learning Impact Europe 2025', location: 'Delft, NL', startDate: '2025-09-22', link: 'https://web.cvent.com/event/7830f843-2700-4a13-93a4-1e379e88763d/summary' },
  { title: 'SEFI 2025', location: 'Tampere, FI', startDate: '2025-09-16', link: 'https://www.sefi2025.eu/programme/' },
  { title: 'ROSCon UK 2025', location: 'Edinburgh, UK', startDate: '2025-09-16', link: 'https://ros2edu.github.io/' },
  { title: 'NUVO Summerskills 2025', location: 'Delft/Amsterdam, NL', startDate: '2025-07-14', endDate: '2025-08-08', link: 'https://www.de-nuvo.nl/zomerskills/' },
  { title: 'SEFI 2024', location: 'Lausanne, CH', startDate: '2024-09-04', link: 'https://sefi2024.eu/conference/program/' },
  { title: 'ACM SIGSOFT Summer School for Software Engineering in Robotics 2025', location: 'Delft, NL', startDate: '2025-07-30', endDate: '2025-08-04', link: 'https://scivenia.com/en/event/acm-sigsoft-summer-school-for-software-engineering-in-robotic' },
  { title: 'SURF Onderwijsdagen 2024', location: 'Den Haag, NL', startDate: '2024-11-12', link: 'https://pretalx.surf.nl/surf-onderwijsdagen-2024/schedule/' },
  { title: 'Science Festival RoboCup 2024', location: 'Eindhoven, NL', startDate: '2024-07-17', endDate: '2024-07-21', link: 'https://2024.robocup.org/index.html' },
  { title: 'RoboCupJunior WEROB 2024', location: 'Eindhoven, UK', startDate: '2024-07-22', link: 'https://junior.robocup.org/rcj-werob/' },
  { title: 'Delft MakerFaire 2025', location: 'Delft, NL', startDate: '2025-05-09'},
  { title: 'Delft MakerFaire 2022', location: 'Delft, NL', startDate: '2022-06-04', endDate: '2022-06-05'},
  { title: 'NK RoboCupJunior 2025', location: 'Delft, NL', startDate: '2025-05-09'},
  { title: 'TU Delft Education Day 2024', location: 'Delft, NL', startDate: '2024-11-07', link: 'https://www.tudelft.nl/teachingacademy/events/education-day/tu-delft-education-day-2024'},
  { title: 'Techniek Tastbaar 2024', location: 'Zoetermeer, NL', startDate: '2024-10-25'},
  { title: 'Techniek Tastbaar 2025', location: 'Zoetermeer, NL', startDate: '2025-10-17'},
  { title: 'Dutch Innovation Factory - MBO', location: 'Zoetermeer, NL', startDate: '2023-04-21', link: 'https://dutchinnovationpark.nl/nl/overzicht/evenementenpagina/mborijnland-tudelft-robot-mirte/'},

]

const today = new Date()
const userLocale = typeof navigator !== 'undefined' ? navigator.language : 'en-US'

function parseISODateAsUTC(dateStr) {
  // Split YYYY-MM-DD
  const [year, month, day] = dateStr.split('-').map(Number)
  // Month is 0-indexed in JS Date
  return new Date(Date.UTC(year, month - 1, day))
}

// Computed property to add status and sort by startDate
const eventsWithStatus = computed(() => {
  return events
    .map(e => {
      const start = new Date(parseISODateAsUTC(e.startDate))
      const end = e.endDate ? new Date(parseISODateAsUTC(e.endDate)) : start
      return {
        ...e,
        isPast: end < today,
        startDateObj: start,
        endDateObj: end
      }
    })
    .sort((a, b) => b.startDateObj - a.startDateObj) // sort ascending by start date
})

</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="row g-3">
        <h2 class="text-lg font-bold mb-2">{{ $t("meet.workshops") }}</h2>
        <!-- Recurring workshops -->
        <div>{{ $t("meet.workshops_text") }}</div>
        <div class="col-12 col-md-6" v-for="(item, i) in recurring" :key="'rec-' + i">
          <a :href="item.link" target="_blank" class="card text-decoration-none h-100 bg-light text-dark opacity-100">
            <div class="card-body text-dark">
              <div class="card-title h5">{{ item.title }}</div>
              <p class="card-text">
                <ClientOnly><FontAwesomeIcon icon="location-dot" class="icon-color" /></ClientOnly> {{ item.location }} 
                <ClientOnly><FontAwesomeIcon icon="globe" class="icon-color"/></ClientOnly> {{ item.language }}
                <ClientOnly><FontAwesomeIcon icon="robot" class="icon-color"/></ClientOnly> {{ item.robot }}
                <ClientOnly><FontAwesomeIcon icon="calendar-days" class="icon-color"/></ClientOnly> {{ $t(item.recurrenceKey) }}
              </p>
            </div>
          </a>
        </div>

        <!-- Events -->
        <h2 class="text-lg font-bold mb-2">{{ $t("meet.events") }}</h2>
        <div>{{ $t("meet.events_text") }}</div>
        <div class="col-12 col-md-6" v-for="(item, i) in eventsWithStatus" :key="'evt-' + i">
          <component
            :is="item.link ? 'a' : 'div'"
            :href="item.link || undefined"
            target="_blank"
            class="card text-decoration-none h-100 bg-light text-dark opacity-100"
            :class="item.isPast ? 'bg-light text-dark opacity-75 bg-opacity-50' : 'bg-light text-dark opacity-100'"
          >
            <div class="card-body">
              <div class="card-title h5">{{ item.title }}</div>
              <p class="card-text">
                <ClientOnly>
                  {{ new Date(item.startDateObj).toLocaleDateString(userLocale, { day: 'numeric', month: 'short', year: 'numeric' }) }}
  <span v-if="item.endDate"> - {{ new Date(item.endDateObj).toLocaleDateString(userLocale, { day: 'numeric', month: 'short', year: 'numeric' }) }}</span>
                </ClientOnly>
              </p>
            </div>
          </component>
        </div> 

      </div>
    </div>
  </div>
</template>
