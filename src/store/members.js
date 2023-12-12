import { defineStore } from 'pinia';

export const useMembersStore = defineStore('members', {
    state: () => ({
        members: [
            {
                name: 'Henrique',
                UrlFoto: 'https://avatars.githubusercontent.com/u/79428566?v=4',
                Github: 'https://github.com/henrique11varela',
                isHovered : false
            },
            {
                name: 'Fábio',
                UrlFoto: 'https://avatars.githubusercontent.com/u/117021038?v=4',
                Github: 'https://github.com/fabi0wz',
                isHovered : false
            },
            {
                name: 'Pedro',
                UrlFoto: 'https://avatars.githubusercontent.com/u/123594687?v=4',
                Github: 'https://github.com/PedroNito',
                isHovered : false
            },
            {
                name: 'Gonçalo',
                UrlFoto: 'https://avatars.githubusercontent.com/u/97224333?s=400&u=6a7ce7f7c38e45fd546ba99ab4d92753bfcde7c2&v=4',
                Github: 'https://github.com/GoncaloJMM',
                isHovered : false
            },
            
        ],
    }),

});