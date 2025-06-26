<!-- pages/hardware.vue -->
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'nuxt/app'

const route = useRoute()
const router = useRouter()
let robot = computed(() => route.query.robot)
const robots = ['lite', 'basic', 'pioneer', 'master'];

onMounted(() => {
  const carouselEl = document.getElementById('carouselExampleDark');
 
  // Listen for slide change event
  const onSlide = (event) => {
    const index = event.to
    let newRobot = robots[index]
    router.replace({ query: { ...route.query, robot: newRobot } })
  }

  carouselEl.addEventListener('slid.bs.carousel', onSlide)

  onBeforeUnmount(() => {
    carouselEl.removeEventListener('slid.bs.carousel', onSlide)
  })
})
</script>

<template>
  <div style="height: 70vh;">
    <div id="carouselExampleDark" class="carousel carousel-dark slide d-flex flex-row h-100" data-bs-interval="false" data-bs-wrap="false">
      <MyComponent robot="lite" :active="robot === 'lite'"/>
      <MyComponent robot="basic" :active="robot === 'basic'"/>
      <MyComponent robot="pioneer" :active="robot === 'pioneer'"/>
      <!--<MyComponent robot="master" :active="robot === 'master'"/>-->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
    </div>
  </div>


</template>