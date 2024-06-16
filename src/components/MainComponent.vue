<template>
    <main>
        <div class="container ps-5 text-uppercase">
            <h3 class="pt-5">In programmazione oggi</h3>
            <CardComponent />
        </div>
    </main>
</template>

<script>

    import CardComponent from './CardComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent,
        }
    }
</script>

<style lang="scss" scoped>
main{
    width: 100%;
    background-color: #060b16;
    color: white;
    
}
</style>