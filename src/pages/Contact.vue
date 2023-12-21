<template>
    <div class="">
        <div class="w-full pb-2">
            <img class="w-full h-20"
                src="https://t3.ftcdn.net/jpg/04/91/00/20/360_F_491002060_jk8W8UA7HFoYhshEKyVjkqKKg9sshLpE.jpg" alt="">
        </div>
        <div class="md:flex md:max-w-2xl md:w-full md:mx-auto">
            <ContactForm class="" />
            <ContactMap class="" />
        </div>
        <div class="flex flex-row flex-wrap justify-center">
            <ContactCard class="card cursor-pointer" v-for="member in members" :key="member.name" :member="member"
                @click="redirectTo(member.Github)" @mouseover="handleMouseOver(member)" @mouseout="handleMouseOut(member)"
                :class="{ 'hovered': member.isHovered }" />
        </div>
    </div>
</template>

<script>
import ContactForm from '../components/Contact/ContactForm.vue'
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
    methods: {
        redirectTo(member) {
            window.open(member)
        },
        handleMouseOver(member) {
            member.isHovered = true;
        },
        handleMouseOut(member) {
            member.isHovered = false;
        },
    }
}
</script>

<style scoped>
.card {
    width: 200px;
    height: 150px;
    transition: transform 0.3s;
}

.card.hovered {
    transform: scale(1.1);
}
</style>