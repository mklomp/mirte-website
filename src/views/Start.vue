<template>

<div v-if="robot == null && level !== 'higher'" class="container d-flex align-items-center">

   <div v-if="level === 'primary'" class="row w-100" style="text-align: center;" >
      <h3>{{ $t("start.select_robot") }}</h3>
      <div>{{ $t("start.select_robot_primary_text") }}</div>

      <div class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
        <div class="d-flex flex-column h-100" style="text-align: center;">
          <div>
            <h5>MIRTE lite</h5>
            <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.lite") }}</p>
            <router-link :to="{name: 'start', params: { level: 'secondary', robot: 'lite' }}"><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> lite!</button></router-link>
          </div>
          <img src="@/assets/images/MIRTE_lite_obstacle_sensor_transparant.png" style="width: 50%; margin-left: auto; margin-right: auto;" alt="MIRTE basic">
        </div>
      </div>

      <div class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
        <div class="d-flex flex-column h-100" style="text-align: center;">
          <div>
            <h5>MIRTE basic</h5>
            <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.basic") }}</p>
            <router-link :to="{name: 'start', params: { level: 'secondary', robot: 'basic' }}"><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> basic!</button></router-link>
          </div>
          <img src="@/assets/images/MIRTE_basic_transparant.png" style="width: 50%; margin-left: auto; margin-right: auto;" alt="MIRTE pioneer">
        </div>
      </div>
   </div>


   <div v-if="level === 'secondary'" class="row w-100" style="text-align: center;" >
      <h3>{{ $t("start.select_robot") }}</h3>
      <div>{{ $t("start.select_robot_secondary_text") }} </div>
    
      <div class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
        <div class="d-flex flex-column h-100" style="text-align: center;">
          <div>
            <h5>MIRTE basic</h5>
            <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.basic") }}</p>
            <router-link :to="{name: 'start', params: { level: 'secondary', robot: 'basic' }}"><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> basic!</button></router-link>
          </div>
          <img src="@/assets/images/MIRTE_basic_transparant.png" style="width: 50%; margin-left: auto; margin-right: auto;" alt="MIRTE basic">
        </div>
      </div>

      <div class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
        <div class="d-flex flex-column h-100" style="text-align: center;">
          <div>
            <h5>MIRTE pioneer</h5>
            <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.pioneer") }}</p>
            <router-link :to="{name: 'start', params: { level: 'secondary', robot: 'pioneer' }}"><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> pioneer!</button></router-link>
          </div>
          <img src="@/assets/images/MIRTE_pioneer_transparant.png" style="width: 50%; margin-left: auto; margin-right: auto;" alt="MIRTE pioneer">
        </div>
      </div>
   </div>

</div>



<div v-else class="container d-flex align-items-center">
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
 
       <p v-if="level !== 'higher' && robot == 'lite'" style="padding-top: 20px;">{{ $t("start.get_hardware_lite_text") }} <router-link :to="{name: 'configure', params: { robot: robot }}">bill of materials</router-link>.</p>
       <p v-if="level !== 'higher' && robot == 'basic'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <router-link :to="{name: 'configure', params: { robot: robot }}">bill of materials</router-link>.</p>
       <p v-if="level !== 'higher' && robot == 'pioneer'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <router-link :to="{name: 'configure', params: { robot: robot }}">bill of materials</router-link>.</p>
       <p v-if="level === 'higher'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <router-link :to="{name: 'configure', params: { robot: 'pioneer', selectable: true }}">bill of materials</router-link>.</p>
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
        <option value="raspberry_pi">Raspberry Pi 2/3/4</option>
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
