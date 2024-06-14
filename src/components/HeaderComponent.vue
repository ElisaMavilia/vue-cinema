<template>
      <header class="bg-black text-white">
        <nav class=" mt-3 container navbar navbar-expand-lg px-4 text-white">
            <div class="container-fluid text-white">
                <router-link to="/" class="navbar-brand text-white">
                   Cinema Bianca
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    @click="show = !show">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" :class="{ 'show': show }" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(link, index) in menuItems" :key="index">
                            <router-link :to="{ name: link.routeName }" class="nav-link text-white" active-class="active">
                                {{ link.label }}
                            </router-link>
                        </li>

                    </ul>
                    <div class="ms-auto">
                        <a href="http://localhost:8000" class="nav-link">
                            <i class="fa-solid fa-user"></i> <span>Area Riservata</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                menuItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Programmazione',
                    routeName: 'programmazione'
                },
                {
                    label: 'Chi siamo',
                    routeName: 'chi-siamo'
                },
                {
                    label: 'Contattaci',
                    routeName: 'contattaci'
                },
            ],
            show: false
        }
            }
        }
    
</script>

<style lang="scss" scoped>

header{
   
nav{
    height: 90px;
    background-color: #c40a2ff5;
    color: white !important;
    border-radius: 5px;
    /* position: fixed; */
    top: 0;
    width: 100%;
    z-index: 3000;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1200px;
}

}
</style>