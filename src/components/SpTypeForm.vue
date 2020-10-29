<template>
  <div>
    <div class="container">
      <sp-h3>New {{ type }}</sp-h3>
      <div v-for="field in fields" :key="field">
        <sp-input
          v-model="fieldsList[field]"
          type="text"
          :placeholder="title(field)"
          :disabled="flight"
        />
      </div>
      <div class="button">
        <sp-button
          :loading="flight"
          :disabled="!valid || !hasAddress || flight"
          @click="submit"
        >
          Create {{ type }}
        </sp-button>
      </div>
      <sp-type-list :type="type" :module="module"/>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800&display=swap");

.container {
  font-family: "Inter";
}
.button {
  display: inline-block;
}
</style>

<script>
import SpInput from "./SpInput";
import IconLoading2 from "./IconLoading2";
import SpH3 from "./SpH3";
import SpButton from "./SpButton";
import SpTypeList from "./SpTypeList";

export default {
  props: {
    type: {
      type: String,
    },
    fields: {
      default: () => [],
    },
    preflight: {
      default: () => {
        return (obj) => obj;
      },
    },
    module: {
      type: String,
    },
  },
  components: {
    SpInput,
    IconLoading2,
    SpH3,
    SpButton,
    SpTypeList,
  },
  data: function() {
    return {
      fieldsList: {},
      flight: false,
    };
  },
  created() {
    (this.fields || []).forEach((field) => {
      this.$set(this.fieldsList, field, "");
    });
  },
  computed: {
    hasAddress() {
      return !!this.$store.state.cosmos.account.address;
    },
    valid() {
      return Object.values(this.fieldsList).every((el) => {
        return el.trim().length > 0;
      });
    },
  },
  methods: {
    title(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async submit() {
      if (this.valid && !this.flight && this.hasAddress) {
        this.flight = true;
        const payload = {
          type: this.type,
          body: this.preflight(this.fieldsList),
          module: this.module,
        };
        await this.$store.dispatch("cosmos/entitySubmit", payload);
        await this.$store.dispatch("cosmos/entityFetch", {
          type: this.type,
          body: this.fieldsList,
          module: this.module,
        });
        this.flight = false;
        Object.keys(this.fieldsList).forEach((f) => {
          this.fieldsList[f] = "";
        });
      }
    },
  },
};
</script>
