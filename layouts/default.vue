<script setup>
import { useLocalePath } from '#i18n'
const localePath = useLocalePath()
</script>

<template>
  <div class="container-fluid">
    <NuxtLink :to="localePath('index')" class="navbar-brand" style="font-family: Livvic-Bold;">
      <img style="float: left; margin-right: 10px;" src="@/assets/images/mirte_logo.png" alt="MIRTE lite" height="45">
      <h1>MIRTE</h1>
    </NuxtLink>
    <button class="navbar-toggler" type="button" @click="visible = !visible" data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse" :class="!visible ? 'collapse' : ''" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <NuxtLink :to="localePath('index')" class="nav-link" @click="visible = !visible"> {{ $t("navbar.home") }}</NuxtLink>
        </li>
        <li class="nav-item dropdown">
          <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            {{ $t("navbar.robots") }}
          </div>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <NuxtLink :to="localePath({ path: '/robots', query: { robot: 'lite' } })" class="nav-link" @click="visible = !visible"><span
                class="mirte">MIRTE</span> Lite</NuxtLink>
            <NuxtLink :to="localePath({ path: '/robots', query: { robot: 'basic' } })" class="nav-link" @click="visible = !visible">
              <span class="mirte">MIRTE</span> Basic</NuxtLink>
            <NuxtLink :to="localePath({ path: '/robots', query: { robot: 'pioneer' } })" class="nav-link" @click="visible = !visible">
              <span class="mirte">MIRTE</span> Pioneer</NuxtLink>
            <!--  <NuxtLink :to="localePath({path: '/hardware', query: { robot: 'master' }})" class="nav-link" @click="visible=!visible"><span class="mirte">MIRTE</span> Master</NuxtLink>-->
            <div class="dropdown-divider"></div>
            <NuxtLink :to="localePath({ path: '/configure', query: { robot: 'pioneer', selectable: true } })" class="nav-link"
              @click="visible = !visible">{{ $t("navbar.configure") }}</NuxtLink>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            {{ $t("navbar.start") }}
          </div>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <NuxtLink :to="localePath({ path: '/start', query: { level: 'primary' } })" class="nav-link" @click="visible = !visible">
              {{ $t("navbar.primary") }}</NuxtLink>
            <NuxtLink :to="localePath({ path: '/start', query: { level: 'secondary' } })" class="nav-link" @click="visible = !visible">
              {{ $t("navbar.secondary") }}</NuxtLink>
            <NuxtLink :to="localePath({ path: '/steps', query: { level: 'higher' } })" class="nav-link" @click="visible = !visible">
              {{ $t("navbar.higher") }}</NuxtLink>
            <div class="dropdown-divider"></div>
            <a :href="'https://workshops.mirte.org/' + $i18n.locale" class="nav-link d-flex"  target="_blank" rel="noopener noreferrer">
              {{ $t("navbar.workshops") }} <FontAwesomeIcon icon="arrow-up-right-from-square" />
            </a>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            {{ $t("navbar.developers") }}
          </div>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <a href="https://docs.mirte.org/" class="nav-link d-flex"  target="_blank" rel="noopener noreferrer">
              {{ $t("navbar.docs") }} <FontAwesomeIcon icon="arrow-up-right-from-square" />
            </a>
            <a class="nav-link d-flex" href="https://github.com/mirte-robot" target="_blank" rel="noopener noreferrer">
              Github <FontAwesomeIcon icon="arrow-up-right-from-square" />
            </a>
          </ul>
        </li>
        <li class="nav-item">
          <NuxtLink :to="localePath({ path: '/meet' })" class="nav-link" @click="visible = !visible"> {{ $t("navbar.meet") }}
          </NuxtLink>
        </li>
        <li class="nav-item dropdown">
          <LocaleChanger/>
        </li>
      </ul>
    </div>
  </div>



</template>

<script>
import { reactive, computed } from "vue";

export default {
  data() {
    return {
      visible: false,
    }
  },
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment,
    };
  },
};
</script>

<style scoped>
button {
  font-size: 24px;
  padding: 14px;
}
</style>
