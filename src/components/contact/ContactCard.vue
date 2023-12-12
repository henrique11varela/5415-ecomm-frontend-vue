<template>
  <div class="max-w-xs mx-2 my-4 bg-white shadow-md rounded-lg overflow-hidden">
    <div class="flex items-center justify-center mt-6">
      <img class="h-20 w-20 rounded-full object-cover"
        :src= "member.UrlFoto" 
        alt="Nome da Pessoa">
    </div>
    <div class="px-6 py-4 text-center">
      <div class="font-bold text-xl mb-2">{{ member.name }}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ContactCard',
  props: {
    member: {
      type: Object,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped></style>