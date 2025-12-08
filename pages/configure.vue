<script setup>
import { useRoute , useRouter} from 'nuxt/app'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

useHead({ 
  title: `${t('navbar.configure')} – MIRTE`,  
  meta: [
    {
      name: 'description',
      content: 'Configurator of all the MIRTE robots. Check the bill of materials for all the MIRTE robots.'
    }
  ]

})

let robots = {
          lite: {'selected': ['l9110s', 'yellow_motor', 'breadboard', 'caster_wheel', 'wheel', 'm3', 'frame_bottom', 'breadboard_supply','power_bank','usb_cable','reflectance_sensor', 'light_sensor', 'ir_obstacle_sensor'],
                  'disabled': ['single_board_computer', 'orange_pi_zero2', 'raspberry_pi', 'micro_controller', 'raspberry_pico', 'arduino_nano', 'arduino_uno', 'stm32', 'blue_motor', 'pcb', 'sd_card', 'actuators','servo', 'oled', 'us_distance_sensor', 'keypad', 'camera']},
          basic: {'selected': ['raspberry_pico', 'l9110s', 'yellow_motor', 'breadboard', 'caster_wheel', 'wheel', 'm3', 'frame_bottom', 'breadboard_supply','power_bank','usb_cable','reflectance_sensor', 'light_sensor', 'ir_obstacle_sensor', 'us_distance_sensor', 'keypad'],
                  'disabled': ['single_board_computer', 'orange_pi_zero2', 'raspberry_pi', 'arduino_nano', 'arduino_uno', 'stm32', 'blue_motor', 'sd_card', 'actuators', 'servo', 'oled', 'camera']},
          pioneer: {'selected': ['orange_pi_zero2', 'raspberry_pico', 'l9110s', 'yellow_motor', 'pcb', 'sd_card', 'caster_wheel', 'wheel', 'm3', 'frame_full', 'power_bank','usb_cable', 'servo', 'oled', 'reflectance_sensor', 'light_sensor', 'ir_obstacle_sensor', 'us_distance_sensor', 'keypad', 'camera'],
                    'disabled': ['frame_bottom']}
                  };

let hardware = [
          {name: 'single_board_computer', options: ['orange_pi_zero2', 'raspberry_pi']},
          {name: 'micro_controller', options: ['raspberry_pico', 'arduino_nano', 'arduino_uno', 'stm32']},
          {name: 'motor_controller', options: ['l9110s', 'l298n', 'mx1919']},
          {name: 'wiring', options: ['breadboard', 'pcb']},
          {name: 'motors', options: ['yellow_motor', 'blue_motor']},
          {name: 'misc', options: ['sd_card', 'caster_wheel', 'wheel', 'm3', 'frame_bottom', 'frame_full']},
          {name: 'power', options: ['power_bank', 'breadboard_supply', 'usb_cable']},
          {name: 'sensors', options: ['reflectance_sensor', 'light_sensor', 'ir_obstacle_sensor', 'us_distance_sensor', 'keypad', 'camera']},
          {name: 'actuators', options: ['servo', 'oled']}
        ];

const selected = ref([])
const disabled = ref([])
const selectable = ref(route.query.selectable !== "false")
const robot = ref(route.query.robot ?? 'pioneer')

onMounted(() => {
  selectable.value = route.query.selectable !== "false"
  robot.value = route.query.robot ?? 'pioneer'

  selected.value = [...robots[robot.value].selected]
  disabled.value = [...robots[robot.value].disabled]
})

function switchRobot(newRobot){
  robot.value = newRobot
  selected.value = [...robots[robot.value].selected]
  disabled.value = [...robots[robot.value].disabled]
  router.replace({ query: { ...route.query, robot: newRobot } })
}

</script>


<template>

<div>
  <div class="container">

    <div v-if="selectable" class="row">
      <div class="col-4" @click="switchRobot('lite')" style="text-align: center;">
        <button :style="robot == 'lite' ? 'background-color: #f1be45;': ''">
          <div style="padding: 10px;">
            <NuxtImg style="max-height:50px;" src="/images/MIRTE_lite_obstacle_sensor_transparant.png" alt="MIRTE lite picture" height="50" width="50" format="webp"/>
            <span class="mirte">MIRTE</span> Lite
          </div>
        </button> 
      </div>
      <div class="col-4" @click="switchRobot('basic')" style="text-align: center;">
        <button :style="robot == 'basic' ? 'background-color: #f1be45;': ''">
          <div style="padding: 10px;">
            <NuxtImg style="max-height:50px;" src="/images/MIRTE_basic_transparant.png" alt="MIRTE basic picture" height="50" width="50" format="webp"/>
            <span class="mirte">MIRTE</span> Basic
          </div>
        </button>
      </div>
      <div class="col-4" @click="switchRobot('pioneer')" style="text-align: center;">
        <button :style="robot == 'pioneer' ? 'background-color: #f1be45;': ''">
          <div style="padding: 10px;">
            <NuxtImg style="max-height:50px;" src="/images/MIRTE_pioneer_transparant.png" alt="MIRTE pioneer picture" height="50" width="50" format="webp"/>
            <span class="mirte">MIRTE</span> Pioneer
          </div>
        </button>
      </div>
    </div>

    <h1 v-if="selectable" style="text-align: center;padding-top: 20px;">{{ $t("configure.chose") }}</h1>
    <h1 v-else style="text-align: center;padding-top: 20px;">MIRTE {{  robot.charAt(0).toUpperCase() + robot.slice(1) }}</h1>

    <div class="row">
      <div class="col-sm-3"
          v-for="(component, index_component) in hardware"
          :key="component.name"
          style="padding-top: 40px;"
      >
        <div :style="disabled.includes(component.name) ? 'color: #ccc;' : ''">
          <strong>{{ $t("configure." + component.name) }}</strong>
        </div>

        <div v-for="(option, index_option) in component.options"
            :key="option"
            style="padding-top: 7px; "
        >
          <input
            style="accent-color: #9db7be;"
            type="checkbox"
            :id="'checkbox_' + index_component + '_' + index_option"
            :checked="selected.includes(option)"
            :disabled="disabled.includes(option)"
          />

          <label :for="'checkbox_' + index_component + '_' + index_option" style="padding-left: 5px;">
            {{ $t("configure." + option) }}
          </label>
        </div>
      </div>
    </div>

  </div>
</div>


</template>