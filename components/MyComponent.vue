<!-- components/MyComponent.vue -->
<script setup>
defineProps({
  robot: String
});

import { useLocalePath } from '#i18n'
const localePath = useLocalePath()

import imgLite from '~/public/images/MIRTE_lite_obstacle_sensor_transparant.png'
import imgBasic from '~/public/images/MIRTE_basic_transparant.png'
import imgPioneer from '~/public/images/MIRTE_pioneer_transparant.png'
import imgMaster from '~/public/images/MIRTEMasterCloseUp.png'

const image = {
  lite: imgLite,
  basic: imgBasic,
  pioneer: imgPioneer,
  master: imgMaster
}


</script>

<template>
    <div class="d-flex flex-column h-100" style="text-align: center;">
      <div style="flex-grow: 1;" class="img-wrap">
      <NuxtImg
        :src="image[robot]"
        alt="MIRTE {{  robot.charAt(0).toUpperCase() + robot.slice(1) }}"
        format="webp"
        :width="[194, 384, 768, 1024]" 
        height="auto" 
       /> 
      </div>
      <div>
        <div class="h5 mirte">MIRTE {{ robot.charAt(0).toUpperCase() + robot.slice(1) }}</div>
        <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t(`robots.${robot}`) }}</p>
        <NuxtLink  v-if="robot !== 'master'"  :to="localePath('/start/' + robot)" ><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> <b>{{ robot.charAt(0).toUpperCase() + robot.slice(1) }}</b>!</button></NuxtLink>
        <a v-if="robot === 'master'" href="https://docs.mirte.org/develop/doc/robots/mirte_master/index.html" target="_blank" rel="noopener noreferrer"><button class="btn my-button"><span class="mirte">MIRTE</span> <b>Master</b> docs</button></a>
      </div>
    </div> 

</template>