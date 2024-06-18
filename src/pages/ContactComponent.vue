<template>
     <section >
        <div id="contact" class="container ps-5">
            <h3 class="text-uppercase pt-4 pb-4">Contattaci</h3>
            <div class="row">
        <form class="col-12 text-start text-white">
            <div class="mb-3">
                <input type="text" class="form-control border-0 border-bottom" placeholder="Nome"  required>
                
            </div>
            <div class="mb-3">
                <input type="text" class="form-control border-0 border-bottom" placeholder="Cognome"  required>
                
            </div>
            <div class="mb-3">
                <input type="email" class="form-control border-0 border-bottom" placeholder="Email"  required>
            </div>
            <div class="mb-3">
                <label for="message">Messaggio</label>
                <textarea id="message" class="form-control border-0 border-bottom" cols="30" rows="10" required></textarea>
            </div>
            <button class="btn btn-lg btn-danger text-white" type="submit">Invia</button>
        </form>
         </div>
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
    background-color: #060b16 ;
    #contact{
       background-color: #060b16;
       width: 100%;
       color: white;
       padding: 20px;
       border-left: 4px solid #c40a2ff5;
    }
    input,textarea{
        background-color: lightgrey;
    }
    
}
</style>

