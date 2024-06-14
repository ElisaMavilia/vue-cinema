<template>
    <section id="hero">
    <div class="hero-content">
      <h1>Cinema Bianca</h1>
      <p>Your ultimate movie experience</p>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'HeroComponent',
    }
</script>

<style lang="scss" scoped>
    #hero{
        width: 100%;
        height: 550px;
        background-image: url(../public/images/luxe-1920-1.jpg);
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-align: center;
    }
  #hero::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); // Overlay with transparency
    z-index: 1;
  }
  .hero-content {
    position: relative;
    z-index: 2; // Ensure it is above the overlay
  }

  h1 {
    font-size: 3rem;
    margin-top: 9rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.79);
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
</style>