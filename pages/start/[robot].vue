<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'nuxt/app'
import { useI18n } from 'vue-i18n'

const localePath = useLocalePath()
const { t } = useI18n()
useHead({ 
  title: `${t('home.getting_started')} – MIRTE`,
  meta: [
    {
      name: 'description',
      content: 'Steps to get started with the MIRTE robots.'
    }
  ]
})

const route = useRoute()

// reactive values
const level = computed(() => route.query.level || null)
const robot = ref(route.params.robot || 'lite')

// dropdowns
const software = ref('orange_pi_zero2')
const base = ref('dxf')

// methods
function getUrl() {
  if (software.value === "orange_pi_zero2") {
    return "https://github.com/mirte-robot/mirte-sd-image-tools/releases/download/0.1.1/mirte_orangepizero2_v0.1.1.img.xz";
  } 
  if (software.value === "raspberry_pi") {
    return "https://github.com/mirte-robot/mirte-sd-image-tools/releases/download/0.1.1/mirte_rpi4b_v0.1.1.img.xz";
  } 
  if (software.value === "latest_release") {
    return "https://github.com/mirte-robot/mirte-sd-image-tools/releases/latest";
  } 
  return "https://github.com/mirte-robot/mirte-sd-image-tools/releases";
}

function getUrlDXF() {
  if (base.value === "dxf") {
    return "https://github.com/mirte-robot/mirte-frame/releases/download/0.1.0/dxfs.zip";
  } 
  if (base.value === "stl") {
    return "https://github.com/mirte-robot/mirte-frame/releases/download/0.1.0/stls.zip";
  } 
  return "https://github.com/mirte-robot/mirte-frame/releases/latest";
}
</script>


