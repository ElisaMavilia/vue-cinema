<template>
    <section>
        <div id="about" class="container ps-5">
            <h2 class="pb-4 text-uppercase" >La nostra storia</h2>
           
        <p>Fondato nel 1960, il Cinema Bianca è stato un punto di riferimento per gli amanti del cinema nella nostra comunità per oltre sei decenni. Situato nel cuore della città, il nostro cinema ha ospitato numerose première, eventi speciali e proiezioni esclusive. Con un'attenzione particolare alla qualità dell'esperienza cinematografica, il Cinema Bianca è rinomato per il suo schermo all'avanguardia, il suono surround di alta qualità e i comodi posti a sedere.</p>

       <p>Negli anni '70, il Cinema Bianca ha ampliato le sue strutture per includere più sale di proiezione, offrendo una varietà di film per soddisfare i gusti di tutti. Durante gli anni '80 e '90, il cinema ha subito diverse ristrutturazioni per rimanere aggiornato con le ultime tecnologie e tendenze nel settore cinematografico.</p> 

        <p>Oggi, il Cinema Bianca continua a essere un luogo dove la magia del cinema prende vita. Con un mix di film di successo, classici senza tempo e pellicole indipendenti, ci impegniamo a offrire un'esperienza cinematografica indimenticabile per tutti i nostri visitatori.</p>
        </div>
    </section>
    </template>

<script>
    export default {
        name: 'AboutComponent'
    }
</script>

<style lang="scss" scoped>
section{
    width: 100%;
    background-color: black ;
    #about{
       background-color: rgba(0, 0, 0, 0.865);
       width: 100%;
       color: white;
       padding: 20px;
       border-left: 4px solid #c40a2ff5;

    img{
        width: 80%;
    }
    }
}
</style>