<template>
  <div class="mx-5 mt-10">
    <button class="mb-8 px-3 py-1 border-[#03a84e] border-2 rounded-md text-[#03a84e] cursor-pointer transition-all hover:bg-[#03a84e] hover:text-black">
      <router-link to="/">
        Back
      </router-link>
    </button>
    <AkitaId />
    <AppenzellerId />
    <BasenjiId />
    <Footer />
  </div>
</template>

<script>
  import Footer from "../components/Footer.vue"
  import AppenzellerId from "../components/BreedsId/AppenzellerId.vue"
  import AkitaId from "../components/BreedsId/AkitaId.vue"
  import BasenjiId from "../components/BreedsId/BasenjiId.vue"
  
  export default {
    components: {
      Footer,
      AkitaId,
      AppenzellerId,
      BasenjiId,
    }
  }
</script>

<style scoped>
  .np-ht {
    /* height: 350px; */
    height: 100%;
  }

  .v-lazy-image {
    filter: blur(20px);
    transition: filter 2s;
  }

  .v-lazy-image-loaded {
    filter: blur(0);
  }
</style>