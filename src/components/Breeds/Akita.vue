<template>
  <div>
    <Loading v-show="dogs.length == 0" />
    <ul class="flex flex-col justify-between gap-10">
      <li
        v-for="(dog, index) in dogs" :key="index++" 
        v-show="index < 101"
        class="mx-auto cursor-pointer"
      >
        <router-link :to="{ name: 'dogs', params: { id: index } }">
          <div class="np-ht">
            <v-lazy-image :src="dog" alt="" />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue';
  import store from "../../store/index"
  import axios from "axios"
  import Loading from "../Loading.vue"
  import VLazyImage from "v-lazy-image"

  export default {
    components: {
      Loading,
      VLazyImage, 
    },

    setup () {
      const dogs = ref([])
      const search = ref("")
      const dog = ref("Akita")

      const getDogs = async () => {
        await new Promise ((resolve) => setTimeout(resolve, 5000))
        
        return axios.get(store.state.akitaApi)
        .then((res) => dogs.value = res.data.message)
        .catch((error) => console.log(error))
      }

      onMounted(() => {
        getDogs();
      })

      return { dogs, dog, }
    }
  }
</script>

<style scoped>
  .np-ht {
    /* height: 400px; */
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