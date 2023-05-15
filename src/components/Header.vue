<template>
  <div
    class="absolute z-20 w-full h-16 bg-gradient-to-r from-pink-800 to-violet-800 flex"
  >
    <div class="hidden lg:block absolute top-4 left-5 text-xl text-slate-100 font-extrabold">
      NftDapp
    </div>
    <div
      class="space-x-20 h-full flex text-xl text-slate-100 w-full justify-center items-center"
    >
      <a
        class="cursor-pointer hover:text-slate-200"
        target="_blank"
        href="https://twitter.com/ShardeumPunks"
        >Twitter</a
      >
      <a
        class="cursor-pointer hover:text-slate-200"
        target="_blank"
        href="https://discord.com/invite/zFrzvSggnS"
        >Discord</a
      >
      <a
        class="cursor-pointer hover:text-slate-200"
        target="_blank"
        href="https://crew3.xyz/c/shardeumpunks/questboard?invitationId=WL9c6nnUmO4CaPP2ATmXD"
        >Crew3</a
      >
    </div>
    <div class="absolute right-0 top-20 md:top-5">
      <span
        v-if="this.$store.state.isOwner && !adminComponent"
        @click="admin"
        class="bg-red-600 text-slate-100 rounded-md p-2 mr-5 cursor-pointer font-extrabold hover:bg-red-500"
        >Admin pannel</span
      >
      <span
        v-if="this.$store.state.isOwner && adminComponent"
        @click="mint"
        class="bg-blue-600 text-slate-100 rounded-md p-2 mr-5 cursor-pointer font-extrabold hover:bg-blue-500"
        >Mint pannel</span
      >
      <span
        v-if="!this.$store.state.wallet"
        @click="login"
        class="bg-slate-200 rounded-md p-2 mr-5 cursor-pointer font-extrabold hover:bg-slate-300"
        >Connect wallet</span
      >
      <span
        v-else
        class="bg-emerald-500 text-slate-100 rounded-md p-2 mr-5 font-extrabold"
        >{{ this.$store.state.wallet.wallet.slice(0, 5) }}...</span
      >
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      adminComponent: false,
    };
  },

  mounted() {
    this.isAdminComponent()
  },

  methods: {
    isAdminComponent() {
      const route = this.$route.name
      if(route === "Admin") {
        this.adminComponent = true
      } else this.adminComponent = false
    },
    login() {
      this.$emit('login');
    },
    admin() {
      this.$router.push('/admin');
    },
    mint() {
      this.$router.push('/');
    },
  },
};
</script>
