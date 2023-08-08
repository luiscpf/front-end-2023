<template>
  <main>
    <div class="background">
      <section class="section">
        <div class="container">
          <h1 class="title is-1 has-text-centered">Lets Save the Planet</h1>
          <div class="columns">
            <div class="column is-one-quarter">
              <img :src="s1" alt="Image 1">
              <img :src="s2" alt="Image 2">
            </div>
            <div class="column is-half">
              <div class="content">
                <p class="has-text-justified has-text-white has-text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rem debitis enim assumenda vitae et ad aut, ut delectus sunt fuga iste blanditiis neque doloribus illum possimus ullam? Reiciendis, inventore minus debitis cumque animi, quidem corrupti rerum maiores nobis earum sint dolores! Exercitationem earum necessitatibus sit obcaecati assumenda autem distinctio?</p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <img :src="s3" alt="Image 3">
              <img :src="s4" alt="Image 4">
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container has-text-centered">
          <h1 class="title is-3 pulsate">Come Help us at this location</h1>
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

  import s1 from '@/assets/s1.jpg';
  import s2 from '@/assets/s2.jpg';
  import s3 from '@/assets/s3.jpg';
  import s4 from '@/assets/s4.jpg';
  import maps from '@/assets/maps.jpg';

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
              0 0 2rem #71fe13,
              0 0 0.8rem #2efe13,
              0 0 2.8rem #13fe4e,
              inset 0 0 1.3rem #13fe90;
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
        0 0 2rem #71fe13,
        0 0 0.8rem #2efe13,
        0 0 2.8rem #13fe4e,
        inset 0 0 1.3rem #13fe90;
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
              0 0 2rem #71fe13,
              0 0 0.8rem #2efe13,
              0 0 2.8rem #13fe4e,
              inset 0 0 1.3rem #13fe90;
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
    color: rgb(109, 172, 9);
  }

  50% {
    color: #13fe3a;
  }

  100% {
    color: rgb(157, 233, 17);
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