<template>
<div  class="container d-flex align-items-center">
  <div class="row" style="text-align: center;">
  <div class="h3 mirte" v-if="level !== 'higher'">{{ $t("start.getting_started_with") }} MIRTE {{ robot }}</div>
  <div class="h3 mirte" v-else>{{ $t("start.customize") }} MIRTE pioneer</div>

    <div class="col-md-3 col-xs-12 mb-1" style="padding-top: 50px;">
      <div class="h3 mirte" style="text-align: center;">1</div>
      <div class="h3 mirte" style="text-align: center;">{{ $t("start.download_frame") }}</div>

      <p style="padding-top: 20px;" v-if="level != 'higher'">{{ $t("start.download_frame_text") }}:</p>
      <p style="padding-top: 20px;" v-if="level == 'higher'">{{ $t("start.select_frame_text") }}:</p>

      <select v-if="level === 'higher'" class="form-select" v-model="base" aria-label="base_choice">
        <option value="dxf">{{ $t("start.lasercut") }}</option>
        <option value="stl">{{ $t("start.3dprint") }}</option>
        <option value="freecad">{{ $t("start.dxf_source") }}</option>
      </select>

      <div style="text-align: center; margin-top: 20px;">
        <NuxtLink class="btn btn-primary my-button" :to="getUrlDXF()"  target="_blank" rel="noopener noreferrer">{{ $t("start.download") }}</NuxtLink>
      </div>
    </div>


    <div class="col-md-3 col-xs-12 mb-1"  style="padding-top: 50px;">
       <div class="h3 mirte" style="text-align: center;">2</div>
       <div class="h3 mirte" style="text-align: center;">{{ $t("start.get_hardware") }}</div>
 
       <p v-if="level !== 'higher' && robot == 'lite'" style="padding-top: 20px;">{{ $t("start.get_hardware_lite_text") }} <NuxtLink :to="localePath({ path: '/configure', query: { robot: 'lite', selectable: false } })" >bill of materials</NuxtLink></p>
       <p v-if="level !== 'higher' && robot == 'basic'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <NuxtLink :to="localePath({ path: '/configure', query: { robot: 'basic', selectable: false } })" >bill of materials</NuxtLink></p>
       <p v-if="level !== 'higher' && robot == 'pioneer'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <NuxtLink :to="localePath({ path: '/configure', query: { robot: 'pioneer', selectable: false } })" >bill of materials</NuxtLink></p>
       <p v-if="level === 'higher'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <NuxtLink :to="localePath({ path: '/configure', query: { robot: 'pioneer' } })" >bill of materials</NuxtLink></p>
    </div>



    <div class="col-md-3 col-xs-12 mb-1"  style="padding-top: 50px;">
      <div class="h3 mirte" style="text-align: center;">3</div>
      <div class="h3 mirte" v-if="robot !== 'pioneer'" style="text-align: center;">{{ $t("start.build") }}</div>
      <div class="h3 mirte" v-else style="text-align: center;">{{ $t("start.download_software") }}</div>

      <p v-if="level == 'higher'" style="padding-top: 20px;">{{ $t("start.select_software_text") }}:</p>
      <p v-if="robot === 'pioneer' && (level === 'secondary' || level == null)" style="padding-top: 20px;">{{ $t("start.download_software_text") }}:</p>
      <p v-if="robot === 'basic'" style="padding-top: 20px;">{{ $t("start.build_robot") }} <NuxtLink to="https://surfdrive.surf.nl/files/index.php/s/KbmrAsejGg9qO6G?path=%2Fmirte_basic#/files_mediaviewer/0_step0.png" target="_blank" rel="noopener noreferrer">here</NuxtLink></p>
      <p v-if="robot === 'lite'" style="padding-top: 20px;">{{ $t("start.build_robot") }} <NuxtLink to="https://surfdrive.surf.nl/files/index.php/s/KbmrAsejGg9qO6G?path=%2Fmirte_lite#/files_mediaviewer/0_step0.png" target="_blank" rel="noopener noreferrer">here</NuxtLink></p>

      <select v-if="level === 'higher'" class="form-select" v-model="software" aria-label="software_choice">
        <option value="orange_pi_zero2" selected>Orange Pi Zero 2</option>
        <option value="raspberry_pi">Raspberry Pi 4/5</option>
        <option value="latest_release">{{ $t("start.software_source_release") }}</option>
        <option value="main">{{ $t("start.software_source_latest") }}</option>
      </select>

      <div v-if="robot === 'pioneer' || level === 'higher'" style="text-align: center; margin-top: 20px;">
        <NuxtLink class="btn btn-primary my-button" :to="getUrl()"  target="_blank" rel="noopener noreferrer">{{ $t("start.download") }}</NuxtLink>
      </div>
    </div>


    <div v-if="robot !== 'lite'" class="col-md-3 col-xs-12 mb-1"  style="padding-top: 50px;">
       <div class="h3 mirte" style="text-align: center;">4</div>
       <div class="h3 mirte" v-if="robot === 'pioneer' || level === 'higher'" style="text-align: center;">{{ $t("start.build_and_learn") }}</div>
       <div class="h3 mirte" v-if="robot === 'basic'" style="text-align: center;">{{ $t("start.program_ide") }}</div>       

       <p v-if="robot === 'basic'" style="padding-top: 20px;">{{ $t("start.program_ide_text") }} <NuxtLink to="https://ide.mirte.org/" target="_blank" rel="noopener noreferrer">web IDE</NuxtLink>.</p>
       <p v-if="robot === 'pioneer' && (level === 'secondary' || level == null)" style="padding-top: 20px;">{{ $t("start.build_and_learn_text") }} <NuxtLink :to="'https://workshops.mirte.org/' + $i18n.locale" target="_blank" rel="noopener noreferrer">{{ $t("start.workshops") }}</NuxtLink>.</p>
       <p v-if="level === 'higher'" style="padding-top: 20px;">{{ $t("start.build_and_learn_text") }} <NuxtLink to="https://docs.mirte.org/" target="_blank" rel="noopener noreferrer">{{ $t("start.documentation") }}</NuxtLink>.</p>
    </div>


  </div>
</div>



</template>