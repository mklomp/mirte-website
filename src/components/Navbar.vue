<template>


  <div class="container-fluid">
    <a class="navbar-brand" style="font-family: Livvic-Bold;" href="/"><h1>MIRTE</h1></a>
    <button class="navbar-toggler" type="button" @click="visible=!visible" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse" :class="!visible?'collapse':''" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto" >
        <li class="nav-item">
          <router-link to="/" class="nav-link" @click="visible=!visible">{{ $t("navbar.home") }}</router-link>
        </li>
<!--        <li class="nav-item">
          <router-link to="/whois" class="nav-link">{{ $t("navbar.whois") }}</router-link>
        </li>  -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#/robots" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ $t("navbar.robots") }}
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <router-link to="/robots?r=light" class="nav-link" @click="visible=!visible"><span class="mirte">MIRTE</span> Light</router-link>
            <router-link to="/robots?r=basic" class="nav-link" @click="visible=!visible"><span class="mirte">MIRTE</span> Basic</router-link>
            <router-link to="/robots?r=pioneer" class="nav-link" @click="visible=!visible"><span class="mirte">MIRTE</span> Pioneer</router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/configure?r=pioneer&c=true" class="nav-link" @click="visible=!visible">{{ $t("navbar.configure") }}</router-link>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#/robots" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ $t("navbar.start") }}
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <router-link to="start?l=primary" class="nav-link" @click="visible=!visible">{{ $t("navbar.primary") }}</router-link>
            <router-link to="start?l=secondary" class="nav-link" @click="visible=!visible">{{ $t("navbar.secondary") }}</router-link>
            <router-link to="start?l=higher" class="nav-link" @click="visible=!visible">{{ $t("navbar.higher") }}</router-link>
            <div class="dropdown-divider"></div>
            <a href="https://workshops.mirte.org/" class="nav-link">{{ $t("navbar.workshops") }}</a>
            <a href="https://docs.mirte.org/" class="nav-link">{{ $t("navbar.docs") }}</a>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#/robots" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ $t("navbar.contribute") }}
          </a>
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
