<template>

<div>
  <div class="container">
    <div v-if="selectable" class="row">
      <div class="col-4" @click="robot='lite'" style="text-align: center;">
        <button :style="robot == 'lite' ? 'background-color: #f1be45;': ''">
         <div style="padding: 10px;">
         <img src="@/assets/images/lite_render.png" style="max-height:50px;"/><span class="mirte">MIRTE</span> lite
         </div>
        </button> 
      </div>
      <div class="col-4" @click="robot='basic'" style="text-align: center;">
        <button :style="robot == 'basic' ? 'background-color: #f1be45;': ''">
         <div style="padding: 10px;">
         <img src="@/assets/images/basic_render.png" style="max-height:50px;"/><span class="mirte">MIRTE</span> basic
         </div>
        </button>
      </div>
      <div class="col-4" @click="robot='pioneer'" style="text-align: center;">
        <button :style="robot == 'pioneer' ? 'background-color: #f1be45;': ''">
         <div style="padding: 10px;">
         <img src="@/assets/images/pioneer_render.png" style="max-height:50px;"/><span class="mirte">MIRTE</span> pioneer
         </div>
        </button>
      </div>
    </div>

    <h1 v-if="selectable" style="text-align: center;padding-top: 20px;">{{ $t("configure.chose") }}</h1>
    <h1 v-else style="text-align: center;padding-top: 20px;">MIRTE {{ robot }}</h1>

    <div class="row">
      <div class="col-sm-3" v-for="(component, index_component) in hardware" style="padding-top: 40px;">
        <div :style="robots[robot]['disabled'].includes(component.name) ? 'color: #ccc;' : ''">
        {{ $t("configure." + component.name) }}
        </div>
        <div v-for="(option, index_option) in component.options" style="font-family:'Overpass-Light'; padding-top: 7px;">
          <input style="accent-color: #9db7be;" type="checkbox" value="" :id="'checkbox_' + index_component + '_' + index_option" :checked="robots[robot]['selected'].includes(option)" :disabled="robots[robot]['disabled'].includes(option)">
          <label class="form-check-label" :for="'checkbox_' + index_component + '_' + index_option">
            {{ $t("configure." + option) }}
          </label>
          </div>
        </div>
      </div>

    </div>

   </div>


</template>



<script>

//import { reactive, computed } from "vue";

export default {
    props: ['robot', 'selectable'],
    data() {
      // The variable names used here are all from i18n lin locales
      return {
        robots: {
          lite: {'selected': ['l9110s', 'yellow_motor', 'breadboard', 'caster_wheel', 'wheel', 'm3', 'frame_bottom', 'breadboard_supply','power_bank','usb_cable','reflectance_sensor', 'light_sensor', 'ir_obstacle_sensor'],
                  'disabled': ['single_board_computer', 'orange_pi_zero2', 'raspberry_pi', 'micro_controller', 'raspberry_pico', 'arduino_nano', 'arduino_uno', 'stm32', 'blue_motor', 'pcb', 'sd_card', 'actuators','servo', 'oled', 'us_distance_sensor', 'keypad', 'camera']},
          basic: {'selected': ['raspberry_pico', 'l9110s', 'yellow_motor', 'breadboard', 'caster_wheel', 'wheel', 'm3', 'frame_bottom', 'breadboard_supply','power_bank','usb_cable','reflectance_sensor', 'light_sensor', 'ir_obstacle_sensor', 'us_distance_sensor', 'keypad'],
                  'disabled': ['single_board_computer', 'orange_pi_zero2', 'raspberry_pi', 'arduino_nano', 'arduino_uno', 'stm32', 'blue_motor', 'sd_card', 'actuators', 'servo', 'oled', 'camera']},
          pioneer: {'selected': ['orange_pi_zero2', 'raspberry_pico', 'l9110s', 'yellow_motor', 'pcb', 'sd_card', 'caster_wheel', 'wheel', 'm3', 'frame_full', 'power_bank','usb_cable', 'servo', 'oled', 'reflectance_sensor', 'light_sensor', 'ir_obstacle_sensor', 'us_distance_sensor', 'keypad', 'camera'],
                    'disabled': ['frame_bottom']}
        },
        hardware: [
          {name: 'single_board_computer', options: ['orange_pi_zero2', 'raspberry_pi']},
          {name: 'micro_controller', options: ['raspberry_pico', 'arduino_nano', 'arduino_uno', 'stm32']},
          {name: 'motor_controller', options: ['l9110s', 'l298n', 'mx1919']},
          {name: 'wiring', options: ['breadboard', 'pcb']},
          {name: 'motors', options: ['yellow_motor', 'blue_motor']},
          {name: 'misc', options: ['sd_card', 'caster_wheel', 'wheel', 'm3', 'frame_bottom', 'frame_full']},
          {name: 'power', options: ['power_bank', 'breadboard_supply', 'usb_cable']},
          {name: 'sensors', options: ['reflectance_sensor', 'light_sensor', 'ir_obstacle_sensor', 'us_distance_sensor', 'keypad', 'camera']},
          {name: 'actuators', options: ['servo', 'oled']}
        ]
      }
    }
}


</script>
