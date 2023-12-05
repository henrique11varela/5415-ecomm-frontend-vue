<!-- Aqui vai importar todos os componentes para construir a pagina -->


<template>
    <div>
        <ContactForm />
        <div class="flex flex-wrap justify-center">
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </div>
        
    </div>
</template>

<script>
import ContactForm from '../../components/contact/ContactForm.vue'
import ContactCard from '../../components/contact/ContactCard.vue'
    export default {
        components: {
            ContactForm,
            ContactCard
        }
    }
</script>

<style scoped>

</style>