<template>
  <Header @login="login()"></Header>
  <Paused v-if="paused"></Paused>
  <!-- <div class="w-full h-screen bg flex justify-center items-center text-slate-100 px-5">
    <img :src="bg" class="hidden lg:block md:rounded-full h-[40vh] w-[40vh]" />
    <div class="space-y-28 mt-10">
      <div class="space-y-3 flex flex-col justify-center items-center">
        <div class="flex justify-center items-center flex-col text-center">
          <h1 ref="header" class="pg text-slate-200 text-2xl lg:text-6xl">MINT YOUR <p class="textgradient py-5 inline-block"> PUNKS</p></h1>
          <p class="mpr text-xl">There is {{ Csupply }}/{{ Tsupply }} punks minted</p>
        </div>
      </div>
      <div class="mpr space-y-10 flex justify-center items-center flex-col text-2xl">
        <div class="flex justify-center items-center">
          <button class="px-4 bg-pink-800 rounded-full align font-bold" @click="decrement">
            -
          </button>
          <input class="w-20 bg-transparent items-center text-center" v-model="amount" />
          <button class="px-4 bg-violet-800 rounded-full align-middle font-bold" @click="increment">
            +
          </button>
        </div>
        <p>{{ totalCost }} {{ config.NETWORK.SYMBOL }}</p>

        <div class="flex space-x-5 pg">
          <button
            class="py-3 px-12 text-3xl rounded-md bg-gradient-to-br from-pink-800 to-violet-800 transition-all hover:bg-gradient-to-tl hover:text-4xl"
            @click="mint">
            MINT
          </button>
        </div>
        <div class="w-[30%] flex justify-center text-center">
          <p v-if="message" class="fixed text-2xl" :class="messageColor">{{ message }}
          <a class="text-blue-600 underline" target="_blank" :href="link">{{ linkMessage }}</a>
          </p>
        </div>
      </div>
    </div>
    <img :src="bg" alt="" class="hidden lg:block rounded-full h-[40vh] w-[40vh]" />
  </div> -->

  <section class="page-background w-full h-screen bg flex justify-center items-center text-slate-100 px-5">
    <div class="container flex justify-center py-24">
      <div class="w-full md:w-3/4 lg:w-1/2 bg-black py-10 px-8 text-center text-white rounded-2xl border-gradient">
        <img src="../assets/ehdk-card.gif" class="mx-auto rounded-2xl" width="350" height="350" />
        <h1 ref="header" class="text-white text-4xl lg:text-6xl font-semibold mt-10">
          Founders Pass
        </h1>
        <p class="text-white mt-4 mb-2 text-xl">
          <span class="accent-color">There are {{ Csupply }}/{{ Tsupply }} Passes minted</span>
        </p>
        <p class="text-xl">
          <span class="text-primary">5</span>
          Per wallet
        </p>
        <h2 class="text-4xl text-primary font-semibold mt-8 mb-2">Public Mint</h2>
        <p class="text-xl mb-5">0.05 ETH each</p>
        
        <div class="mpr space-y-10 flex justify-center items-center flex-col text-2xl">
          <div class="flex justify-center items-center">
            <button class="px-4 bg-pink-800 rounded-full align font-bold" @click="decrement">
              -
            </button>
            <input class="w-20 bg-transparent items-center text-center" v-model="amount" />
            <button class="px-4 bg-violet-800 rounded-full align-middle font-bold" @click="increment">
              +
            </button>
          </div>
          <p>{{ totalCost }} {{ config.NETWORK.SYMBOL }}</p>

          <div class="flex space-x-5 pg">
            <button
              class="py-3 px-12 text-3xl rounded-md bg-gradient-to-br from-pink-800 to-violet-800 transition-all hover:bg-gradient-to-tl hover:text-4xl"
              @click="mint">
              MINT
            </button>
          </div>
          <div class="w-[30%] flex justify-center text-center">
            <p v-if="message" class="fixed text-2xl" :class="messageColor">{{ message }}
              <a class="text-blue-600 underline" target="_blank" :href="link">{{ linkMessage }}</a>
            </p>
          </div>
        </div>
        <!-- <div class="flex justify-center space-x-10 mt-8">
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
            </div> -->
      </div>
    </div>
  </section>
  <section class="light-gray py-10">
    <div class="container">
      <img src="../assets/logo.png" alt="EDKH Labs logo" class="mx-auto" />
      <div class="flex flex-wrap justify-between mt-16">
        <p class="text-sm">
          Contact Now:
          <a href="mailto:info@islandjusticeleague.com" class="hover:underline">info@islandjusticeleague.com</a>
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
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fade_up } from '../core';

const header = ref()

const animations = [
  fade_up(header, 800)
]

onMounted(() => {
  animations.forEach(animation => animation.mount())
})
onUnmounted(() => animations.forEach(animation => animation.unmount()))

</script>

<script>
import Paused from '../components/Paused.vue';
import Header from '../components/Header.vue';
import background from '../assets/background.gif';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import config from '../config/config.json';
import abi from '../config/abi.json';

