<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex justify-center">
    <h1>Teste</h1>
  </div>

  <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
    <img class="w-full h-64 object-cover" src="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&auto=format&w=2270&ar=2:1&fit=crop" alt="Card image">
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Look at him, so polite</div>
        <p class="text-gray-700 text-base">
            This card looking kinda dope NGL.
        </p>
    </div>
    <div class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Amouranth</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag2</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Tag3</span>
    </div>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
