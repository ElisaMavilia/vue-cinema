<template>
    <main>
        <div class=" container ps-5 text-uppercase">
            <div class="d-flex justify-content-between align-content-center align-items-center">
                <span><h3 class="pt-5">In programmazione questa settimana</h3></span>
                <div class="text-white">
                    <select class="form-select " aria-label="Default select example">
                    <option selected>Seleziona la fascia oraria</option>
                    <option value="1">Pomeriggio</option>
                    <option value="2">Sera</option>
                    <option value="3">Notte</option>
                </select>
                </div>
                
            </div>
           
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

    select{
        border: 1px solid #c40a2ff5;
        background-color: #060b16;
        color: white;

    select:focus{
        color: white;
    }
    }
}
</style>