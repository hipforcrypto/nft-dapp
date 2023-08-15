<template>
    <main>
      <section class="page-background py-16">
        <div class="container flex justify-center">
          <div
            class="w-full md:w-3/4 lg:w-1/2 bg-black py-10 px-8 text-center text-white rounded-2xl border-gradient"
          >
            <img
              src="../assets/ehdk-card.gif"
              class="mx-auto rounded-2xl"
              width="350"
              height="350"
            />
            <h1 class="text-white text-4xl lg:text-6xl font-semibold mt-10">
              Founders Pass
            </h1>
            <p class="text-white mt-4 mb-2 text-xl">
              <span class="accent-color">1,000</span> Passes
            </p>
            <p class="text-xl">
              <span class="text-primary">5</span>
              Per wallet
            </p>
            <h2 class="text-4xl text-primary font-semibold mt-8 mb-2">Public</h2>
            <p class="text-xl">0.05 ETH each</p>
            <div class="flex justify-center space-x-10 mt-8">
              <div class="flex justify-center items-center">
                <button @click="decrement" class="w-6 text-center">
                  <MinusIcon class="h-6" /></button
                ><input
                  class="light-gray text-center w-24 text-2xl"
                  type="number"
                  v-model="quantity"
                />
                <button @click="increment" class="w-6 text-center">
                  <PlusIcon class="h-6" />
                </button>
              </div>
              <div>
                <button class="button px-10 py-2 rounded-full">Mint</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="light-gray py-10">
        <div class="container">
          <img
            src="../assets/logo.png"
            alt="EDKH Labs logo"
            class="mx-auto"
          />
          <div class="flex flex-wrap justify-between mt-16">
            <p class="text-sm">
              Contact Now:
              <a
                href="mailto:info@islandjusticeleague.com"
                class="hover:underline"
                >info@islandjusticeleague.com</a
              >
            </p>
            <p class="text-sm">Terms and Conditions</p>
          </div>
        </div>
        <div class="container mt-8 text-center">
          <div class="lighter-gray w-full md:w-3/4 mx-auto py-4 opacity-30">
            <p class="text-sm text-white">
            &copy; {{ currentYear }} Island Justice League. Labs All Rights Reserved 
          </p>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import { MinusIcon, PlusIcon } from "@heroicons/vue/24/solid";
  const quantity = ref(1);
  function increment() {
    if (quantity.value >= 1) {
      quantity.value++;
    } else {
      quantity.value = 1;
    }
  }
  function decrement() {
    if (quantity.value >= 2) {
      quantity.value--;
    } else {
      quantity.value = 1;
    }
  }
  const currentYear = new Date().getFullYear();
  </script>
  
  <style lang="scss" scoped>
  .page-background {
    background-image: linear-gradient(180deg, #000000 0%, #f2295b00 42%),
      url(../assets/home-background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .border-gradient {
    background: linear-gradient(#1a1b1d, #1a1b1d) padding-box,
      linear-gradient(to top, #a39794, #682809) border-box;
    border: 4px solid transparent;
  }
  .button {
    background-image: linear-gradient(230deg, #b8541b 0%, #11c2e3cc 100%);
  }
  p {
    color: #c6c0c0;
  }
  .accent-color {
    color: #bbb18f;
  }
  .light-gray {
    background-color: #1a1b1d;
  }
  .lighter-gray {
    background-color: #2F323C;
  }
  </style>
  