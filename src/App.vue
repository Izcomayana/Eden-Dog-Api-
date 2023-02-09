<template>
  <div class="wrapper">
    <header class="py-8 pl-4 mr-5 flex justify-between">
      <a href="https://ouredenlife.com/" class="flex items-end sm:mb-0">
        <img src="./assets/eden.svg" class="mr-4" alt="Eden Logo" />
      </a>

      <div class="flex justify-end items-end">
        <input 
          type="text" 
          class="w-50 pl-2 h-9 text-base rounded-xl outline-none" 
          placeholder="Search for any breeds"
        >
      </div>
    </header>

    <transition name="slide" mode="out-in">
      <RouterView />
    </transition>
  </div>
</template>

<script>
  import { RouterView } from 'vue-router'
</script>

<style scoped>
  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 2;
    transform: translateX(0);
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
