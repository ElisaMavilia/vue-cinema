<template>
    <main>
        <div class="container ps-5 text-uppercase">
            <h3 class="pt-4">I film di oggi</h3>
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
    background-color:rgba(0, 0, 0, 0.918);
    color: white;
}
</style>