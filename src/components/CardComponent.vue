<template>
    <section>
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Titolo</h5>
        <small class="card-text">Durata</small>
        <small class="card-text">Genere</small>
        <small class="card-text">Regia</small>
        <small class="card-text">Recensioni</small>
        <small class="card-text">Oraio/data</small>
        <small class="card-text">Sala</small>
        <small class="card-text">prezzo</small>
      </div>
      <button type="button" class="btn btn-danger">Trailer</button>
      <button type="button" class="btn btn-light">Scheda film</button>
    </div>
  </div>
</div>
    </section>
</template>

<script>
import { computed } from 'vue';
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