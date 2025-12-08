<script setup>
defineProps({
  robot: String,
  level: String
});

import { useLocalePath } from '#i18n'
const localePath = useLocalePath()

const image = {
  lite: '/images/MIRTE_lite_obstacle_sensor_transparant.png',
  basic: '/images/MIRTE_basic_transparant.png',
  pioneer: '/images/MIRTE_pioneer_transparant.png',
  master: '/images/MIRTEMasterCloseUp.png'
}

</script>

<template>

  <div class="d-flex flex-column h-100" style="text-align: center;">
    <div>
      <div class="h5 mirte">MIRTE {{ robot.charAt(0).toUpperCase() + robot.slice(1) }}</div>
      <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t('robots.' + robot) }}</p>
      <NuxtLink v-if="robot !== 'master'" :to="localePath({ path: '/start/' + robot,  query: { level:  level } })" ><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> <b>{{  robot.charAt(0).toUpperCase() + robot.slice(1) }}</b>!</button></NuxtLink>
      <a v-if="robot === 'master'" href="https://docs.mirte.org/develop/doc/robots/mirte_master/index.html" target="_blank" rel="noopener noreferrer"><button class="btn my-button"><span class="mirte">MIRTE</span> <b>Master</b> docs</button></a>
    </div>
    <NuxtImg
      :src="image[robot]"
      :alt="'MIRTE ' +  robot.charAt(0).toUpperCase() + robot.slice(1)"
      format="webp"
      :width="[194, 384, 768, 1024]" 
      height="auto"                                     
      style="width: 50%; display: block; margin-left: auto; margin-right: auto;"
    />
  </div>

</template>