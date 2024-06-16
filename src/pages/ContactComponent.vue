<template>
     <section >
        <div id="contact" class="container ps-5">
            <h2 class="text-uppercase pb-4">Contattaci</h2>
        </div>
     </section>
</template>

<script>

import { store } from '../store';

    export default {
        name: 'ContactComponent',
        data() {
            return {
                store
            }
        },
        
    }
    
</script>

<style lang="scss" scoped>


section{
    width: 100%;
    background-color: black ;
    #contact{
       background-color: rgba(0, 0, 0, 0.865);
       width: 100%;
       color: white;
       padding: 20px;
       border-left: 4px solid #c40a2ff5;
    }
}
</style>
