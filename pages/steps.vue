<script setup>
import { computed } from 'vue'
import { useRoute } from 'nuxt/app'

const route = useRoute()
const level = computed(() => route.query.level)
const robot = computed(() => route.query.robot)

</script>

<template>
<div  class="container d-flex align-items-center">
  <div class="row" style="text-align: center;">
  <h3 v-if="level !== 'higher'">{{ $t("start.getting_started_with") }} MIRTE {{ robot }}</h3>
  <h3 v-else>{{ $t("start.customize") }} MIRTE pioneer</h3>

    <div class="col-md-3 col-xs-12 mb-1" style="padding-top: 50px;">
      <h3 style="text-align: center;">1</h3>
      <h3 style="text-align: center;">{{ $t("start.download_frame") }}</h3>

      <p style="padding-top: 20px;" v-if="level != 'higher'">{{ $t("start.download_frame_text") }}:</p>
      <p style="padding-top: 20px;" v-if="level == 'higher'">{{ $t("start.select_frame_text") }}:</p>

      <select v-if="level === 'higher'" class="form-select" v-model="base">
        <option value="dxf">{{ $t("start.lasercut") }}</option>
        <option value="stl">{{ $t("start.3dprint") }}</option>
        <option value="freecad">{{ $t("start.dxf_source") }}</option>
      </select>

      <div style="text-align: center; margin-top: 20px;">
        <a class="btn btn-primary my-button" :href="getUrlDXF()" >{{ $t("start.download") }}</a>
      </div>
    </div>


    <div class="col-md-3 col-xs-12 mb-1"  style="padding-top: 50px;">
       <h3 style="text-align: center;">2</h3>
       <h3 style="text-align: center;">{{ $t("start.get_hardware") }}</h3>
 
       <p v-if="level !== 'higher' && robot == 'lite'" style="padding-top: 20px;">{{ $t("start.get_hardware_lite_text") }} <NuxtLink :to="{ path: '/configure', query: { robot: 'lite' } }" >bill of materials</NuxtLink></p>
       <p v-if="level !== 'higher' && robot == 'basic'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <NuxtLink :to="{ path: '/configure', query: { robot: 'basic' } }" >bill of materials</NuxtLink></p>
       <p v-if="level !== 'higher' && robot == 'pioneer'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <NuxtLink :to="{ path: '/configure', query: { robot: 'pioneer' } }" >bill of materials</NuxtLink></p>
       <p v-if="level === 'higher'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <NuxtLink :to="{ path: '/configure', query: { robot: 'pioneer', selectable: true} }" >bill of materials</NuxtLink></p>
    </div>



    <div class="col-md-3 col-xs-12 mb-1"  style="padding-top: 50px;">
      <h3 style="text-align: center;">3</h3>
      <h3 v-if="robot !== 'pioneer'" style="text-align: center;">{{ $t("start.build") }}</h3>
      <h3 v-else style="text-align: center;">{{ $t("start.download_software") }}</h3>

      <p v-if="level == 'higher'" style="padding-top: 20px;">{{ $t("start.select_software_text") }}:</p>
      <p v-if="robot === 'pioneer' && (level === 'secondary' || level == null)" style="padding-top: 20px;">{{ $t("start.download_software_text") }}:</p>
      <p v-if="robot === 'basic'" style="padding-top: 20px;">{{ $t("start.build_robot") }} <a href="https://surfdrive.surf.nl/files/index.php/s/KbmrAsejGg9qO6G?path=%2Fmirte_basic#/files_mediaviewer/0_step0.png">here</a></p>
      <p v-if="robot === 'lite'" style="padding-top: 20px;">{{ $t("start.build_robot") }} <a href="https://surfdrive.surf.nl/files/index.php/s/KbmrAsejGg9qO6G?path=%2Fmirte_lite#/files_mediaviewer/0_step0.png">here</a></p>

      <select v-if="level === 'higher'" class="form-select" v-model="software">
        <option value="orange_pi_zero2" selected>Orange Pi Zero 2</option>
        <option value="raspberry_pi">Raspberry Pi 4/5</option>
        <option value="latest_release">{{ $t("start.software_source_release") }}</option>
        <option value="main">{{ $t("start.software_source_latest") }}</option>
      </select>

      <div v-if="robot === 'pioneer' || level === 'higher'" style="text-align: center; margin-top: 20px;">
        <a class="btn btn-primary my-button" :href="getUrl()">{{ $t("start.download") }}</a>
      </div>
    </div>


    <div v-if="robot !== 'lite'" class="col-md-3 col-xs-12 mb-1"  style="padding-top: 50px;">
       <h3 style="text-align: center;">4</h3>
       <h3 v-if="robot === 'pioneer' || level === 'higher'" style="text-align: center;">{{ $t("start.build_and_learn") }}</h3>
       <h3 v-if="robot === 'basic'" style="text-align: center;">{{ $t("start.program_ide") }}</h3>       

       <p v-if="robot === 'basic'" style="padding-top: 20px;">{{ $t("start.program_ide_text") }} <a href="https://mirte.org/ide/">web IDE</a>.</p>
       <p v-if="robot === 'pioneer' && (level === 'secondary' || level == null)" style="padding-top: 20px;">{{ $t("start.build_and_learn_text") }} <a :href="'https://workshops.mirte.org/' + $i18n.locale">{{ $t("start.workshops") }}</a>.</p>
       <p v-if="level === 'higher'" style="padding-top: 20px;">{{ $t("start.build_and_learn_text") }} <a href="https://docs.mirte.org/">{{ $t("start.documentation") }}</a>.</p>
    </div>


  </div>
</div>



</template>






<script>


export default {
    props: ['level', 'robot'],
    data() {
      return {
        software: 'orange_pi_zero2',
        base: 'dxf'
      }
    },
    methods: {
      // TODO: get latest, rather than hardcoded
      getUrl() {
         if (this.software == "orange_pi_zero2"){
            return "https://github.com/mirte-robot/mirte-sd-image-tools/releases/download/0.1.1/mirte_orangepizero2_2024-10-09_10_25_37.img.xz";
         } else if (this.software == "raspberry_pi"){
            return "https://github.com/mirte-robot/mirte-sd-image-tools/releases/download/0.1.1/mirte_rpi4b_2024-10-09_10_59_38.img.xz";
         } else if (this.software == "latest_release"){
            return "https://github.com/mirte-robot/mirte-sd-image-tools/releases/latest";
         } else if (this.software == "latest_release"){
            return "https://github.com/mirte-robot/mirte-sd-image-tools/releases";
         }
      },
      getUrlDXF() {
         if (this.base == "dxf"){
            return "https://github.com/mirte-robot/mirte-frame/releases/download/0.1.0/dxfs.zip" 
         } else if (this.base == "stl"){
            return "https://github.com/mirte-robot/mirte-frame/releases/download/0.1.0/stls.zip"
         } else if (this.base == "freecad"){
            return "https://github.com/mirte-robot/mirte-frame/releases/latest"
         }
      }
    },
}


</script>
