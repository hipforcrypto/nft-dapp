<template>
  <Header :admin="true"></Header>
  <div
    class="w-full h-full lg:h-screen flex justify-center items-center text-6xl bg-slate-800 text-slate-200"
  >
    <div class="w-[90%] h-full lg:h-[80%] bg-slate-600 mt-32 rounded-xl flex flex-col mb-10 justify-center items-center">
      <div class="">
        <h1 class="text-center my-4">Punks Admin Dashboard</h1>
      </div>
      <div class="p-5 flex flex-col space-y-5 w-full justify-center items-center w-[90%] lg:w-[35%]">
        <span class="text-xl flex items-center mx-4 bg-slate-700 p-2 rounded w-full justify-between">
          <p>Contract state: {{ state.contract }}</p>
          <input
            @click="setMintStatus()"
            class="bg-slate-200 text-slate-800 rounded p-2 ml-5 hover:bg-slate-300 cursor-pointer justify-right"
            type="button"
            :value="`Set to ${state.isPaused}`"
          />
        </span>
        <span class="text-xl flex items-center mx-4 bg-slate-700 p-2 rounded w-full justify-between">
          <p>
            Price state: {{ (state.cost * Math.pow(10, -16)) / 100 }}
            {{ config.NETWORK.SYMBOL }}
          </p>
          <div class="flex">
            <input
              @click="setCost()"
              class="bg-slate-200 text-slate-800 rounded p-2 hover:bg-slate-300 cursor-pointer"
              type="button"
              :value="`Set to`"
            />
            <input
              class="bg-slate-200 w-20 text-slate-800 rounded p-2 ml-5 text-center"
              v-model="update.cost"
            />
          </div>
        </span>
        <span class="text-xl flex items-center mx-4 bg-slate-700 p-2 rounded w-full justify-between">
          <p>Add to Whitelist</p>
          <div class="flex">
            <input
              class="bg-slate-200 w-20 text-slate-800 rounded p-2 text-center"
              type="textarea"
              v-model="update.whitelist"
              placeholder="array"
            />
            <input
              @click="setWhiteList()"
              class="bg-slate-200 text-slate-800 rounded p-2 ml-5 hover:bg-slate-300 cursor-pointer"
              type="button"
              value="Go"
            />
          </div>
        </span>
        <span class="text-xl flex items-center mx-4 bg-slate-700 p-2 rounded w-full justify-between">
          <p>Add to OG's</p>
          <div class="flex">
            <input
              class="bg-slate-200 w-20 text-slate-800 rounded p-2 ml-5"
              type="textarea"
              v-model="update.og"
              placeholder="array"
            />
            <input
              @click="setOG()"
              class="bg-slate-200 text-slate-800 rounded p-2 ml-5 hover:bg-slate-300 cursor-pointer"
              type="button"
              value="Go"
            />
          </div>
        </span>
        <span
          class="text-xl flex items-center mx-4 bg-slate-700 p-2 rounded space-x-5 w-full justify-between"
        >
          <p>Set MA: {{ state.mintamount }}</p>
          <div class="flex">
            <input
              @click="setCost()"
              class="bg-slate-200 text-center text-slate-800 rounded p-2 hover:bg-slate-300 cursor-pointer"
              type="button"
              :value="`Set to`"
            />
            <input
              class="w-20 bg-slate-200 text-slate-800 rounded p-2 ml-5"
              v-model="update.mintamount"
            />
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import config from '../config/config.json' assert { type: 'json' };
import abi from '../config/abi.json' assert { type: 'json' };

export default {
  components: {
    Header,
  },

  data: () => {
    return {
      contract: undefined,
      config: config,
      update: {
        cost: 0,
        whitelist: [],
        og: [],
        mintamount: 5,
      },
      state: {
        contract: undefined,
        isPaused: true,
        cost: undefined,
        mintamount: undefined,
      },
    };
  },
  async created() {
    const eth = await detectEthereumProvider();
    const provider = new ethers.providers.Web3Provider(eth);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(config.CONTRACT_ADDRESS, abi, signer);
    this.contract = contract;

    const paused = await contract.paused();
    this.getContractState(paused);

    this.state.cost = await contract.cost();
    this.state.mintamount = await contract.maxMintAmount();
  },

  methods: {
    getContractState(paused) {
      this.state.isPaused = paused;
      if (paused) this.state.contract = 'Mint Off';
      else this.state.contract = 'Mint On';
    },
    setMintStatus() {
      this.contract.pause(!this.state.isPaused);
    },
    setCost(cost) {
      this.contract.setCost(cost);
    },
    setWhiteList() {
      this.contract.addToFirstWhitelist(this.update.whitelist);
    },
    setOG() {
      this.contract.addToSecondWhitelist(this.update.og);
    },
    setMaxMint() {
      this.contract.setmaxMintAmount(this.update.mintamount);
    },
  },
};
</script>
