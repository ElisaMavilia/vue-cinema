<template>
   <section class="pb-5">
       <!--  <div class="card mt-4 p-4">
            <div class="row g-0">
                <div class="col-md-4">
                <img :src="getImage" class="img-fluid rounded-start mt-2" :alt="item.title">
             </div>
        <div class="col-md-8">
        <div class="card-body d-flex flex-column ps-4 ms-4 text-white">
        <h5 class="card-title">{{item.title}}</h5>
        <small class="card-text">Durata: {{item.duration}} minuti</small>
        <small class="card-text">Genere: {{item.genre}}</small>
        <small class="card-text">Regia: {{item.director}}</small>
      </div>
      <RouterLink :to="{ name: 'single-movie', params: { 'id': item.id } }" class="btn btn-warning">Scheda Film</RouterLink>
    </div>
  </div>
</div> -->
    </section> 
</template> 

<script>

import { store } from '../store';
    export default {
        name: 'CardComponent',
        props: ['item'],
        data() {
            return {
                store
            }
        },
        computed: {
            getImage() {
                /* return this.item.image ? store.imgBasePath + this.item.image : '/images/placeholder.png'; */
            }
        }
    }

</script>
<style lang="scss" scoped>
.card{
    max-width: 540px;
    background-color: #060b16;
    .card-body{
        border: 1px solid grey;
    }
    img{
        aspect-ratio: 1/1;
    }
   
}

</style>