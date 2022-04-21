<template>
  <div class="trace-top h-26.5vw">
    <header class="top-content flex justify-center items-center text-[#fff]">
      <div class="top-left">
        <h1 class="text-8.1vw">Trace</h1>
        <p class="text-1.3vw leading-1.8vw">
          A visualization product that focuses on the security of users' wallet transactions,
          helping users visualize and trace the flow of funds, monitor suspicious addresses, and
          assist in recovering on-chain assets.
        </p>
      </div>
      <div class="top-img-content relative">
        <img src="@/assets/img/trace/top-img.png" class="absolute top-img w-full" alt="" />
      </div>
    </header>
  </div>
  <main class="trace-main bg-white pt-6.3vw">
    <div class="trace-content w-77.6vw mx-auto">
      <h3 class="text-3vw pb-2vw main-title">Features</h3>
      <ul class="grid grid-cols-2 gap-7vw">
        <li class="block w-full">
          <img class="main-img" src="@/assets/img/trace/main-1.png" alt="" />
          <h4 class="main-block-title">Stolen funds tracing</h4>
          <p class="main-p">
            Visualize and trace the movement of funds from the hacker's address to the money
            laundering addresses or to the exchanges.
          </p>
        </li>
        <li class="block w-full">
          <img class="main-img" src="@/assets/img/trace/main-2.png" alt="" />
          <h4 class="main-block-title">Stolen funds tracing</h4>
          <p class="main-p">
            Visualize and trace the movement of funds from the hacker's address to the money
            laundering addresses or to the exchanges.
          </p>
        </li>
        <li class="block w-full">
          <img class="main-img" src="@/assets/img/trace/main-3.png" alt="" />
          <h4 class="main-block-title">Stolen funds tracing</h4>
          <p class="main-p">
            Visualize and trace the movement of funds from the hacker's address to the money
            laundering addresses or to the exchanges.
          </p>
        </li>
        <li class="block w-full">
          <img class="main-img" src="@/assets/img/trace/main-4.png" alt="" />
          <h4 class="main-block-title">Stolen funds tracing</h4>
          <p class="main-p">
            Visualize and trace the movement of funds from the hacker's address to the money
            laundering addresses or to the exchanges.
          </p>
        </li>
      </ul>
    </div>
  </main>
  <trace-form> </trace-form>
</template>

<script setup lang="ts">
  import TraceForm from './includes/trace-form.vue'
</script>
<script lang="ts">
  export default { name: 'TrackPage' }
</script>

<style scoped>
  .main-img {
    width: 22.6%;
  }
  .main-block-title {
    margin-top: 2vw;
    font-size: 1.7vw;
    font-weight: bold;
  }
  .main-p {
    font-size: 1.3vw;
    line-height: 2vw;
  }
  .trace-top {
    background: url('@/assets/img/trace/top-bg.png') no-repeat;
    background-size: cover;
    background-position: center;
  }
  .main-title {
    border-bottom: 5px solid #01e4b7;
    width: fit-content;
  }
  .top-left {
    width: 42vw;
  }
  .top-content {
    height: 100%;
  }
  .top-img {
    bottom: -20px;
  }
  .top-img-content {
    width: 24.5vw;
    height: 100%;
  }
</style>
