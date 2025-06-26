<template>

<div class="hero">

  <div class="container">
    <div class="row">
      <div class="col-sm-6">
         <img src="@/assets/images/mirte_drawing.png" style="margin: auto; width:100%"/>
      </div>

      <div class="col-sm-6 align-items-center d-flex text-center">
        <div class="text-center">
          <h1>MIRTE</h1>
          <p style="font-family: Overpass-Light ">
               {{ $t("home.home") }}
          </p>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="text-center">
      <NuxtLink :to="{ path: '/robots', query: { robot: 'lite' } }" ><button class="btn my-button">{{ $t("home.check_robots") }} <span class="mirte">MIRTE</span> robots!</button></NuxtLink>
    </div>

   </div>

  </div>

</div>


</template>
