<template>
   <section class="pb-5">
        <div class="card mt-4 p-4">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="/images/placeholder.png" class="img-fluid rounded-start mt-2" alt="...">
             </div>
        <div class="col-md-8">
        <div class="card-body d-flex flex-column ps-4 ms-4 text-white">
        <h5 class="card-title">Titolo</h5>
        <small class="card-text">Durata:</small>
        <small class="card-text">Genere:</small>
        <small class="card-text">Regia:</small>
      </div>
      <button type="button" class="btn btn-danger mt-4 ms-4">Scheda film</button><!-- qui va inserita la rotta routerlink -->
    </div>
  </div>
</div>
    </section> 
</template> 

<script>

import { store } from '../store';
    export default {
        name: 'CardComponent',
        data() {
            return {
                store
            }
        },
        computed: {
            getImage() {
                return this.item.image ? store.imgBasePath + this.item.image : '/images/placeholder.png';
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