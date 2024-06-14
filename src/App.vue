<template>
  <HeaderComponent />
  <main>
    <HeroComponent />
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
  export default {
    name: 'App',
    components: {
        HeaderComponent,
        HeroComponent
    }
  }
</script>

<style lang="scss" scoped>
main{
    height: 100vh;
    background-color: black;
}
</style>