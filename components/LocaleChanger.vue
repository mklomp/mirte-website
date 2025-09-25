<script setup>
import { useI18n } from 'vue-i18n'
import { useSwitchLocalePath } from '#i18n'
import 'flag-icons/css/flag-icons.min.css'

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const langs = [
  { code: "en", text: "English", flag: "gb" },
  { code: "nl", text: "Nederlands", flag: "nl" },
]
</script>

<template>
  <a class="nav-link dropdown-toggle locale-selector"
     href="#"
     id="localeDropdown"
     role="button"
     data-bs-toggle="dropdown"
     aria-expanded="false">
    <span :class="`fi fi-${langs.find(l => l.code === locale).flag}`"></span>
  </a>
  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="localeDropdown">
    <li v-for="lang in langs" :key="lang.code">
      <NuxtLink class="dropdown-item" :to="switchLocalePath(lang.code)">
        <span :class="`fi fi-${lang.flag}`"></span>
        {{ lang.text }}
      </NuxtLink>
    </li>
  </ul>
</template>
