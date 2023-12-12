import { defineStore } from 'pinia';

export const useMembersStore = defineStore('members', {
    state: () => ({
        members: [
            {
                name: 'Henrique',
                UrlFoto: '',
                Github: ''
            },
            {
                name: 'Fábio',
                UrlFoto: '',
                Github: ''
            },
            {
                name: 'Pedro',
                UrlFoto: '',
                Github: ''
            },
            {
                name: 'Gonçalo',
                UrlFoto: '',
                Github: ''
            },
            
        ],
    }),

});