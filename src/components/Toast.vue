<template>
    <div class="bg-primary text-light p-2 mt-1 rounded-lg">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                required: true
            },
            timespan: {
                type: Number,
                required: true
            }
        },
        methods:{
            selfdestruct(){
                this.$emit('deletetoast')
            }
        },
        mounted(){
            setTimeout(this.selfdestruct, (this.timespan * 1000))
        }
    }
</script>

<style lang="scss" scoped>

</style>
