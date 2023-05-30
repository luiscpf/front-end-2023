<template>
  <main>
    <div class="background">
      <section class="section">
        <div class="container">
          <h1 class="title is-1 has-text-centered">Come Spyce up your New Years</h1>
          <div class="columns">
            <div class="column is-one-quarter">
              <img :src="party1" alt="Image 1">
              <img :src="party2" alt="Image 2">
            </div>
            <div class="column is-half">
              <div class="content">
                <p class="has-text-justified has-text-white">Welcome to Club Balsamo and Spice's Ultimate New Year's Eve Party! Join us for a dazzling night of nonstop merriment as we say goodbye to the old and hello to the future in style. Our top-tier DJs and live artists will provide an alluring environment, throbbing sounds, and chart-topping tunes. Our well equipped bars provide carefully made drinks and premium spirits. Prepare for a spectacular fireworks show that will dazzle the night sky at midnight. There are only a few tickets left for this exclusive event, so secure your seat immediately!</p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <img :src="party3" alt="Image 3">
              <img :src="party4" alt="Image 4">
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container has-text-centered">
          <h1 class="title is-3 pulsate">Location</h1>
          <div class="columns is-centered is-vcentered">
            <div class="column is-narrow">
              <a href="https://www.google.com/maps/dir//Tuatapere+Hump+Ridge+Track+31+Orawia+Road,+Tuatapere+9620,+New+Zealand/"
                  target="_blank">
                <span class="icon is-large wavy pulsate" style="margin-bottom: -0.5rem;">
                  <ion-icon  name="compass-outline"></ion-icon>
                </span>
              </a>
            </div>
            <div class="column">
              <a href="https://www.google.com/maps/dir//Tuatapere+Hump+Ridge+Track+31+Orawia+Road,+Tuatapere+9620,+New+Zealand/"
                  target="_blank">
                <p class="subtitle is-5 pulsate">T. Hump Ridge T., New Zealand</p>
              </a>
            </div>
          </div>
          <figure class="image is-4by3">
              <img :src="maps" alt="Example Image" class="zoom-in">
          </figure>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>

  import party1 from '@/assets/home/party1.jpg';
  import party2 from '@/assets/home/party2.jpg';
  import party3 from '@/assets/home/party3.jpg';
  import party4 from '@/assets/home/party4.jpg';
  import maps from '@/assets/home/maps.jpg';

</script>

<style scoped>

/* *{
  background-color: #351231;
} */

.section {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.title.is-1 {
  padding: 0.5rem;
  margin-bottom: 2rem;
  color: transparent;
   /* Puts effect on the text and not in background */
   -webkit-background-clip: text;
    background-clip: text;
    background-size: 400%;
    animation: move 5s ease infinite;
    background-image: linear-gradient( 68.7deg, rgba(29,173,235,1) 20%, rgba(137,149,250,1) 40%, rgba(229,109,212,1) 60%, rgba(255,68,128,1) 80%, rgba(255,94,0,1) 100% );
}

@keyframes move {
    0%,100%{
        background-position: 200% 0%;
    }

    50%{
        background-position: 0% 200%;
    }
} 

.columns {
  margin-bottom: 2rem;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.column.is-one-quarter {
  align-items: flex-start;
 
}

.content {
  height: 100%;
  display: flex;
  align-items: center;
}

/**IMAGENS EFEITOS */

.column.is-one-quarter img {
  /* animation border */
  border: 0.2rem solid #fff;
  box-shadow: 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem #bc13fe,
              0 0 0.8rem #bc13fe,
              0 0 2.8rem #bc13fe,
              inset 0 0 1.3rem #bc13fe;
  animation: zoom-in 2s ease-out;
    
}

/**LOCATION */

.title.is-3 {
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  letter-spacing: 2px;
  animation: pulsate 1.5s infinite alternate;
}

.columns.is-vcentered {
  align-items: center;
}


.column.is-narrow {
  flex-shrink: 0;
}

.icon.is-large {
  font-size: 48px;
  color: white;
  animation: wavy 2s ease-out infinite, pulsate 1.5s infinite alternate ;
  
}

.subtitle.is-5 {
  margin-top: 0.5rem;
  font-size: 1.25rem;
  animation: pulsate 1.5s infinite alternate; 
}

.image.is-4by3 {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-top: 75%;
  object-fit: cover;
   box-shadow: 0 0 .2rem #fff,
        0 0 .2rem #fff,
        0 0 2rem #bc13fe,
        0 0 0.8rem #bc13fe,
        0 0 2.8rem #bc13fe,
        inset 0 0 1.3rem #bc13fe;
  animation: zoom-in 2s ease-out;

}

.image.is-4by3 img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
    /* animation border */
  border: 0.2rem solid #fff;
  box-shadow: 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem #bc13fe,
              0 0 0.8rem #bc13fe,
              0 0 2.8rem #bc13fe,
              inset 0 0 1.3rem #bc13fe;
  animation: zoom-in 0.5s ease-out;
    
  
}

@keyframes wavy {
  0%,
  40%,
  100% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(-20px);
  }
}

@keyframes pulsate {
  0% {
    color: white;
  }

  50% {
    color: #bc13fe;
  }

  100% {
    color: white;
  }
}

@keyframes zoom-in {
  0% {
    transform: scale(1.4);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
}
}

@media screen and (max-width: 1023px) {
  .columns {
    flex-direction: column;
  }

  .column.is-one-quarter {
    align-items: center;
  }

  .column.is-one-quarter img {
    display: block; /**ocupar 100% width */
    width: 100%;
    margin-bottom: 1rem; /**criar espaço entre imagens */
  }

  .column.is-one-quarter img:last-child {
    margin-bottom: 0; /**remover espaço extra na ultima imagem */
  }

  .column.is-one-quarter,
  .column.is-half {
    text-align: center;
  }
}

</style>