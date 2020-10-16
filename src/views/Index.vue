<template>
  <div>
    <div class="container">
      <sp-sign-in />
      <sp-bank-balances />
      <sp-token-send />
      <sp-type-form type="post" :fields="['title', 'body']" />
      <sp-type-form type="post" :fields="['title', 'body']" module="foo" />
      <sp-type-form type="post" :fields="['title', 'body']" module="bar" />
    </div>
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
import SpTypeForm from "@/components/SpTypeForm";
import SpAutoSidebar from "@/components/SpAutoSidebar";

export default {
  components: {
    SpSignIn,
    SpBankBalances,
    SpTokenSend,
    SpTypeForm,
    SpAutoSidebar,
  },
};
</script>
