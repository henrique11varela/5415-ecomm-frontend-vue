<template>
    <div class="toastgroup">
        <Toast v-for="t in toasts" :key="t.id" :id="t.id" :msg="t.msg" :timespan="t.timespan" @deletetoast="DeleteToast(t.id)" />
    </div>
</template>

<script>
import Toast from "./Toast.vue";
import { useToastStore } from "../store/toast.js";
import { mapState, mapActions } from "pinia";

export default {
    computed: {
        ...mapState(useToastStore, ['toasts'])
    },
    methods: {
        ...mapActions(useToastStore, ['DeleteToast'])
    },
    components: {
        Toast
    }
}
</script>

<style scoped>
.toastgroup {
    z-index: 60;
    left: 50%;
    transform: translateX(-50%);
    @apply fixed bottom-4;
}
</style>
