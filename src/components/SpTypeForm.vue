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
      <sp-h3>List of {{ type }} items</sp-h3>
      <div class="item" v-for="instance in instanceList" :key="instance.id">
        <div class="item__field" v-for="(value, key) in instance" :key="key">
          <div class="item__field__key">{{ key }}:</div>
          <div class="item__field__value">
            {{ value }}
          </div>
        </div>
      </div>
      <div class="card__empty" v-if="instanceList.length < 1">
        There are no {{ type }} items yet. Create one using the form.
      </div>
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
.item {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
}
.item__field {
  display: grid;
  line-height: 1.5;
  grid-template-columns: 15% 1fr;
  grid-template-rows: 1fr;
  word-break: break-all;
}
.item__field__key {
  color: rgba(0, 0, 0, 0.25);
  word-break: keep-all;
  overflow: hidden;
}
.card__empty {
  margin-bottom: 1rem;
  border: 1px dashed rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.25);
  text-align: center;
  min-height: 8rem;
}
</style>

<script>
import SpInput from "./SpInput";
import IconLoading2 from "./IconLoading2";
import SpH3 from "./SpH3";
import SpButton from "./SpButton";

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
    this.$store.dispatch("cosmos/entityFetch", {
      type: this.type,
      module: this.module,
    });
  },
  computed: {
    hasAddress() {
      return !!this.$store.state.cosmos.account.address;
    },
    instanceList() {
      return this.$store.state.cosmos.data[`${this.module}/${this.type}`] || [];
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
