<template>
  <footer class="p-4 bg-[BBBBBB] rounded-lg shadow md:px-6 md:py-8 dark:bg-[BBBBBB] mt-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="https://ouredenlife.com/" class="flex items-end mb-4 sm:mb-0">
        <img src="../assets/eden.svg" class="mr-4" alt="Eden Logo" />
        <h1 class="text-xl font-medium text-[#03a84e] mb-[-0.25rem]">{{ $store.state.title }}</h1>
      </a>
      <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 3 <a href="https://ouredenlife.com/" class="hover:underline">Eden™</a>. All Rights Reserved.
    </span>
  </footer>
</template>

<script>
  
</script>

<style scoped>
</style>
