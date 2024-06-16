<template>
    <main>
        <div class="container ps-5 text-uppercase">
            <h2 class="pt-4">I film di oggi</h2>
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
    background-color: black;
    color: white;
}
</style>