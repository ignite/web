<template>
  <div>
    <!-- <sp-auto-sidebar> -->
    <div class="container">
      <sp-sign-in />
      <sp-bank-balances />
      <sp-token-send />
      <sp-type-item :value="{ type: 'post', fields: ['title', 'body'] }" />
    </div>
    <!-- </sp-auto-sidebar> -->
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>

<script>
import SpSignIn from "@/components/SpSignIn";
import SpBankBalances from "@/components/SpBankBalances";
import SpTokenSend from "@/components/SpTokenSend";
import SpTypeItem from "@/components/SpTypeItem";
import SpAutoSidebar from "@/components/SpAutoSidebar";

export default {
  components: {
    SpSignIn,
    SpBankBalances,
    SpTokenSend,
    SpTypeItem,
    SpAutoSidebar,
  },
};
</script>
