<template>
    <div>

    </div>
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