<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import { useRoute, useRouter } from 'nuxt/app'
import MyComponent from '~/components/MyComponent.vue' // adjust path

const router = useRouter()
const route = useRoute()

const robots = ['lite', 'basic', 'pioneer', 'master']

const robot = ref(route.params.robot || 'lite')

const isMounted = ref(false)

definePageMeta({
    key: route => 'robots-page'
}),

// Sync robot when the URL changes
watch(
  () => route.params.robot,
  (newVal) => {
    robot.value = newVal
    activateCarouselSlide()
  }
)

const robotName = computed(() => {
  if (!robot.value) return ''
  return robot.value.charAt(0).toUpperCase() + robot.value.slice(1)
})

useHead({
  title: `MIRTE ${robotName.value}`,
  meta: [
    {
      name: 'description',
      content: `Details for the MIRTE ${robotName.value} robot.`
    }
  ]
})

let carouselEl = null
let carouselInstance = null

onMounted(() => {
  isMounted.value = true

  // Wait for DOM to render
  setTimeout(() => {
    carouselEl = document.getElementById('carouselExampleDark')

    if (!carouselEl) return

    // Build Bootstrap Carousel instance
    carouselInstance = bootstrap.Carousel.getOrCreateInstance(carouselEl, {
      interval: false,
      wrap: false,
    })

    // Set initial slide based on the URL
    activateCarouselSlide()

    // Listen to slide changes
    carouselEl.addEventListener('slid.bs.carousel', onSlide)
  })
})

// Clean up event listener
onBeforeUnmount(() => {
  if (carouselEl) {
    carouselEl.removeEventListener('slid.bs.carousel', onSlide)
  }
})

function onSlide(event) {
  const index = event.to
  const newRobot = robots[index]

  if (newRobot && newRobot !== robot.value) {
    router.replace(`/robots/${newRobot}`)
  }
}

function activateCarouselSlide() {
  if (!carouselInstance) return

  const index = robots.indexOf(robot.value)
  if (index >= 0) {
    carouselInstance.to(index)
  }
}
</script>

<template>
  <div style="height: 70vh;">
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide d-flex flex-row h-100"
      data-bs-interval="false"
      data-bs-wrap="false"
    >
      <!-- Render only after hydration -->
      <div v-if="isMounted" class="carousel-inner h-100 d-flex">

        <div class="carousel-item" :class="{ active: robot === 'lite' }">
          <MyComponent robot="lite" />
        </div>

        <div class="carousel-item" :class="{ active: robot === 'basic' }">
          <MyComponent robot="basic" />
        </div>

        <div class="carousel-item" :class="{ active: robot === 'pioneer' }">
          <MyComponent robot="pioneer" />
        </div>

        <div class="carousel-item" :class="{ active: robot === 'master' }">
          <MyComponent robot="master" />
        </div>

      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button"
              data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button"
              data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
