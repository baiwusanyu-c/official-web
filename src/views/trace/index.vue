<template>
  <div class="trace-top">
    <header class="auto-content flex text-[#fff]">
      <h1 class="trace-top-h1">Cryptocurrency Tracing</h1>
      <p class="top-text">
        For cryptocurrency been stolen, blackmailed, transferred into Tonado Cash
      </p>
      <div class="top-data">
        <img src="@/assets/img/trace/top-1.svg" alt="" />
        <span class="text-[36px] ml-[20px]">$10B+</span>
        <span class="text-[24px] ml-[20px]">Recovered for 1,000+ clients</span>
      </div>
      <be-button custom-class="contact-btn h-btn-txt-black " size="large" @click="toForm">
        <span class="font-format text-2xl leading-loose">
          {{ $t('lang.contactBtn') }}
        </span>
      </be-button>
    </header>
  </div>
  <main class="trace-main">
    <div class="trace-content auto-content">
      <h2 class="main-title">Beosin Tracing</h2>
      <div class="service-desc">
        <img src="@/assets/img/trace/service.png" class="sv-img" alt="" />
        <div class="sv-right">
          <p class="sv-text">
            Beosin Tracing helps clients prevent from cryptocurrency threat such as scam, ransom,
            assets been transferred into Tornado Cash and other security incidents and investigate
            the theft case.
          </p>
          <p class="sv-text">
            With a full range of capabilities the Tracing service can be used to assist the clients
            to recover their lost cryptocurrencies. It covers AML Risk Assessment, Transaction
            Analysis, Crypto Address Monitoring, Real-time Intelligence Notification, and
            Cryptocurrency Forensics Report that can be used by law enforcement.
          </p>
        </div>
      </div>
      <ul class="grid grid-cols-3 sv-grid gap-x-[15px] gap-y-[32px] feture-list">
        <li class="block block-1">
          <img class="main-img" src="@/assets/img/trace/sv-1.png" alt="" />
          <h3 class="main-block-title">AML Risk Assessment</h3>
          <p class="main-p">
            Through AML Risk Assessment, clients can assess the risk of each wallet address before
            performing crypto transactions to ensure AML compliance.
          </p>
        </li>
        <li class="block block-2">
          <img class="main-img" src="@/assets/img/trace/sv-2.png" alt="" />
          <h3 class="main-block-title">Crypto Address Monitoring</h3>
          <p class="main-p">
            Hackers often move funds from one address to another to hide their tracks. Crytpo
            Address Monitoring can monitor suspicious crypto addresses in real-time. When a transfer
            is initiated, new addresses are immediately tagged and stored in our database to be
            monitored.
          </p>
        </li>
        <li class="block block-3">
          <img class="main-img" src="@/assets/img/trace/sv-3.png" alt="" />
          <h3 class="main-block-title">Transaction Analysis</h3>
          <p class="main-p">
            Transaction Analysis feature can help find the final destination of stolen crypto funds,
            regardless of the complexity of transactions. With a library containing 300+ millions
            tagged addresses, we can track and analyze mixers like Tornado Cash to discover the
            destination through Big Data analysis and Artificial Intelligence algorithms.
          </p>
        </li>
        <li class="block block-4">
          <img class="main-img" src="@/assets/img/trace/sv-4.png" alt="" />
          <h3 class="main-block-title">Real-time Intelligence Notification</h3>
          <p class="main-p">
            Whenever stolen funds are deposited to an exchange address, Beosin can notify victims
            immediately.
          </p>
        </li>
        <li class="block block-last col-span-2">
          <img class="main-img" src="@/assets/img/trace/sv-5.png" alt="" />
          <h3 class="main-block-title">Forensics Analysis Report</h3>
          <p class="main-p">
            The Tracing service can generate a report containing all forensic information of an
            investigated crypto transaction. It includes specific crypto addresses, transactions
            involved, wallets, entities and links between them to explore transactional relationship
            and uncover suspicious activities. This type of report findings can be used to assist
            law enforcement organizations for their relevant investigation and actions.
          </p>
        </li>
      </ul>
    </div>
    <div class="trace-content auto-content">
      <h2 class="main-title">Successful Stories</h2>
      <ul class="grid grid-cols-2 store-grid gap-y-[18px] mt-[60px]">
        <li class="store store-1">
          <div class="store-info">
            <img class="store-img" src="@/assets/img/trace/stories.png" alt="" />
            <p class="store-p">
              A FIL coin staking node was exploited. The hacker modified the node address and
              transferred unfrozen cryptocurrencies via Tornado Cash. Beosin security team was able
              to track the stolen cryptocurrency transactions and their final destinations.
            </p>
          </div>
        </li>
        <li class="store store-2">
          <div class="store-info">
            <img class="store-img" src="@/assets/img/trace/stories.png" alt="" />
            <p class="store-p">
              In a “rug pull” scan on an Ethereum project, Beosin’s team help the client analyze
              fund flows, lock the target address, assist the client to report to the law
              enforcement and issue a forensic report.
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="trace-content auto-content">
      <h2 class="main-title">Process</h2>
      <ul class="process-content">
        <li class="process">
          <img class="process-img" src="@/assets/img/trace/p-1.svg" alt="" />
          <h3 class="process-title">Case Communication</h3>
          <div class="order">01</div>
        </li>
        <li class="process">
          <img class="process-img" src="@/assets/img/trace/p-2.svg" alt="" />
          <h3 class="process-title">Analyzing fund flow</h3>
          <div class="order">02</div>
        </li>
        <li class="process">
          <img class="process-img" src="@/assets/img/trace/p-3.svg" alt="" />
          <h3 class="process-title">Targeting the suspects</h3>
          <div class="order">03</div>
        </li>
        <li class="process">
          <img class="process-img" src="@/assets/img/trace/p-4.svg" alt="" />
          <h3 class="process-title">Targeting the money</h3>
          <div class="order">04</div>
        </li>
        <li class="process">
          <img class="process-img" src="@/assets/img/trace/p-5.svg" alt="" />
          <h3 class="process-title">Issuing forensic reports</h3>
          <div class="order">05</div>
        </li>
      </ul>
    </div>
    <trace-form> </trace-form>
  </main>
