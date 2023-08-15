<template>
    <main>
      <section class="page-background">
        <div class="ellipse-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            class=""
          >
            <path
              class="elementor-shape-fill"
              d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"
            ></path>
          </svg>
        </div>
        <div class="container pt-16 text-center uppercase">
          <h1 class="uppercase font-semibold">
            <span class="block text-primary text-2xl md:text-4xl mb-2"
              >Say Hello, To The </span
            ><span class="text-5xl md:text-7xl tracking-wide text-white block"
              >Founders Pass</span
            >
          </h1>
          <p class="text-white text-xl md:text-3xl tracking-wide mt-4 font-light">
            With the Biggest Balls in Web3
          </p>
          <div class="video-container">
            <img
              src="../assets/ehdk-card.gif"
              class="mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
      <section class="md:pt-10 pb-6 circle-background">
        <div class="container text-center">
          <h2 class="text-center uppercase mb-6">
            <span
              class="text-white text-5xl md:text-6xl block mb-2 font-semibold tracking-wide"
              >Shameless about </span
            ><span
              class="block text-primary text-3xl md:text-5xl font-light tracking-wide"
              >Comedy. Chaos. Culture. Charity</span
            >
          </h2>
          <div class="mx-auto">
            <p
              class="text-white text-xl md:text-2xl font-light leading-loose mb-4 tracking-wide"
            >
              For the love of God, Everyone, lighten up. Let’s have some fun at
              the establishment’s expense. EDKH is an unbothered, members-only,
              satirical-army of self-deprecating, rolling-stone creatives,
              challengers, comedians, & who tf cares.
              <span class="text-white">Are you in?</span>
            </p>
            <p class="text-white mb-4 font-light tracking-wide">
              NWO is undergoing a rebrand. The New World Order?
            </p>
            <p class="text-white mb-4 font-semibold tracking-wide">
              This is the New Web3 Order.
            </p>
            <div class="pt-4 pb-10">
              <a
                class="rounded-full px-6 py-2 border border-white text-white uppercase button"
                href="/"
                >Minting soon</a
              >
            </div>
          </div>
        </div>
        <div class="container">
          <div
            class="w-full md:w-3/4 mx-auto p-6 border border-primary rounded-2xl mb-16 bg-black bg-opacity-30"
          >
            <ul
              class="list-disc ml-6 text-white space-y-4 font-light text-xl tracking-wide"
            >
              <li>2 Passes per wallet</li>
              <li>
                Voting Rights to Influence EDKH Labs first project, Island Justice
                League
              </li>
              <li>
                Each Pass includes the right to claim 1 Island Justice League
              </li>
              <li>Free Claim for IJL, Future Projects & Drops</li>
              <li>Closed Discord Access</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="bg-black border-primary border-t-2">
        <div class="container pt-6 text-center">
          <h2 class="text-4xl md:text-5xl text-white uppercase tracking-wide">
            Partners
          </h2>
          <div class="flex flex-wrap justify-center">
            <div class="w-auto px-6">
              <img
                src="../assets/rebella.jpg"
                width="250px"
                class="mx-auto"
              />
            </div>
            <div class="w-auto px-6">
              <img
                src="../assets/Midnight-Sun-Logo.jpg"
                width="250px"
                class="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <footer class="border-primary border-t-2 bg-black py-2">
        <div class="container text-center">
          <p class="text-sm text-white">
            &copy; EDKH Labs All Rights Reserved {{ currentYear }}
          </p>
        </div>
      </footer>
    </main>
  </template>
  
  <script setup>
  const currentYear = new Date().getFullYear();
  </script>
  
  <style lang="scss" scoped>
  h1,
  p {
    @apply text-2xl;
  }
  .page-background {
    background-image: linear-gradient(180deg, #000000 0%, #f2295b00 42%),
      url(../assets/home-background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0px 0px 0px 0px;
    position: relative;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0px 0px 0px 0px;
  }
  .ellipse-svg {
    position: relative;
    bottom: -1px;
    overflow: hidden;
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 0;
    direction: ltr;
    transform: rotate(180deg);
    svg {
      width: calc(123% + 1.3px);
      height: 165px;
      z-index: -1;
      display: block;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .video-container {
    max-height: 450px;
    max-width: 450px;
    background-color: #000;
    border-style: solid;
    border-width: 3px 3px 3px 3px;
    border-color: #c3c1be;
    border-radius: 20px 20px 20px 20px;
    position: relative;
    @apply mx-auto mt-6;
  }
  .button {
    background-image: linear-gradient(230deg, #b8541b 0%, #11c2e3cc 100%);
  }
  .circle-background {
    background-image: url(../assets/circle-background.jpg);
  }
  </style>
  