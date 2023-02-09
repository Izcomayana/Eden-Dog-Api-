<template>
  <div>
    <ul>
      <li
        v-for="(dog, index) in dogs" :key="index += 8" 
        v-show="index == dogId"
        class="mx-auto"
      >
        <div class="np-ht">
          <v-lazy-image :src="dog" alt="" />
        </div>
        <p class="mt-4 mb-1">Eden Pets collection</p>
        <p><b>Name: </b> Edellenzer  {{ dogId }}</p>
        <p><b>Breed: </b> Appenzeller</p>
        <p><b>Origin:</b> Canada</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue';
  import { useRoute } from "vue-router"
  import axios from "axios"
  import store from "../../store/index"
  import Loading from "../Loading.vue"
  import VLazyImage from "v-lazy-image"

  export default {
    components: {
      Loading,
      VLazyImage,
    },

    setup() {

      const dogs = ref([])
      const dogId = ref()


      const getDogs = async () => {
        await new Promise ((resolve) => setTimeout(resolve, 2500))
        
        return axios.get(store.state.appenzellerApi)
        .then((res) => dogs.value = res.data.message)
        .catch((error) => console.log(error))
      }

      onMounted(() => {
        getDogs();

        const route = useRoute()
        if(route.params.id < 56) {
          dogId.value = route.params.id;
        }
      })

      return { dogs, dogId }
    },
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