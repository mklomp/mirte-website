
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
      <div class="position-fixed bottom-0 end-0 mb-2 me-2">
        <LocaleChanger/>
      </div>
    </footer>
  </div>
</template>