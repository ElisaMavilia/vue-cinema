<template>
    <main>
        <!-- <div class="container">
            <h2 class="">In Programmazione questa settimana</h2>
            <div class="row">
            <div class="col-12 col-md-3 col-lg-6" v-for="movie in movies" :key="movie.id">
     
   </div>
 </div>
                <div class="text-white">
                    <select class="form-select " aria-label="Default select example">
                    <option selected>Seleziona qualcosa</option>
                    <option value="1">uno</option>
                    <option value="2">due</option>
                    <option value="3">tre</option>
                </select>
                </div>
                
            </div> -->
           
            <CardComponent/> 
    
    </main>
</template>

<script>

    import CardComponent from './CardComponent.vue';
    import { store } from '../store';
    import axios from 'axios';
    export default {
        name: 'MainComponent',
        data() {
            return {
                store,
                movies : [],
            }
        },
        components: {
            CardComponent,
        },
        methods: {
            getData() {
                axios.get(`${this.store.apiBaseUrl}/projections`).then((res) =>  {
                console.log(res.data);
                this.movies = res.data.results;
      });
    },
},
mounted() {
  this.getData();
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