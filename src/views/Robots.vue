<template>

<div style="height: 70%; margin-top:5%;">


<div id="carouselExampleDark" class="carousel carousel-dark slide d-flex flex-row h-100" data-bs-interval="false" data-bs-wrap="false">

   <div class="carousel-item" :class="this.$route.query.r == 'light' ? 'active' : ''">
     <div class="d-flex flex-column h-100" style="text-align: center;">
        <div style="flex-grow: 1;" class="img-wrap">
           <img src="@/assets/images/light_render.png" alt="MIRTE light">
        </div>
        <div>
          <h5>MIRTE light</h5>
          <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.light") }}</p>
          <router-link to="start?r=light"><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> light!</button></router-link>          
        </div>
     </div>
   </div>

   <div class="carousel-item" :class="this.$route.query.r == 'basic' ? 'active' : ''">
     <div class="d-flex flex-column h-100" style="text-align: center;">
        <div style="flex-grow: 1;" class="img-wrap">
           <img src="@/assets/images/basic_render.png" alt="MIRTE basic">
        </div>
        <div>
          <h5>MIRTE basic</h5>
          <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.basic") }}</p>
          <router-link to="start?r=basic"><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> basic!</button></router-link>
        </div>

     </div>
   </div>

   <div class="carousel-item" :class="this.$route.query.r == 'pioneer' ? 'active' : ''">
     <div class="d-flex flex-column h-100" style="text-align: center;">
        <div style="flex-grow: 1;" class="img-wrap">
           <img src="@/assets/images/pioneer_render.png" alt="MIRTE pioneer">
        </div>
        <div>
          <h5>MIRTE pioneer</h5>
          <p style="margin: auto; max-width: 500px; margin-bottom: 50px;" >{{ $t("robots.pioneer") }}</p>
          <router-link to="start?r=pioneer"><button class="btn my-button">{{ $t("robots.start") }} <span class="mirte">MIRTE</span> pioneer!</button></router-link>
        </div>

     </div>
   </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>


</div>


</div>


<!--
<div id="carouselExampleDark" class=" d-flex flex-row h-100" data-bs-interval="false">

  <div type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style="flex: 0 0 30px;" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span> 
   <
  </div>

  <div style="flex: 1;">
  

   <div class="carousel-item" :class="this.$route.query.r == 'light' ? 'active' : ''">
      <div style="height: 60vh; background-color: green;">
      <div style="margin: auto; text-align: center;">
        <img src="@/assets/images/light_render.png" class="d-block" alt="Mirte Light" style="margin: auto; width: 70%;">
        <h5><span class="mirte">MIRTE</span> light</h5>
        <p>Info about ...</p>

      </div>
    </div>
    <div class="carousel-item" :class="this.$route.query.r == 'basic' ? 'active' : ''">
      <img src="@/assets/images/basic_render.png" class="d-block" alt="Mirte Basic" style="margin: auto; width: 40vw;">
      <div class="carousel-caption">
        <h5><span class="mirte">MIRTE</span> basic</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" :class="this.$route.query.r == 'pioneer' ? 'active' : ''">
      <img src="@/assets/images/pioneer_render.png" class="d-block" alt="Mirte Pioneer" style="margin: auto; width: 40vw;">
      <div class="carousel-caption">
        <h5><span class="mirte">MIRTE</span> pioneer</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  

  </div>


  <div  type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style="flex: 0 0 30px;">
    >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </div>

</div>

-->
</template>



<script>


export default {

    data() {
      return {
        mirte: 'basic',
      }
    }
}


</script>
