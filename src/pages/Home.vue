<template>
  <div class="mx-5">
    <Body />
    
    <Footer />
  </div>
</template>

<script>
  import Body from "../components/Body.vue"
  import Footer from "../components/Footer.vue"

  export default {
    components: {
      Body,
      Footer
    }
  }

</script>