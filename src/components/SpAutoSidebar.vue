<style scoped>
.sidebar {
  background: rgba(247, 247, 247, 1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 300px;
  height: 100vh;
}
.container {
  margin-left: 300px;
}
.main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}
@media screen and (max-width: 900px) {
  .sidebar {
    display: none;
  }
  .container {
    margin-left: 0;
  }
  .main {
    margin-left: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      categories: [],
      category: "wallet",
      categoryCurrent: null,
    };
  },
  render(h, context) {
    for (let i = 0; i < this.$slots.default.length; i++) {
      const e = this.$slots.default[i];
      const { category } = e.componentOptions.Ctor.extendOptions;
      console.log(this.categories.indexOf(category));
    }
    const comps = this.$slots.default.filter((e) => {
      const { category } = e.componentOptions.Ctor.extendOptions;
      return category === this.category;
    });
    return h("div", [
      h("div", { class: "sidebar" }),
      h("div", { class: "container" }, [h("div", { class: "main" }, [comps])]),
    ]);
  },
};
</script>
