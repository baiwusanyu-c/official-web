<template>
  <article class="about-beosin">
    <div class="about-beosion-content card-list">
      <header class="about-beosion-header">
        <h1>About Beosin</h1>
        <p>
          Beosin is a leading global Web 3.0 blockchain security company co-founded by several
          professors from world-renowned universities. We provide integrated blockchain security
          services and products to serve 1 million+ users in the global blockchain ecosystem.
        </p>
      </header>
      <div class="auto-card">
        <img src="@/assets/img/home/about-1.png" alt="" />
        <h4>100+</h4>
        <p>Security experts 40+ PhDs</p>
      </div>
      <div class="auto-card">
        <img src="@/assets/img/home/about-2.png" alt="" />
        <h4>20+</h4>
        <p>Years of cybersecurity experience</p>
      </div>
      <div class="auto-card">
        <img src="@/assets/img/home/about-3.png" alt="" />
        <h4>Formal verification technology</h4>
        <p>On-chain AI data-tracing analysis</p>
      </div>
      <div class="auto-card">
        <img src="@/assets/img/home/about-4.png" alt="" />
        <h4>1Billion+</h4>
        <p>Crypto addresses labeleds</p>
      </div>
      <div class="auto-card">
        <img src="@/assets/img/home/about-5.png" alt="" />
        <h4>85,000+</h4>
        <p>Identified code vulnerabilities</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped>
  .card-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 24px;
    margin-top: 64px;
    row-gap: 40px;
    margin: 0 40px;
  }
  .about-beosion-header {
    grid-column: 1 / span 5;
  }
  .auto-card {
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 48px 30px 30px;
    background: linear-gradient(165deg, #d7f9ff 0%, #daf6ff 13%, #e8fffd 50%, #ffffff 100%);
    border-radius: 16px;
    border: 1px solid #cccccc;
  }
  .auto-card:hover {
    border: 1px solid #44d7b6;
    box-shadow: 0px 4px 8px 0px rgba(194, 194, 194, 0.5);
  }
  .auto-card img {
    width: 52px;
  }
  .auto-card h4 {
    font-size: 20px;
    font-weight: 800;
    color: #1d263b;
    line-height: 24px;
    text-align: center;
  }
  .auto-card p {
    font-size: 18px;
    color: #666666;
    line-height: 24px;
    text-align: center;
  }
  .about-beosin {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 42px;
    position: relative;
    z-index: 1;
  }
  .about-beosion-content {
    width: 1230px;
  }
  .about-beosion-header {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 70px;
    align-items: end;
    position: relative;
  }
  .about-beosion-header h1 {
    font-size: 48px;
    font-weight: bold;
    color: #1d263b;
    line-height: 60px;
    padding-top: 40px;
    border-top: 6px solid #44d7b6;
    width: fit-content;
  }
  .about-beosion-header p {
    color: #666;
    font-size: 16px;
  }

  @media screen and (max-width: 1278px) {
    .card-list {
      grid-template-columns: repeat(3, 1fr);
    }
    .about-beosion-header {
      grid-column: 1/2;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      justify-items: center;
    }
    .about-beosion-header h1 {
      padding-top: 0;
      font-size: 24px;
      /* font-size: 19px;
      padding-top: 12px; */
    }
    .about-beosion-header p {
      font-size: 14px;
      line-height: 1.2;
    }
  }

  @media screen and (max-width: 600px) {
    .about-beosin {
      padding-top: 120px;
    }
    .about-beosion-header p {
      font-size: 12px;
    }
    .card-list {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 12px;
      margin-top: 64px;
      row-gap: 12px;
      margin: 0 20px;
    }
    .auto-card {
      padding: 15px;
      height: 186px;
    }
    .auto-card p {
      font-size: 12px;
    }
    .auto-card h4 {
      font-size: 14px;
    }
    .auto-card img {
      width: 38px;
    }
    .about-beosion-header h1 {
      padding-top: 0;
      font-size: 19px;
      padding-top: 12px;
      top: -75px;
      position: absolute;
    }
  }
</style>