</template>

<script setup lang="ts">
  import TraceForm from './includes/trace-form.vue'
  import { scale } from '@/utils/scale'
  import { onMounted, onUnmounted } from 'vue'
  const toForm = (): void => {
    document.querySelector('.trace-form').scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  onMounted(() => {
    const unbind = scale(
      [
        [0, 750],
        [750, 1260],
      ],
      document.querySelector('.be-main')
    )
    onUnmounted(unbind)
  })
</script>
<script lang="ts">
  export default { name: 'TracePage' }
</script>

<style scoped>
  .process-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 100px;
  }
  .process-content .process {
    background: url('@/assets/img/trace/p-bg.png') no-repeat center 28px,
      linear-gradient(165deg, #dddddd 0%, #e7e7e7 17%, #f2f2f2 50%, #ffffff 100%);
    height: 400px;
    width: 232px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid #d7d7d7;
  }
  .process-content .process:hover {
    background: url('@/assets/img/trace/p-bg.png') no-repeat center 28px #fff;
    box-shadow: 4px 4px 8px 0px rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    border: 1px solid #1cd2a9;
  }
  .order {
    width: 36px;
    height: 36px;
    border: 2px solid #1cd2a9;
    font-size: 20px;
    font-weight: bold;
    color: #15263a;
    text-align: center;
    line-height: 36px;
    margin-top: 24px;
    border-radius: 50%;
  }
  .process-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-top: 88px;
  }
  .process-title {
    margin-top: 70px;
    font-size: 20px;
    font-weight: bold;
    color: #1d263b;
    line-height: 28px;
    width: 196px;
    text-align: center;
  }
  .trace-content:not(:first-child) {
    margin-top: 160px;
  }
  .store-info {
    width: 550px;
    min-height: 212px;
    border-radius: 4px;
    border: 1px solid #1cd2a9;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 40px;
    padding: 6px 20px 6px 32px;
  }
  .store-p {
    font-size: 18px;
    font-weight: 400;
    color: #cccccc;
    line-height: 1.2;
    margin-left: 20px;
  }
  .store-img {
    width: 60px;
    height: 60px;
  }
  .store {
    height: 600px;
    position: relative;
    padding: 0 28px;
  }
  .store-1 {
    background: url('@/assets/img/trace/stories-bg-1.png') no-repeat;
  }
  .store-2 {
    background: url('@/assets/img/trace/stories-bg-2.png') no-repeat;
  }
  .contact-us .contact-btn {
    width: 220px;
    height: 52px;
  }

  .contact-us .contact-btn span {
    line-height: 1.75;
  }
  .trace-main {
    background: #fff;
    padding-top: 75px;
  }
  .top-data {
    height: 64px;
    display: flex;
    align-items: center;
    background: #1b1b1b;
    border-radius: 8px;
    padding: 0 30px;
    color: #1cd2a9;
    width: fit-content;
    margin-top: 23px;
  }
  .contact-btn {
    background: #44d7b6;
    border-radius: 8px;
    height: 52px;
    width: 220px;
    font-size: 20px;
    font-weight: bold;
    color: #0f1627;
    line-height: 28px;
    margin-top: 53px;
  }
  .service-desc {
    display: flex;
  }
  .sv-right {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 30px 0 0 50px;
  }
  .sv-text {
    font-size: 20px;
    font-weight: 500;
    color: #333333;
    line-height: 1.6;
  }
  .block {
    padding: 40px 32px;
    border-radius: 8px;
    border: 1px solid #cccccc;
  }
  .feture-list {
    margin-top: 40px;
  }
  .main-block-title {
    font-size: 24px;
    font-weight: bold;
    color: #1b1b1b;
    line-height: 32px;
    margin-top: 36px;
  }
  .block-last {
    background: url('@/assets/img/trace/sv-last-bg.png') no-repeat;
    background-position: right bottom;
    background-size: 563px 269px;
    background-color: #1b1b1b;
  }
  .block-last .main-block-title {
    color: #fff;
  }

  .block-last .main-p {
    color: #cbcbcb;
  }
  .main-img {
    width: 160px;
    height: 160px;
  }
  .block-1 {
    background: url('@/assets/img/trace/sv-1-1.png') no-repeat;
    background-position: bottom;
  }
  .main-p {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 1.5;
    margin-top: 24px;
  }

  .trace-top-h1 {
    font-size: 60px;
    margin-top: 70px;
    line-height: 80px;
  }
  .top-left > p {
    font-size: 24px;
    line-height: 1.5;
  }

  .trace-top {
    background-size: cover;
    background-position: center;
    height: 482px;
  }
  .trace-top header {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: url('@/assets/img/trace/top-bg.png') no-repeat;
    background-size: 555px 417px;
    background-position: right bottom;
  }
  .top-text {
    font-size: 22px;
    color: #cbcbcb;
    line-height: 44px;
    margin-top: 12px;
  }
  .auto-content {
    width: 1230px;
    margin: 0 auto;
  }
  .main-title {
    border-top: 5px solid #01e4b7;
    width: fit-content;
    font-size: 36px;
    font-weight: bold;
    color: #1b1b1b;
    line-height: 44px;
    padding: 0 5px;
    margin: 0 auto;
    padding-top: 21px;
  }

  /* 手机*/
  @media screen and (max-width: 750px) {
    .auto-content {
      width: 678px;
    }
    .trace-top header {
      background-position: center bottom;
      background-size: 400px;
      width: 670px !important;
    }
    .trace-top {
      height: 752px;
    }
    .service-desc {
      flex-direction: column-reverse;
      flex-wrap: wrap;
    }
    .sv-grid {
      grid-template-columns: 1fr 1fr;
    }
    .main-p {
      font-size: 24px;
    }
    .sv-right {
      margin: 30px 0 0;
    }
    .sv-text {
      font-size: 24px;
    }
    .sv-img {
      height: 422px;
      width: 446px;
      margin: 40px auto;
    }
    .sv-text:not(:first-child) {
      margin-top: 30px;
    }
    .block-2 {
      grid-area: 2/2/2/3;
    }
    .block-4 {
      grid-area: 1/2/1/3;
    }
    .trace-content {
      margin-top: 88px !important;
    }
    .top-text {
      font-size: 24px;
    }
    .top-data {
      margin: 40px 0;
    }
    .contact-btn {
      margin: 30px auto;
    }
    .process-content {
      margin-top: 60px;
    }
    .process-content .process {
      width: 216px;
      height: 372px;
      margin-top: 24px;
      border-radius: 8px;
      border: 1px solid #d7d7d7;
    }
    .store {
      background-size: cover;
    }
    .store-p {
      font-size: 24px;
    }
    .store-grid {
      grid-template-columns: 1fr;
    }
    .store-info {
      width: 618px;
    }
    .process-title {
      font-size: 24px;
    }
  }
</style>
