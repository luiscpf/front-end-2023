<template>
    <div class="home">
  
      <main>
            <h1>Carbon Footprint Calculator</h1>
            <section class="hero">
                <h2>Discover your personal carbon footprint</h2>
                <p>Enter information about your lifestyle to calculate your carbon footprint</p>
                <router-link to="/carbon" class="btn btn-animate">Get started now</router-link>
            </section>
    
            <section class="features">
            <div class="feature">
                <img src="@/assets/images/habitos_de_transporte.jpg" alt="Ícone de transporte" class="feature-img">
                <h3>Transportation Habits</h3>
                <p>Provide information on how you commute daily and the mode of transportation used.</p>
            </div>
    
            <div class="feature">
                <img src="@/assets/images/uso_de_energia.jpg" alt="Ícone de uso de energia" class="feature-img">
                <h3>Energy Usage</h3>
                <p>Provide information on how you consume energy at home or at work.</p>
            </div>
    
            <div class="feature">
                <img src="@/assets/images/escolhas_alimentares.jpg" alt="Ícone de escolhas alimentares" class="feature-img">
                <h3>Escolhas alimentares</h3>
                <p>Provide information about your diet and food preferences.</p>
            </div>
            </section>
        </main>
    </div>
  
</template>
  

  
<style>
  /* Reset de estilos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Estilos globais */
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  
  .home {
    padding-top: 60px; /* Espaço superior para acomodar a navbar */
  }
  
  header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  h1 {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .hero {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .hero h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .hero p {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
  }
  
  .btn {
    display: inline-block;
    padding: 12px 24px;
    font-size: 18px;
    color: #fff;
    background-color: #4285f4;
    border-radius: 4px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  .btn:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #1a73e8;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
    z-index: -1;
  }
  
  .btn:hover:after {
    transform: translateX(0);
  }
  
  .features {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }
  
  .feature {
    text-align: center;
    width: 300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s ease-in-out;
  }
  
  .feature:hover {
    transform: translateY(-10px);
  }
  
  .feature-img {
    width: 200px;
    height: 120px;
    margin-bottom: 20px;
    transition: transform 0.5s ease-in-out;
  }
  
  .feature-img:hover {
    transform: scale(1.1);
  }
  
  .feature h3 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .feature p {
    font-size: 16px;
    color: #666;
  }
  
  footer {
    text-align: center;
    padding: 20px 0;
    background-color: #ddd;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  footer p {
    font-size: 14px;
    color: #666;
  }
  
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
  