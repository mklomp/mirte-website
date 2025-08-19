
<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-sm fixed-top">
      <NuxtLayout />
    </nav>

    <main class="flex-grow-1">
      <NuxtPage />
    </main>

    <footer>
      <span class="mirte">MIRTE</span> {{ $t("footer") }} TU Delft. info@mirte.org.
    </footer>
  </div>
</template>