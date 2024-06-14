<template>
  <HeaderComponent />
  <HeroComponent />
  <MainComponent />
  <router-view></router-view>
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
  export default {
    name: 'App',
    components: {
        HeaderComponent,
        HeroComponent,
        MainComponent,
        FooterComponent
    }
  }
</script>

<style lang="scss" scoped>
  
</style>