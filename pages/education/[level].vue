<script setup>

import { useI18n } from 'vue-i18n'

import { useRoute } from 'nuxt/app'
const route = useRoute()


const { t } = useI18n()
useHead({ 
  title: `${t('navbar.start')} – MIRTE`,
  meta: [
    {
      name: 'description',
      content: 'An overview of the different MIRTE robots per educational level.'
    }
  ]
})

const level = ref(route.params.level || 'all')

</script>
  
<template>

<div class="container d-flex align-items-center">
  <div  style="text-align: center;" class="w-100" >
      <div class="h3 mirte">{{ $t("start.select_robot") }}</div>

      <div v-if="level === 'primary'">{{ $t(`start.select_robot_primary_text`) }}</div>
      <div v-if="level === 'secondary'">{{ $t(`start.select_robot_secondary_text`) }}</div>
      <div v-if="level === 'higher'">{{ $t(`start.select_robot_higher_text`) }}</div>
      <div v-if="level === 'all'">{{ $t(`start.select_robot_all_text`) }}</div>

      <div class="row">
          <div v-if="level === 'primary' || level === 'all'" class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
            <Robot robot="lite"/>
          </div>

          <div v-if="level === 'primary' || level === 'secondary' || level === 'all'" class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
            <Robot robot="basic"/>
          </div>

          <div v-if="level === 'secondary' || level === 'higher' || level === 'all'" class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
            <Robot robot="pioneer" :level="level"/>
          </div>

          <div v-if="level === 'higher' || level === 'all'" class="col-md-6 col-xs-12 mb-1" style="padding-top: 50px;">
            <Robot robot="master"/>
          </div>
      </div>
   </div>


</div>


</template>
