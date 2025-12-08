<script setup>
useHead({
  title: 'MIRTE - an Inspiring Robot for Technology Education',
  meta: [
    {
      name: 'description',
      content: 'Homepage of the MIRTE educational robot. The robot that will inspire you to learn about robotics and technology from primary school up to PhD level'
    }
  ]
})

import { useLocalePath } from '#i18n'
const localePath = useLocalePath()

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('/images/selection/Techniek_Atelier-Foto_Sander_Foederer_SFG6293-2-2.jpg', {format: 'webp'})
  return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${imgUrl}')` }
})


const backgroundStyles2 = computed(() => {
  const imgUrl2 = img('/images/lijn.png')
  return { backgroundImage: `url('${imgUrl2}')` }
})

</script>


<template>

<div class="hero" :style="backgroundStyles2">

  
    

    <section class='hero-section' :style="backgroundStyles">
        
        <h1>{{ $t("home.title") }}</h1>
        <p>{{ $t("home.home") }}</p>
        <NuxtLink :to="{ path: '/education/primary' }" ><button class="btn my-button">{{ $t("navbar.primary") }}</button></NuxtLink>
        <NuxtLink :to="{ path: '/education/secondary' }" ><button class="btn my-button">{{ $t("navbar.secondary") }}</button></NuxtLink>
        <NuxtLink :to="{ path: '/education/higher' }" ><button class="btn my-button">{{ $t("navbar.higher") }}</button></NuxtLink>
    </section>

    <div class="container">

    <section class="section">
        <h2>{{ $t("navbar.why") }} MIRTE?</h2>
        <div class="two-column">
            <div class="column-text">
                <p>{{ $t("home.mission_text_1") }}</p>
                <p v-html="$t('home.mission_text_2', {strongStart: '<strong>',strongEnd: '</strong>'})"></p>
                <NuxtLink :to="{ path: '/why' }" ><button class="btn my-button">{{ $t("home.read_more_why") }}</button></NuxtLink>
              </div>
            <div class="column-pillars">



          <div class="pillar pillar-card text-center">
            <div class="icon-bg">
              <ClientOnly><FontAwesomeIcon icon="puzzle-piece" /></ClientOnly>
            </div>
            <div class="card-body position-relative">
              <div class="h4 mirte card-title fw-bold">{{ $t('about.why.modular') }}</div>
              <p class="card-text">
                {{ $t('home.modular_text') }}
              </p>
            </div>
          </div>

          <div class="pillar pillar-card text-center">
            <div class="icon-bg">
              <ClientOnly><FontAwesomeIcon icon="lock-open" /></ClientOnly>
            </div>
            <div class="card-body position-relative">
              <div class="h4 mirte card-title fw-bold">{{ $t('about.why.open') }}</div>
              <p class="card-text">
                {{ $t('home.open_text') }}
              </p>
            </div>
          </div>
        
       
          <div class="pillar pillar-card text-center">
            <div class="icon-bg">
              <ClientOnly><FontAwesomeIcon icon="sack-dollar" /></ClientOnly>
            </div>
            <div class="card-body position-relative">
              <div class="h4 mirte card-title fw-bold">{{ $t('about.why.affordable') }}</div>
              <p class="card-text">
                {{ $t('home.affordable_text') }}
              </p>
            </div>
          </div>
        


            </div>
        </div>
    </section>


    <section class="section">
        <h2>{{ $t("home.for_who") }}</h2>
        <div class="two-column">

           <div class="column-text video-container">
             <video controls autoplay muted playsinline src="https://media.mirte.org/video/Tu-Delft-NUVO-Robotica-web-kwaliteit-1.mp4"></video>
           </div>

            <div class="column-text">
                <p>{{ $t("home.for_who_text_1") }}</p>
                <p>{{ $t("home.for_who_text_2") }}</p>
                <NuxtLink :to="{ path: '/why' }" ><button class="btn my-button">{{ $t("home.read_more_for") }}</button></NuxtLink>
            </div>
        </div>
    </section>

    <section class="section">
        <h2>{{ $t("home.getting_started") }}</h2>

        <div  class="d-flex">
             <div class="row">

            <div class="col-md-4 col-xs-12 mb-1" >
              <div style="text-align: center; margin-top: 20px;">
                <NuxtLink :to="localePath({ path: '/education/all'})" ><button class="btn my-button"><div class="h5 mirte">1. {{ $t("home.choose_your_mirte") }}</div></button></NuxtLink>
              </div>
            </div>


            <div class="col-md-4 col-xs-12 mb-1" >
              <div style="text-align: center; margin-top: 20px;">
                <NuxtLink to="https://workshops.mirte.org"><button class="btn my-button"><div class="h5 mirte">2. {{ $t("home.start_learning") }}</div></button></NuxtLink>
              </div>
            </div>


             <div class="col-md-4 col-xs-12 mb-1" >
              <div style="text-align: center; margin-top: 20px;">
                <NuxtLink :to="localePath({ path: '/meet' })" ><button class="btn my-button"><div class="h5 mirte">3. {{ $t("home.do_workshop") }}</div></button></NuxtLink>
              </div>
            </div>
</div>
        </div>

    </section>



  </div>

</div>


</template>
