<template>
    <div>
        <img src="https://picsum.photos/200/300" alt="">
        <h1>Random Image</h1>
        <p>69,69€</p>
        <button class="bg-primary p-2 rounded-lg" @click="testClick">aaaaaaaaaaa</button>
    </div>
</template>

<script>
    export default {
        methods:{
            testClick(){
                alert("clicked!")
            }
        }
    }
</script>

<style scoped>

</style>