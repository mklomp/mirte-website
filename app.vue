
<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-sm fixed-top">
      <NuxtLayout />
    </nav>

    <main class="flex-grow-1">
      <NuxtPage />
    </main>

    <footer>
      <span class="mirte">MIRTE</span> {{ $t("footer") }} TU Delft - <a href="mailto:info@mirte.org">contact</a> - <a href="https://github.com/mirte-robot">github</a>
    </footer>
  </div>
</template>