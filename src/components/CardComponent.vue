<template>
   <section>
        <div class="card mt-4 p-4">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="/public/images/placeholder.png" class="img-fluid rounded-start mt-2" alt="...">
             </div>
        <div class="col-md-8">
        <div class="card-body d-flex flex-column ps-4">
        <h5 class="card-title">Titolo</h5>
        <small class="card-text">Durata</small>
        <small class="card-text">Genere</small>
        <small class="card-text">Regia</small>
        <small class="card-text">Recensioni</small>
        <small class="card-text">Orario/data</small>
        <small class="card-text">Sala</small>
        <small class="card-text">prezzo</small>
      </div>
      <button type="button" class="btn btn-danger ms-3">Trailer</button>
      <button type="button" class="btn btn-light ms-3">Scheda film</button>
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

    img{
        aspect-ratio: 1/1;
    }
}
</style>