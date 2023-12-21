<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';


const $route = useRoute(); //tenho de usar isto porque quero aplicar o styling ao elemento li e nao ao routerlink em si
//que era o que acontecia ao usar o router-link-active



const isDesktop = ref(window.matchMedia('(min-width: 768px)').matches);

const handleResize = () => {
  isDesktop.value = window.matchMedia('(min-width: 768px)').matches;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

<template>
  <nav>
    <!-- Versao para desktop -->
    <div v-if="isDesktop" class="container mx-auto flex flex-wrap items-center justify-center p-4">
      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex p-2 rounded-lg flex-row md:space-x-8 mt-0 border-0">
          <li class="navitem flex items-center" :class="$route.name === 'Home' ? 'navActive' : ''">
            <div class="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
              </svg>
            </div>
              <RouterLink :to="{name: 'Home'}" class="block py-2 px-3 rounded border-0 p-0">Home</RouterLink>
          </li>
          <li class="navitem flex items-center" :class="$route.name === 'Products' ? 'navActive' : ''">
            <div class="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M64 208c0 7.8 4.4 18.7 17.1 30.3C126.5 214.1 188.9 200 256 200s129.5 14.1 174.9 38.3C443.6 226.7 448 215.8 448 208c0-12.3-10.8-32-47.9-50.6C364.9 139.8 314 128 256 128s-108.9 11.8-144.1 29.4C74.8 176 64 195.7 64 208zm192 40c-47 0-89.3 7.6-122.9 19.7C166.3 280.2 208.8 288 256 288s89.7-7.8 122.9-20.3C345.3 255.6 303 248 256 248zM0 208c0-49.6 39.4-85.8 83.3-107.8C129.1 77.3 190.3 64 256 64s126.9 13.3 172.7 36.2c43.9 22 83.3 58.2 83.3 107.8v96c0 49.6-39.4 85.8-83.3 107.8C382.9 434.7 321.7 448 256 448s-126.9-13.3-172.7-36.2C39.4 389.8 0 353.6 0 304V208z"/>
              </svg>
            </div>
            <RouterLink :to="{name: 'Products'}" class="block py-2 px-3 rounded border-0 p-0">Products</RouterLink>
          </li>
          <li class="navitem flex items-center" :class="$route.name === 'Contacts' ? 'navActive' : ''">
            <div class="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
              </svg>
            </div>
            <RouterLink :to="{name: 'Contacts'}" class="block py-2 px-3 rounded border-0 p-0">Contacts</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Versao para mobile -->	
    <div v-else class="container mx-auto">
      <ul class="font-medium flex flex-row items-center justify-around p-2 rounded-lg">
        <RouterLink class=" flex items-center" :class="$route.name === 'Home' ? 'navActive' : ''" :to="{name: 'Home'}">
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
              </svg>
          </div>
        </RouterLink>
        <RouterLink class=" flex items-center" :class="$route.name === 'Products' ? 'navActive' : ''" :to="{name: 'Products'}">
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M64 208c0 7.8 4.4 18.7 17.1 30.3C126.5 214.1 188.9 200 256 200s129.5 14.1 174.9 38.3C443.6 226.7 448 215.8 448 208c0-12.3-10.8-32-47.9-50.6C364.9 139.8 314 128 256 128s-108.9 11.8-144.1 29.4C74.8 176 64 195.7 64 208zm192 40c-47 0-89.3 7.6-122.9 19.7C166.3 280.2 208.8 288 256 288s89.7-7.8 122.9-20.3C345.3 255.6 303 248 256 248zM0 208c0-49.6 39.4-85.8 83.3-107.8C129.1 77.3 190.3 64 256 64s126.9 13.3 172.7 36.2c43.9 22 83.3 58.2 83.3 107.8v96c0 49.6-39.4 85.8-83.3 107.8C382.9 434.7 321.7 448 256 448s-126.9-13.3-172.7-36.2C39.4 389.8 0 353.6 0 304V208z"/>
              </svg>
          </div>
        </RouterLink>
        <RouterLink class=" flex items-center" :class="$route.name === 'Contacts' ? 'navActive' : ''" :to="{name: 'Contacts'}">
          <div class="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
              </svg>
          </div>
        </RouterLink>
      </ul>
    </div>

  </nav>
</template>


<style scoped>

.navitem:hover{
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);

}

.navActive {
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
}

/*==================== HOVER ANIMATION ====================*/

.navitem {
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.navitem::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-radius: 5px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  pointer-events: none;
}

.navitem::before {
  transition: border-color 0.5s;
}

.navitem:hover::before {
  border-color: #FDA8CF;
}

.navitem:hover::after {
  border-color: #FDA8CF;
  animation: colorCycle 5s infinite linear;
}

@keyframes colorCycle {
  0% {
    border-color: #FDA8CF;
  }
  20% {
    border-color: #F3CE5E;
  }
  40% {
    border-color: #7BE8B2;
  }
  60% {
    border-color: #A6A6D2;
  }
  80% {
    border-color: #FFA07A;
  }
  100% {
    border-color: #FDA8CF;
  }
}

/*==================== ICON ANIMATION ====================*/
.navitem svg {
  transition: transform 0.5s ease-in-out;
}

.navitem:hover svg {
  animation: moveBackAndForth 1s ease-in-out infinite;
}

@keyframes moveBackAndForth {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}



</style>