<script setup>
import { onMounted } from 'vue'

// Automatically import all .jpg files from the mission folder
const images = import.meta.glob('@/assets/images/photo_selection/*.jpg', { eager: true, import: 'default' })

// Convert object to array, sort by filename for consistency
const carouselImages = Object.keys(images)
  .sort()
  .map((key, i) => ({
    src: images[key],
    title: `Slide ${i + 1}`,
    desc: `Description for slide ${i + 1}`
  }))

onMounted(() => {
  const el = document.getElementById('missionCarousel')
  if (el && window.bootstrap) {
    new window.bootstrap.Carousel(el, {
      interval: 3000,
      ride: 'carousel'
    })
  }
})
</script>

<template>
  <div class="container py-5">

    <!-- Mission Section -->
    <section class="text-center mb-5">
      <div class="row align-items-center">
        <!-- Text side -->
        <div class="col-md-6 mb-4 mb-md-0">
          <h1 class="mb-3">MIRTE{{ $t('about.why.mission') }}</h1>
          <p class="lead" v-html="$t('about.why.mission_text', {strongStart: '<strong>',strongEnd: '</strong>'})"></p>
        </div>

        <!-- Dynamic Carousel side -->
        <div class="col-md-6">
          <div id="missionCarousel" class="carousel slide">
            <div class="carousel-inner">
              <div 
                v-for="(img, i) in carouselImages" 
                :key="i" 
                :class="['carousel-item', i === 0 ? 'active' : '']"
              >
                <img :src="img.src" class="d-block w-100 rounded shadow" :alt="img.title">
     <!--           <div class="carousel-caption d-none d-md-block">
                  <h5>{{ img.title }}</h5>
                  <p>{{ img.desc }}</p> 
                </div>-->
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#missionCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#missionCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Three Pillars Section -->
    <section class="mb-5">
      <h1 class="mb-4 text-center fw-bold">MIRTE{{ $t('about.why.pillars') }}</h1>
      <div class="row g-4">
        
        <!-- Open -->
        <div class="col-md-4">
          <div class="card h-100 pillar-card text-center">
            <div class="icon-bg">
              <ClientOnly><FontAwesomeIcon icon="lock-open" /></ClientOnly>
            </div>
            <div class="card-body position-relative">
              <h4 class="card-title fw-bold">{{ $t('about.why.open') }}</h4>
              <p class="card-text">
                {{ $t('about.why.open_text') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Modular -->
        <div class="col-md-4">
          <div class="card h-100 pillar-card text-center">
            <div class="icon-bg">
              <ClientOnly><FontAwesomeIcon icon="puzzle-piece" /></ClientOnly>
            </div>
            <div class="card-body position-relative">
              <h4 class="card-title fw-bold">{{ $t('about.why.modular') }}</h4>
              <p class="card-text">
                {{ $t('about.why.modular_text') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Affordable -->
        <div class="col-md-4">
          <div class="card h-100 pillar-card text-center">
            <div class="icon-bg">
              <ClientOnly><FontAwesomeIcon icon="sack-dollar" /></ClientOnly>
            </div>
            <div class="card-body position-relative">
              <h4 class="card-title fw-bold">{{ $t('about.why.affordable') }}</h4>
              <p class="card-text">
                {{ $t('about.why.affordable_text') }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Layered Modular Approach Section -->
    <section class="mb-5">
      <div class="row align-items-center">
        <!-- SVG Image side -->
        <div class="col-md-6 mb-4 mb-md-0">
          <MIRTE_complexity interactive="false"/>
        </div>

        <!-- Text side -->
        <div class="col-md-6">
          <h1 class="mb-3 text-center">{{ $t('about.why.layered_modular_design') }}</h1>
          <p>
            {{ $t('about.why.layered_modular_design_text') }}
          </p>
        </div>
      </div>
    </section>

  </div>
</template>