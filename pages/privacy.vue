<script setup>
useHead({ 
  title: 'Privacy Statement - MIRTE',
  meta: [
    {
      name: 'description',
      content: 'The privacy statement of all the MIRTE websites.'
    }
  ]
})
</script>

<template>
  <div class="container py-3" style="width: 40vw;">

    <section class="text-center mb-5">
      <div class="row" style="text-align: left">
        <p>Effective Date: 19 November 2025</p>
        <p>This Privacy Policy replaces the 
          <NuxtLink to="https://github.com/mirte-robot/mirte-website/commits/main/pages/privacy.vue">earlier versions</NuxtLink> 
          published on this website.</p>

          <div class="h3 mirte" style="text-align: center">Why</div>
          <p>Although we do like to get to know you, we value an actual conversation over just evesdropping. But
            we also like to know how our websites are being used. We like to know how often our websites are being
            visited, which pages are most useful, etc. This means we have to collecto some data. Our overall goal 
            of colleting this data is to improve the experience of the user visiting one of our websites.</p>

           <div class="h3 mirte" style="text-align: center">What</div>
           
           <p>We do not store your detailed location, and anonymize your IP address to make sure the data cannot
           lead back to you. The data we store can be split up into raw data and aggredated data. We are collecting 
           the following raw data everytime you visit a page (eg mirte.org/privacy):</p>

           <ul>
             <li>Which page you visited and the date and time (UTC but also local) of the visit.</li>
             <li>An anonamized IP address. We only store that first 2 parts of your IP (eg 192.168.xxx.xxx)</li>
             <li>Approximate latitude and longitude, based on this anonymous IP. We will not know in which city you live, but might know your state/country.</li>
             <li>How you got to our website (eg. google or a blog).</li>
             <li>Which browser (but not the installed plugins), operting system and screen resolution you used.</li>
             <li>How long it took for the page to load.</li>
             <li>Files or links that were clicked.</li>
            </ul>

          <p>Every pageview is treated a being unique. So we are not interested in the journey you have on our
           website, but only looking at which pages are viewed most frequently. We do not 'track' you as a user.
           Using the raw data, we can make reports of aggregated data. With this we can for example see
           from which countries most of the visiters come. Or which pages are most frequently used.</p>

          <div class="h3 mirte" style="text-align: center">Where</div>

          <p>This data of course needs to be stored somewhere. It is stored in a database on the mirte.org server.
          Tha raw data will never be shared with 3rd parties. We might share the aggregated data (eg growth in 
          pageviews) to inform others (eg. in a presentation). For functional reasons we also need some data that
          your browser stores for us (see cookies below).
          </p> 


          <div class="h3 mirte" style="text-align: center">How</div>

          <p>Since we value your privacy, we chose the privacy-friendly web analystics tool Metamo. We use this
          to collect and store the data for all our website (mirte.org, workshops.mirte.org, docs.mirte.org,
          ide.mirte.org).</p>

          <div class="h5 mirte">Matomo</div>
          <p>We use Matomo to collect and store this information. On the clients side (code that runs in your 
            browser) we have set the values of disableCookies, and disableBrowserFeatureDetection. On the 
            server side, we use the following settings:</p>

          <ul>
             <li>Anonymized IP address enabled (2 bytes) which is also used for other data.</li>
             <li>Force tracking without cookies enabled.</li>
             <li>Remove query parameters from referrer URL.</li>
             <li>Randomized config_ID enabled.</li>
             <li>Regularaly delete old data is set to 180 days.</li>
            </ul>

          <div class="h5 mirte">Cookies</div>

          <p>Cookies are a great way to optimize the user experience. We do not like cookies that track your
          wherebout around the website (or included/embedded SDK/APIs). We therefore limit the number data 
          we store on your machine with only functional cookies. At the moment this includes:</p>

          <ul>
            <li><NuxtLink to="https://github.com/mirte-robot/mirte-website/blob/ec1a81b61b3b28436869d61c1e3a7e2652000406/nuxt.config.ts#L32-L33">
            i18n_redirected</NuxtLink>: Storing your language preference.</li>
          </ul>
      </div>
    </section>


  </div>
</template>