import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
    state: () => ({
        toasts: [],
        toastId: 1
    }),

    actions: {

        CreateToast(msg, timespan) {
            this.toasts.push({
                msg, 
                id: this.toastId,
                timespan
            })
            this.toastId++
        },

        DeleteToast(id) {
            this.toasts = this.toasts.filter(item => item.id !== id)
        },

    },
});
