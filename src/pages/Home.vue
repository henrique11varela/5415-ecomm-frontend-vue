<template>
    <div class="flex justify-center items-center">
        <CardShell class="w-52" shiny tiltable>
            <Item>
            </Item>
        </CardShell>
        <CardShell class="w-52 ms-10" tiltable>
            <h1>Example</h1>
        </CardShell>
    </div>
</template>

<script>
import CardShell from '../layouts/CardShell.vue'
import Item from "../components/Item.vue";
    export default {
        components: {
            CardShell,
            Item
        }
    }
</script>

<style scoped>

</style>