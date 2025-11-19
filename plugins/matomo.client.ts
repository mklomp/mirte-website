export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.afterEach((to) => {
    if (typeof window !== 'undefined' && (window as any)._paq) {
      (window as any)._paq.push(['setCustomUrl', to.fullPath]);
      (window as any)._paq.push(['setDocumentTitle', document.title]);
      (window as any)._paq.push(['trackPageView']);
    }
  });
});