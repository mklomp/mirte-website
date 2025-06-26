<!-- components/MyComponent.vue -->
<script setup>
defineProps({
  robot: String,
  active: Boolean
});

import imgLite from '@/assets/images/MIRTE_lite_obstacle_sensor_transparant.png'
import imgBasic from '@/assets/images/MIRTE_basic_transparant.png'
import imgPioneer from '@/assets/images/MIRTE_pioneer_transparant.png'

const image = {
  lite: imgLite,
  basic: imgBasic,
  pioneer: imgPioneer
}


</script>

<template>
  <div class="carousel-item" :class="active ? 'active' : ''">

    <div class="d-flex flex-column h-100" style="text-align: center;">
      <div style="flex-grow: 1;" class="img-wrap">
        <img :src="image[robot]" alt="MIRTE {{ robot }}">
      </div>
      <div>
        <h5>MIRTE {{ robot.charAt(0).toUpperCase() + robot.slice(1) }}</h5>
        <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t(`robots.${robot}`) }}</p>
        <NuxtLink :to="{ path: '/steps', query: { robot:  robot } }" ><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> <b>{{robot}}</b>!</button></NuxtLink>
      </div>
    </div> 
  </div>


</template>