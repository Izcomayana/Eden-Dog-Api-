<template>
  <div class="my-8 mt-10">
    <p class="text-xl my-10">Welcome to Eden Pets</p>

    <Akita />
    <Appenzeller />
    <Basenji />
    
  </div>
</template>

<script>
  import Akita from "./Breeds/Akita.vue"
  import Appenzeller from "./Breeds/Appenzeller.vue"
  import Basenji from "./Breeds/Basenji.vue"

  export default {
    components: {
      Akita,
      Appenzeller,
      Basenji,
    }
  }
</script>
