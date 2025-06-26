
<template>
  <div class="layout">
    <nav class="navbar navbar-expand-sm fixed-top">
      <NuxtLayout />
    </nav>

    <main style="padding: 0px; margin-top: 56px;">
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