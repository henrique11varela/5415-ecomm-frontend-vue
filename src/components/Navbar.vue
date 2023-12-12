<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav>
    <div class="container mx-auto flex flex-wrap items-center justify-center p-4">
      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex p-2 rounded-lg flex-row md:space-x-8 mt-0 border-0">
          <li class="navitem flex items-center">
            <div class="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
            </div>
            <RouterLink :to="{name: 'Home'}" class="block py-2 px-3 rounded border-0 p-0">Home</RouterLink>
          </li>
          <li class="navitem flex items-center">
            <div class="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            <RouterLink :to="{name: 'Contacts'}" class="block py-2 px-3 rounded border-0 p-0">Contacts</RouterLink>
          </li>
          <li class="navitem flex items-center" >
            <div class="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M64 208c0 7.8 4.4 18.7 17.1 30.3C126.5 214.1 188.9 200 256 200s129.5 14.1 174.9 38.3C443.6 226.7 448 215.8 448 208c0-12.3-10.8-32-47.9-50.6C364.9 139.8 314 128 256 128s-108.9 11.8-144.1 29.4C74.8 176 64 195.7 64 208zm192 40c-47 0-89.3 7.6-122.9 19.7C166.3 280.2 208.8 288 256 288s89.7-7.8 122.9-20.3C345.3 255.6 303 248 256 248zM0 208c0-49.6 39.4-85.8 83.3-107.8C129.1 77.3 190.3 64 256 64s126.9 13.3 172.7 36.2c43.9 22 83.3 58.2 83.3 107.8v96c0 49.6-39.4 85.8-83.3 107.8C382.9 434.7 321.7 448 256 448s-126.9-13.3-172.7-36.2C39.4 389.8 0 353.6 0 304V208z"/></svg>
            </div>
              <RouterLink :to="{name: 'Products'}" class="block py-2 px-3 rounded border-0 p-0">Products</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.navitem:hover{
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
}

.router-link-active{
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
}

</style>