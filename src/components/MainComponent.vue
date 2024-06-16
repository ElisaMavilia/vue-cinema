<template>
    <main>
        <div class="container ps-5">
            Qui vanno le card della homepage
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