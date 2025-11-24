<script setup>
import { computed } from 'vue'
import { useRoute } from 'nuxt/app'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({ title: `${t('navbar.start')} – MIRTE` })

const route = useRoute()
const level = computed(() => route.query.level)

</script>
  
<template>

<div class="container d-flex align-items-center">

  <div  style="text-align: center;" class="w-100" >
      <h3>{{ $t("start.select_robot") }}</h3>
      <div>{{ $t(`start.select_robot_${level}_text`) }}</div>


      <div v-if="level === 'primary' || level === 'all'" class="row">
          <div class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
            <div class="d-flex flex-column h-100" style="text-align: center;">
              <div>
                <h5>MIRTE lite</h5>
                <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.lite") }}</p>
                <NuxtLink :to="{ path: '/steps', query: { robot: 'lite', level: 'primary' } }" ><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> <b>lite</b>!</button></NuxtLink>
              </div>
              <img src="@/assets/images/MIRTE_lite_obstacle_sensor_transparant.png" style="width: 50%; margin-left: auto; margin-right: auto;" alt="MIRTE basic">
            </div>
          </div>

          <div class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
            <div class="d-flex flex-column h-100" style="text-align: center;">
              <div>
                <h5>MIRTE basic</h5>
                <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.basic") }}</p>
                <NuxtLink :to="{ path: '/steps', query: { robot: 'basic', level: 'primary' } }" ><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> <b>basic</b>!</button></NuxtLink>
              </div>
              <img src="@/assets/images/MIRTE_basic_transparant.png" style="width: 50%; margin-left: auto; margin-right: auto;" alt="MIRTE pioneer">
            </div>
          </div>
      </div>

 
      <div v-if="level === 'secondary'" class="row"  >
          <div class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
            <div class="d-flex flex-column h-100" style="text-align: center;">
              <div>
                <h5>MIRTE basic</h5>
                <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.basic") }}</p>
                <NuxtLink :to="{ path: '/steps', query: { robot: 'basic', level: 'secondary' } }" ><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> <b>basic</b>!</button></NuxtLink>
              </div>
              <img src="@/assets/images/MIRTE_basic_transparant.png" style="width: 50%; margin-left: auto; margin-right: auto;" alt="MIRTE basic">
            </div>
          </div>

          <div class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
            <div class="d-flex flex-column h-100" style="text-align: center;">
              <div>
                <h5>MIRTE pioneer</h5>
                <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.pioneer") }}</p>
                <NuxtLink :to="{ path: '/steps', query: { robot: 'pioneer', level: 'secondary' } }" ><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> <b>pioneer</b>!</button></NuxtLink>
              </div>
              <img src="@/assets/images/MIRTE_pioneer_transparant.png" style="width: 50%; margin-left: auto; margin-right: auto;" alt="MIRTE pioneer">
            </div>
          </div>
        </div>


      <div v-if="level === 'higher' || level === 'all'" class="row" >
        
          <div class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
            <div class="d-flex flex-column h-100" style="text-align: center;">
              <div>
                <h5>MIRTE pioneer</h5>
                <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.pioneer") }}</p>
                <NuxtLink :to="{ path: '/steps', query: { robot: 'pioneer', level: 'higher' } }" ><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> <b>pioneer</b>!</button></NuxtLink>
              </div>
              <img src="@/assets/images/MIRTE_pioneer_transparant.png" style="width: 50%; margin-left: auto; margin-right: auto;" alt="MIRTE basic">
            </div>
          </div>

          <div class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
            <div class="d-flex flex-column h-100" style="text-align: center;">
              <div>
                <h5>MIRTE master</h5>
                <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.master") }}</p>
                <a href="https://docs.mirte.org/develop/doc/robots/mirte_master/index.html"><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> <b>master</b>!<FontAwesomeIcon icon="arrow-up-right-from-square" /></button></a>
              </div>
              <img src="@/assets/images/MIRTEMasterCloseUp.png" style="width: 50%; margin-left: auto; margin-right: auto;" alt="MIRTE pioneer">
            </div>
          </div>
        </div>

   </div>


</div>


</template>
