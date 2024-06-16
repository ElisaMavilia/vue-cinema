<template>
    <div id="main">

    </div>
</template>

<script>
import { store } from '../store';
import CardComponent from '../components/CardComponent.vue';
export default {
    name: 'MovieList',
    components: {
        CardComponent
    },
    data() {
        return {
            store,
          
        }
    }
}

</script>

<style lang="scss" scoped>
#main{
    background-color: #051025;
}

</style>