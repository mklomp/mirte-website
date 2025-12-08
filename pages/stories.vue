<template>
  <div class="page-wrapper">
    <!-- Header -->
    <div class="page-header py-3">
      <div class="row">
        <div class="col-6 text-center h4 mirte">
          Media
          <!-- <small class="text-muted">cite as: mirte.org</small> -->
        </div>
        <div class="col-6 text-center h4 mirte">
          Publications
          <!-- <small class="text-muted">cite as: doi.org/10.5281/zenodo.14256821</small> -->
        </div>
      </div>
    </div>

    <!-- Scrollable content -->
    <div class="page-content">
      <div class="container py-5 position-relative">
        <!-- Central vertical line -->
        <div class="timeline-line"></div>

        <!-- Timeline rows -->
        <div
          v-for="(row, rowIndex) in timelineRows"
          :key="rowIndex"
          class="timeline-row"
        >
          <!-- Dot per row -->
          <div class="timeline-dot"></div>

          <!-- Left column (media) -->
          <div class="timeline-col timeline-left">
            <div
              v-for="(item, i) in row.media"
              :key="'m'+i"
              class="timeline-item"
            >
              <a
                :href="item.link"
                target="_blank"
                class="timeline-content timeline-link"
              >
                <div class="h5 mirte">{{ item.title }}</div>
                <small class="text-muted">{{ formatDate(item.date) }}</small>
                <p>{{ item.description }}</p>
              </a>
            </div>
          </div>

          <!-- Right column (publications) -->
          <div class="timeline-col timeline-right">
            <div
              v-for="(item, i) in row.publications"
              :key="'p'+i"
              class="timeline-item"
            >
              <a
                :href="item.link"
                target="_blank"
                class="timeline-content timeline-link"
              >
                <div class="h5 mirte">{{ item.title }}</div>
                <small class="text-muted">{{ formatDate(item.date) }}</small>
                <p>{{ item.description }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({ 
  title: `${t('navbar.stories')} – MIRTE`,
  meta: [
    {
      name: 'description',
      content: 'A list of all media coverage and papers referencing the MIRTE robot.'
    }
  ]
})

const events = ref([
  { title: "Mag ik mij voorstellen: iamMirte", description: "Dutch Innovationpark", date: '2023-05-11', side: 'left', link: 'https://dutchinnovationpark.nl/nl/overzicht/nieuws/mag-ik-mij-voorstellen-iammirte/' },
  { title: "Mensen begrijpen", description: "Delft Matters", date: '2024-12-06', side: 'left', link: 'https://delftmatters.nl/nummer-6-december-2024/mensen-begrijpen/'},
  { title: "Een educatieve robot voor iedereen", description: "Delft business", date: '2022-12-22', side: 'left', link: 'https://delft.business/technologie/een-educatieve-robot-voor-iedereen/' },
  { title: "A family of open educational robots", description: "Open Education Projects 2024", date: '2025-03-01', side: 'left', link: 'https://www.tudelft.nl/en/open-science/oesf-projects-2024/a-family-of-open-educational-robots' },
  { title: "Studenten presenteren verbeteringen voor mest-opruim-robot", description: "ME News", date: '2024-06-17', side: 'left', link: 'https://www.tudelft.nl/2024/me/nieuws/studenten-presenteren-verbeteringen-voor-mest-opruim-robot' },
  { title: "Bètavakken saai? Niet als een TU student de lessen geeft", description: "Wijstad", date: '2024-06-14', side: 'left', link: 'https://www.tudelft.nl/2024/wijstad/betavakken-saai-niet-als-een-tu-student-de-lessen-geeft' },
  { title: "New lab develops robots that understand humans", description: "TU Delta", date: '2024-04-24', side: 'left', link: 'https://delta.tudelft.nl/en/article/new-lab-develops-robots-that-understand-humans' },
  { title: "MIRTE: an affordable, open, mobile robot education platform", description: "SEFI 2024", date: '2024-09-05', side: 'right', link: 'https://zenodo.org/records/14256821' },
  { title: "The educational robot inspiring students of all ages", description: "TUD Stories", date: '2025-10-30', side: 'left', link: 'https://www.tudelft.nl/en/stories/articles/the-educational-robot-inspiring-students-of-all-ages'}
])

const sortedEvents = computed(() =>
  [...events.value].sort((a, b) => new Date(b.date) - new Date(a.date))
)

const timelineRows = computed(() => {
  const rowsMap = {}
  sortedEvents.value.forEach(event => {
    if (!rowsMap[event.date]) rowsMap[event.date] = { media: [], publications: [] }
    if (event.side === 'left') rowsMap[event.date].media.push(event)
    else rowsMap[event.date].publications.push(event)
  })
  return Object.keys(rowsMap)
    .sort((a,b) => new Date(b) - new Date(a))
    .map(date => rowsMap[date])
})

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('nl-NL', { day: '2-digit', month: 'short', year: 'numeric' })
}
</script>

<style scoped>
/* Central vertical line */
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background-color: #f1be45;
  transform: translateX(-50%);
  z-index: 0;
}

/* Timeline rows */
.timeline-row {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 1.5rem 0; /* compact vertical spacing */
}

/* Columns */
.timeline-col {
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* smaller gap between items */
}

.timeline-left {
  align-items: flex-end;
  text-align: right;
}

.timeline-right {
  align-items: flex-start;
  text-align: left;
}

/* Item box */
.timeline-item .timeline-content {
  background: #f8f9fa;
  padding: 0.5rem 0.75rem; /* smaller padding */
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  position: relative;
  z-index: 1;
  display: block;
}

/* Text adjustments for compact layout */
.timeline-item h5 {
  margin-bottom: 0.25rem;
  font-size: 1rem;
}
.timeline-item small {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
}
.timeline-item p {
  margin-bottom: 0;
  font-size: 0.85rem;
  line-height: 1.2;
}

/* Clickable */
.timeline-link {
  display: block;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s;
}
.timeline-link:hover {
  background-color: #e9ecef;
}

/* Dot per row */
.timeline-dot {
  position: absolute;
  top: 0.75rem; /* adjusted for compact spacing */
  left: 50%;
  transform: translateX(-50%);
  width: 1rem;
  height: 1rem;
  background-color: #f1be45;
  border-radius: 50%;
  z-index: 2;
}

/* Mobile responsive */
@media (max-width: 767px) {
  .timeline-row {
    display: grid;
    grid-template-columns: 1fr 2rem 1fr;
    grid-template-areas: "left dot right";
    gap: 1rem;
    margin: 2rem 0;
    position: relative;
  }

  .timeline-row::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background-color: #f1be45;
    transform: translateX(-50%);
    z-index: 0;
  }

  .timeline-left,
  .timeline-right {
    width: 100%;
    text-align: left;
    align-items: flex-start;
  }

  .timeline-dot {
    grid-area: dot;
    justify-self: center;
    position: static;
    transform: none;
    margin: 0.5rem 0;
    z-index: 1;
  }
}
</style>
