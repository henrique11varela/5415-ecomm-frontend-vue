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
    <ProductsList></ProductsList>
    <ProductsList></ProductsList>
    <ProductsList></ProductsList>
</template>

<script>
import CardShell from '../layouts/CardShell.vue'
import Item from "../components/Item.vue";
import ProductsList from '../components/ProductsList.vue';
    export default {
        components: {
            CardShell,
            Item,
            ProductsList
        }
    }
</script>

<style scoped>

</style>