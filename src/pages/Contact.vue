<!-- Aqui vai importar todos os componentes para construir a pagina -->


<template>
    <div class="flex flex-wrap justify-center">
        <ContactForm class="w-full md:w-1/2 lg:w-1/2 xl:w-1/4"/>
        <ContactMap class=" w-full md:w-1/2 lg:w-1/2 xl:w-3/4 md:h-full lg:h-full xl:h-full"/>
    </div>
    <div class="flex flex-wrap justify-center">
        <ContactCard v-for="member in members" :key="member.name" :member="member" />
      
    </div>
</template>

<script>
import ContactForm from '../components/contact/ContactForm.vue'
import ContactCard from '../components/Contact/ContactCard.vue'
import ContactMap from '../components/Contact/ContactMap.vue'
import { useMembersStore } from '../store/members.js';
import { mapState } from 'pinia';
export default {
    components: {
        ContactForm,
        ContactCard,
        ContactMap
    },
    computed: {
        ...mapState(useMembersStore, ['members']),
    },
}
</script>

<style scoped></style>