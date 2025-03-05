<template>


  <div class="container-fluid">
    <router-link :to="{name: 'home'}" class="navbar-brand" style="font-family: Livvic-Bold;">
       <img style="float: left; margin-right: 10px;" src="@/assets/images/mirte_logo.png" alt="MIRTE lite" height="45">
       <h1>MIRTE</h1>
    </router-link>
    <button class="navbar-toggler" type="button" @click="visible=!visible" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse" :class="!visible?'collapse':''" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto" >
        <li class="nav-item">
          <router-link :to="{name: 'home'}" class="nav-link" @click="visible=!visible">{{ $t("navbar.home") }}</router-link>
        </li>
        <li class="nav-item dropdown">
          <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ $t("navbar.robots") }}
          </div>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <router-link :to="{name: 'robots', params: { robot: 'lite' }}" class="nav-link" @click="visible=!visible"><span class="mirte">MIRTE</span> Lite</router-link>
            <router-link :to="{name: 'robots', params: { robot: 'basic' }}" class="nav-link" @click="visible=!visible"><span class="mirte">MIRTE</span> Basic</router-link>
            <router-link :to="{name: 'robots', params: { robot: 'pioneer' }}" class="nav-link" @click="visible=!visible"><span class="mirte">MIRTE</span> Pioneer</router-link>
            <div class="dropdown-divider"></div>
            <router-link :to="{name: 'configure', params: { robot: 'pioneer', selectable: true }}" class="nav-link" @click="visible=!visible">{{ $t("navbar.configure") }}</router-link>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <div class="nav-link dropdown-toggle" href="/start" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ $t("navbar.start") }}
          </div>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <router-link :to="{name: 'start', params: { level: 'primary' }}" class="nav-link" @click="visible=!visible">{{ $t("navbar.primary") }}</router-link>
            <router-link :to="{name: 'start', params: { level: 'secondary' }}" class="nav-link" @click="visible=!visible">{{ $t("navbar.secondary") }}</router-link>
            <router-link :to="{name: 'start', params: { level: 'higher' }}" class="nav-link" @click="visible=!visible">{{ $t("navbar.higher") }}</router-link>
            <div class="dropdown-divider"></div>
            <a :href="'https://workshops.mirte.org/' + $i18n.locale" class="nav-link">{{ $t("navbar.workshops") }}</a>
            <a href="https://docs.mirte.org/" class="nav-link">{{ $t("navbar.docs") }}</a>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <div class="nav-link dropdown-toggle" href="/contribute" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ $t("navbar.contribute") }}
          </div>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
             <a class="nav-link" href="https://github.com/mirte-robot">Github</a>
          </ul>
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