export default {
  components: {
    Header,
    Paused,
  },
  data: function () {
    return {
      adminPannel: false,
      amount: 0,
      limit: 5,
      message: undefined,
      link: undefined,
      linkMessage: undefined,
      messageError: false,
      messageColor: undefined,
      bg: background,
      ethereum: window.ethereum,
      wallet: undefined,
      contract: undefined,
      Tsupply: undefined,
      Csupply: undefined,
      totalCostWei: undefined,
      totalGasLimit: undefined,
      totalCost: 0,
      config: config,
      paused: undefined,
    };
  },

  watch: {
    amount: function () {
      this.updateCost();
    },
    messageError: function (istrue) {
      if (istrue) {
        this.messageColor = 'text-red-500';
        return;
      }
      this.messageColor = 'text-emerald-500';
    },
  },

  async created() {
    this.eth = await detectEthereumProvider();
    const provider = new ethers.providers.Web3Provider(this.eth);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(config.CONTRACT_ADDRESS, abi, signer);
    this.contract = contract;
    this.$store.commit('setContract', contract);
    this.paused = await this.contract.paused();

    this.Tsupply = await contract.maxSupply();
    this.Csupply = await contract.totalSupply();
  },

  methods: {
    increment() {
      if (this.amount < this.limit) this.amount++;
    },
    decrement() {
      if (this.amount > 0) this.amount--;
    },

    updateCost() {
      this.totalCostWei = String(config.WEI_COST * this.amount);
      this.totalGasLimit = String(config.GAS_LIMIT * this.amount);
      this.totalCost = (this.totalCostWei * Math.pow(10, -16)) / 100;
    },

    info(text, error, link = undefined, linkMessage = undefined) {
      this.message = text
      this.messageError = error
      this.link = link
      this.linkMessage = linkMessage
    },

    async mint() {
      const {
        wallet,
        amount,
        info,
        limit,
        totalGasLimit,
        totalCostWei,
        account,
        contract,
      } = this;

      if (!wallet) return this.login();
      if (amount <= 0) return info('Minting amount invalid', true);
      else if (amount > limit)
        return info('Minting amount execeed limit', true);

      info('processing... ', false);

      await contract
        .mint(amount, {
          gasLimit: totalGasLimit,
          from: account,
          value: totalCostWei,
        })
        .then(async (tx) => {
          info(`Transaction processing ! Check it on explorer: `, false, `${config.SCAN_LINK}${tx.hash}`, "here")
          const provider = new ethers.providers.Web3Provider(this.eth)
          const receipt = await provider.waitForTransaction(tx.hash);
          if (receipt.status === 1) {
            const nftNBR = parseInt(this.Csupply) + 1
            info(`Congratulations your NFT has been minted ! check it on marketplace`, false, `${config.MARKETPLACE_LINK}${nftNBR}`, "here")
            this.Csupply = await contract.totalSupply();
            return
          }
          info(`Oops the transaction has been canceled, something went wrong`, true)
        })
        .catch(error => {
          if (error.code === 'ACTION_REJECTED') info('user denied transaction', true);
          return
        });

    },

    async handleAccountsChanged(accounts) {
      const { currentAccount, contract, $store, checkChain } = this;

      if (accounts.length === 0) {
      } else if (accounts[0] !== currentAccount) {
        checkChain();
        this.wallet = accounts[0];

        $store.commit('setwallet', {
          wallet: accounts[0],
        });

        const owner = await contract.owner();

        if (owner.toLowerCase() === this.wallet) {
          $store.commit('checkOwner', {
            isOwner: true,
          });
        }
      }
    },

    async login() {
      const { info, handleAccountsChanged } = this;
      const ethereum = window.ethereum
      if (!ethereum) {
        window.location.href = 'https://metamask.io/download/';
      }

      ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleAccountsChanged)
        .catch(err => {
          if (err.code === 4001) {
            info('Please connect to MetaMask.', true);
          } else {
            info(err.message, true);
          }
        });

      ethereum.on('chainChanged', () => {
        window.location.reload();
      });

      ethereum.on('accountsChanged', accounts => {
        handleAccountsChanged(accounts);
      });
    },

    async addNetwork() {
      const { ethereum } = this
      const { HID, NAME, SYMBOL, URL } = config.NETWORK
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: HID,
            chainName: NAME,
            nativeCurrency: {
              name: NAME,
              symbol: SYMBOL,
              decimals: 18,
            },
            rpcUrls: [URL],
          },
        ],
      }).then(() => window.location.reload());
    },

    async checkChain() {
      const { ethereum, info } = this;
      const { HID, NAME, ID } = config.NETWORK

      const networkId = await ethereum.request({
        method: 'net_version',
      });

      if (networkId != ID) {
        info(`Bad network switch to ${NAME}`, true);
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: HID }],
        }).then(() => window.location.reload())
          .catch((err) => {
            if (err.code === 4902) {
              this.addNetwork();
              info(`Please add ${NAME} network.`, true)
              return
            }
            info(`Please switch to ${NAME} network.`, true)
          })
      } else info('', true);
    },
  },
};
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
