import { createStore } from 'vuex'

const store = createStore({
  state: {
    title: "Eden Paws",
    akitaApi: "https://dog.ceo/api/breed/akita/images",
    appenzellerApi: "https://dog.ceo/api/breed/appenzeller/images",
    basenjiApi: "https://dog.ceo/api/breed/basenji/images"
  }, 
  getters: {},
  mutations: {},
  actions: {}
})

export default store;