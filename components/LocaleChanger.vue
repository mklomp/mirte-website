<script setup>
import 'flag-icons/css/flag-icons.min.css'
</script>

<template>

  <a class="nav-link dropdown-toggle locale-selector" style="background: $light-blue" href="#" id="localeDropdown" role="button" data-bs-toggle="dropdown"
    aria-expanded="false"><span :class="`fi fi-${currentLanguage.flag}`"></span>
  </a>
  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="localeDropdown">
    <li v-for="lang in langs" :key="lang.code">
      <a class="dropdown-item" href="#" @click.prevent="$i18n.locale = lang.code">
        <span :class="`fi fi-${lang.flag}`"></span>
        {{ lang.text }}
      </a>
    </li>
  </ul>


</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      langs: [
        { code: "en", text: "English", flag: "gb" },
        { code: "nl", text: "Nederlands", flag: "nl" },
      ],
    };
  },
  watch: {
    '$i18n.locale': function (newVal, oldVal) {
      localStorage.setItem("user-locale", newVal);
    }
  },
  computed: {
    currentLanguage() {
      return this.langs.find(l => l.code === this.$i18n.locale);
    }
  }


};
</script>
