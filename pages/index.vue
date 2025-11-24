<script setup>
useHead({ title: 'MIRTE - an Inspiring Robot for Technology Education' })
</script>


<template>

<div class="hero">

  
    

    <section class="hero-section">
        
        <h1>{{ $t("home.title") }}</h1>
        <p>{{ $t("home.home") }}</p>
        <NuxtLink :to="{ path: '/start', query: { level: 'primary' } }" ><button class="btn my-button">{{ $t("navbar.primary") }}</button></NuxtLink>
        <NuxtLink :to="{ path: '/start', query: { level: 'secondary' } }" ><button class="btn my-button">{{ $t("navbar.secondary") }}</button></NuxtLink>
        <NuxtLink :to="{ path: '/start', query: { level: 'higher' } }" ><button class="btn my-button">{{ $t("navbar.higher") }}</button></NuxtLink>
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
              <h4 class="card-title fw-bold">{{ $t('about.why.modular') }}</h4>
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
              <h4 class="card-title fw-bold">{{ $t('about.why.open') }}</h4>
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
              <h4 class="card-title fw-bold">{{ $t('about.why.affordable') }}</h4>
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
                <NuxtLink :to="{ path: '/start', query: { level: 'all' } }" ><button class="btn my-button"><h5>1. {{ $t("home.choose_your_mirte") }}</h5></button></NuxtLink>
              </div>
            </div>


            <div class="col-md-4 col-xs-12 mb-1" >
              <div style="text-align: center; margin-top: 20px;">
                <a href="https://workshops.mirte.org"><button class="btn my-button"><h5>2. {{ $t("home.start_learning") }}</h5></button></a>
              </div>
            </div>


             <div class="col-md-4 col-xs-12 mb-1" >
              <div style="text-align: center; margin-top: 20px;">
                <NuxtLink :to="{ path: '/meet' }" ><button class="btn my-button"><h5>3. {{ $t("home.do_workshop") }}</h5></button></NuxtLink>
              </div>
            </div>
</div>
        </div>

    </section>



  </div>

</div>


</template>
