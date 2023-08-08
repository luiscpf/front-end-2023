<template>
    <footer class="footer">
      <div class="footer-content">
        <h1>Nome da sua empresa</h1>
        <nav class="footer-nav">
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/erro">Produtos</a></li>
            <li><a href="/erro">Serviços</a></li>
            <li><a href="/erro">Sobre Nós</a></li>
            <li><a href="/erro">Contato</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 5px;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer h1 {
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .footer-nav {
    margin-top: 10px;
  }
  
  .footer-nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  .footer-nav li {
    margin: 0 10px;
  }
  
  .footer-nav a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer-nav a:hover {
    text-decoration: underline;
  }
  </style>
  